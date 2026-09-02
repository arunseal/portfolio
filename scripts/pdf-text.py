#!/usr/bin/env python3
"""Extract the text layer of a PDF in reading order, using only the stdlib.

Used to verify that the generated resume PDF is readable by applicant tracking
systems: run it against public/ArunavaSeal-Resume.pdf and confirm the output
reads top-to-bottom as a clean plain-text resume, with nothing interleaved.

Each embedded font carries its own ToUnicode CMap, so glyph ids are resolved
against the font currently selected by the Tf operator. Merging the CMaps into
one table silently corrupts characters wherever two fonts reuse a glyph id.

Usage: python3 scripts/pdf-text.py <file.pdf>
"""
import re
import sys
import zlib


def parse_objects(data):
    """Return {object number: (dict_bytes, decompressed_stream_or_None)}."""
    starts = [(int(m.group(1)), m.end()) for m in re.finditer(rb'(\d+)\s+0\s+obj\b', data)]
    objects = {}
    for index, (number, body_start) in enumerate(starts):
        body_end = starts[index + 1][1] if index + 1 < len(starts) else len(data)
        body = data[body_start:body_end]
        stream_match = re.search(rb'stream\r?\n?', body)
        payload = None
        if stream_match:
            end = body.find(b'endstream', stream_match.end())
            if end >= 0:
                for offset in (0, 1, 2):
                    try:
                        payload = zlib.decompress(body[stream_match.end() + offset:end])
                        break
                    except zlib.error:
                        pass
        header = body[:stream_match.start()] if stream_match else body
        objects[number] = (header, payload)
    return objects


def parse_cmap(stream):
    """Parse a ToUnicode CMap into {glyph id: text}."""
    cmap = {}
    if not stream:
        return cmap
    text = stream.decode('latin1')
    for block in re.findall(r'beginbfchar(.*?)endbfchar', text, re.S):
        for src, dst in re.findall(r'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', block):
            cmap[int(src, 16)] = ''.join(
                chr(int(dst[i:i + 4], 16)) for i in range(0, len(dst), 4)
            )
    for block in re.findall(r'beginbfrange(.*?)endbfrange', text, re.S):
        for lo, hi, dst in re.findall(
            r'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', block
        ):
            base = int(dst, 16)
            low = int(lo, 16)
            for code in range(low, int(hi, 16) + 1):
                cmap[code] = chr(base + code - low)
    return cmap


def build_font_cmaps(data, objects):
    """Map resource names (/F4) to that font's glyph table."""
    font_cmaps = {}
    for header, _ in objects.values():
        for name, number in re.findall(rb'/(F\d+)\s+(\d+)\s+0\s+R', header):
            font_number = int(number)
            if font_number not in objects:
                continue
            to_unicode = re.search(rb'/ToUnicode\s+(\d+)\s+0\s+R', objects[font_number][0])
            if to_unicode:
                target = int(to_unicode.group(1))
                if target in objects:
                    font_cmaps[name.decode()] = parse_cmap(objects[target][1])
    return font_cmaps


def render_block(block, font_cmaps, current_font):
    """Decode one BT..ET block, following Tf font switches."""
    out = []
    for token in re.finditer(
        r'/(F\d+)\s+[\d.]+\s+Tf|<([0-9A-Fa-f\s]*)>|\(((?:\\.|[^\\()])*)\)', block
    ):
        if token.group(1):
            current_font = token.group(1)
        elif token.group(2) is not None and token.group(2).strip():
            cmap = font_cmaps.get(current_font, {})
            digits = re.sub(r'\s', '', token.group(2))
            out.append(
                ''.join(
                    cmap.get(int(digits[i:i + 4], 16), '�')
                    for i in range(0, len(digits), 4)
                )
            )
        elif token.group(3):
            literal = re.sub(r'\\([()\\])', r'\1', token.group(3))
            out.append(literal)
    return ''.join(out), current_font


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    data = open(sys.argv[1], 'rb').read()
    objects = parse_objects(data)
    font_cmaps = build_font_cmaps(data, objects)
    pages = [
        payload
        for _, payload in objects.values()
        if payload and b'BT' in payload and (b'Tj' in payload or b'TJ' in payload)
    ]

    for page_no, stream in enumerate(pages, 1):
        text = stream.decode('latin1')
        print(f'\n########## PAGE {page_no} ##########')
        current_font = None
        # Group by vertical position so output follows the page's reading order
        # rather than the order operators happen to appear in the stream.
        lines = {}
        for block_match in re.finditer(r'BT(.*?)ET', text, re.S):
            block = block_match.group(1)
            tm = re.search(
                r'([-\d.]+) ([-\d.]+) ([-\d.]+) ([-\d.]+) ([-\d.]+) ([-\d.]+) Tm', block
            )
            x, y = (float(tm.group(5)), float(tm.group(6))) if tm else (0.0, 0.0)
            chunk, current_font = render_block(block, font_cmaps, current_font)
            if chunk.strip():
                lines.setdefault(round(y, 1), []).append((round(x, 1), chunk))
        for y in sorted(lines):
            print(''.join(chunk for _, chunk in sorted(lines[y])))


if __name__ == '__main__':
    main()
