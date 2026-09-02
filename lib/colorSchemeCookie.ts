import type { NextPageContext } from 'next';

// One cookie does not justify a dependency. cookies-next v6 splits into
// separate client/server entry points, which does not fit App.getInitialProps
// running on both sides -- and dropping it closes its advisories for good.
const COOKIE_NAME = 'mantine-color-scheme';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

function readCookieHeader(header: string | undefined, name: string) {
  return header
    ?.split(';')
    .map((pair) => pair.trim().split('='))
    .find(([key]) => key === name)?.[1];
}

/** Reads the scheme server-side from the request, client-side from document. */
export function readColorScheme(ctx?: NextPageContext) {
  if (ctx?.req) return readCookieHeader(ctx.req.headers.cookie, COOKIE_NAME);
  if (typeof document !== 'undefined') return readCookieHeader(document.cookie, COOKIE_NAME);
  return undefined;
}

export function writeColorScheme(value: string) {
  if (typeof document === 'undefined') return;
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${MAX_AGE_SECONDS}; path=/; samesite=lax`;
}
