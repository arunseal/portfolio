import React from 'react';
import {
  PROFILE,
  RESUME_EDUCATION,
  RESUME_EXPERIENCE,
  RESUME_PATENTS,
  RESUME_PUBLICATIONS,
  SUMMARY,
} from '../constants/resume';

// Layout mirrors the 2023 Word resume: centred name block over a rule, ruled
// section headings, and company/school lines with location and dates pushed
// right. Deliberately plain semantic HTML in a single top-to-bottom flow --
// applicant tracking systems read the PDF's text layer in DOM order, so the
// two-sided rows below put the left-hand text first and never split the page
// into columns.
const Resume = () => (
  <div className="resume">
    <div className="resume-actions">
      <button type="button" onClick={() => window.print()}>
        Print / Save as PDF
      </button>
    </div>

    <header className="resume-header">
      <h1>{PROFILE.name}</h1>
      <p className="resume-subtitle">{PROFILE.title}</p>
      <p className="resume-contact">
        {`${PROFILE.location} || ${PROFILE.email} || ${PROFILE.linkedin}`}
      </p>
    </header>

    <h2>Summary</h2>
    <p>{SUMMARY}</p>

    <h2>Experience</h2>
    {RESUME_EXPERIENCE.map((exp) => (
      <section className="resume-entry" key={exp.company}>
        <div className="resume-row">
          <span className="resume-org">{exp.company}</span>
          <span className="resume-meta">{`\u00A0${exp.location} | ${exp.dates}`}</span>
        </div>
        {exp.roles.map((role) => (
          <div className="resume-row resume-role" key={role.title}>
            <span>{role.title}</span>
            <span className="resume-meta">{`\u00A0${role.dates}`}</span>
          </div>
        ))}
        <ul>
          {exp.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>
    ))}

    <h2>Education</h2>
    {RESUME_EDUCATION.map((ed) => (
      <section className="resume-entry resume-edu" key={ed.school}>
        <div className="resume-row">
          <span className="resume-org">{ed.school}</span>
          <span className="resume-meta">{`\u00A0${ed.location} | ${ed.dates}`}</span>
        </div>
        <p className="resume-degree">{ed.degree}</p>
        {ed.major && <p className="resume-major">{ed.major}</p>}
      </section>
    ))}

    <h2>Patents &amp; Publications</h2>
    <ul className="resume-entry">
      {RESUME_PATENTS.map((pat) => (
        <li key={pat.number}>{`${pat.title}. ${pat.number}, ${pat.status}.`}</li>
      ))}
      {RESUME_PUBLICATIONS.map((pub) => (
        <li key={pub.title}>{`${pub.title}. ${pub.venue}.`}</li>
      ))}
    </ul>
  </div>
);

export default Resume;
