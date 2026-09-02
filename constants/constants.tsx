import React from 'react';
import { SiHackerrank } from 'react-icons/si';
import { IconBrandLinkedin, IconBrandGithubFilled } from '@tabler/icons-react';

export const PAGES = [
  { link: '/', label: 'Home' },
  { link: '/experience', label: 'Experience' },
  { link: '/education', label: 'Education' },
  { link: '/publications', label: 'Publications' },
  { link: '/patents', label: 'Patents' },
  { link: '/certifications', label: 'Certifications' },
  { link: '/extracurriculars', label: 'Extra-Curriculars' },
  { link: '/resume', label: 'Resume' },
];

export const THEME_ICON_SIZE = 50;
export const SOCIALS = [
  {
    name: 'LinkedIn',
    icon: <IconBrandLinkedin />,
    url: 'https://www.linkedin.com/in/arunava-seal/',
  },
  {
    name: 'GitHub',
    icon: <IconBrandGithubFilled />,
    url: 'https://github.com/arunseal',
  },
  {
    name: 'HackerRank',
    icon: <SiHackerrank />,
    url: 'https://www.hackerrank.com/arunseal?hr_r=1',
  },
];

export const PUBLICATIONS = [
  {
    file: 'public/markdown/publications/pub1.md',
    link: 'https://arxiv.org/abs/2104.00084',
  },
  {
    file: 'public/markdown/publications/pub2.md',
    link: 'https://arxiv.org/abs/2009.09093',
  },
  {
    file: 'public/markdown/publications/pub3.md',
    link: 'https://www.irjet.net/archives/V4/i7/IRJET-V4I7565.pdf',
  },
  {
    file: 'public/markdown/publications/pub4.md',
    link: 'https://ieeexplore.ieee.org/document/8067579',
  },
];

export const PATENTS = [
  {
    file: 'public/markdown/patents/patent1.md',
  },
  {
    file: 'public/markdown/patents/patent2.md',
  },
  {
    file: 'public/markdown/patents/patent3.md',
  },
];

export const EDUCATIONS = [
  {
    file: 'public/markdown/education/umich.md',
    imageSrc: 'images/UMLogo.png',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/education/vit.md',
    imageSrc: 'images/vit.png',
    bgEnabled: true,
  },
  {
    file: 'public/markdown/education/sphs.md',
    imageSrc: 'images/sphs.png',
    bgEnabled: false,
  },
];

export const EXPERIENCES = [
  {
    file: 'public/markdown/experience/rivian.md',
    imageSrc: 'images/rivian.svg',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/experience/merc.md',
    imageSrc: 'images/merc.svg',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/experience/inovision.md',
    imageSrc: 'images/inovision.png',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/experience/mdp.md',
    imageSrc: 'images/mdp.png',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/experience/cair.md',
    imageSrc: 'images/cair.jpeg',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/experience/hal.md',
    imageSrc: 'images/hal.jpeg',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/experience/cesc.md',
    imageSrc: 'images/cesc.jpeg',
    bgEnabled: false,
  },
];

export const CERTIFICATES = [
  {
    title: 'AWS Essential Training for Developers',
    subtitle: 'LinkedIn',
    date: 'Mar 2022',
    link: 'https://www.linkedin.com/learning/certificates/c6fdd6ee90825655e7fb8df344efef6a662908e2fbe8689e5db419721a2c12fd?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BpB%2FolY5dT0aSsCki%2Fx6VjQ%3D%3D',
  },
  {
    title: 'Apache Spark Essential Training: Big Data Engineering',
    subtitle: 'LinkedIn',
    date: 'Nov 2021',
    link: 'https://www.linkedin.com/learning/certificates/dd1eac2786df20d7f09ad77ad45120e1d6f9a030959d8fbe9bd080d4308200ca?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BpB%2FolY5dT0aSsCki%2Fx6VjQ%3D%3D',
  },
  {
    title: 'Data Engineering Foundations',
    subtitle: 'LinkedIn',
    date: 'Nov 2021',
    link: 'https://www.linkedin.com/learning/certificates/6fa0dde78e898f14eca307b24fe8d38a0d94d69973f97b45372b91bafaa979f2?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BpB%2FolY5dT0aSsCki%2Fx6VjQ%3D%3D',
  },
  {
    title: 'Intermediate SQL for Data Scientists',
    subtitle: 'LinkedIn',
    date: 'Nov 2021',
    link: 'https://www.linkedin.com/learning/certificates/585d7d7282477449c2dc07935d1d81aacb90b6e14afe7d16207cf21eb396d2a7?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BpB%2FolY5dT0aSsCki%2Fx6VjQ%3D%3D',
  },
  {
    title: 'SQL (Intermediate) Certificate',
    subtitle: 'HackerRank',
    date: 'Nov 2021',
    link: 'https://www.hackerrank.com/certificates/2c3a3dd70307',
  },
  {
    title: 'JavaScript (Intermediate) Certificate',
    subtitle: 'HackerRank',
    date: 'Oct 2021',
    link: 'https://www.hackerrank.com/certificates/6d0871d25641',
  },
  {
    title: 'REST API (Intermediate) Certificate',
    subtitle: 'HackerRank',
    date: 'Oct 2021',
    link: 'https://www.hackerrank.com/certificates/976812a39531',
  },
  {
    title: 'SQL (Basic) Certificate',
    subtitle: 'HackerRank',
    date: 'Oct 2021',
    link: 'https://www.hackerrank.com/certificates/85feca729cda',
  },
  {
    title: 'JavaScript (Basic) Certificate',
    subtitle: 'HackerRank',
    date: 'Sep 2021',
    link: 'https://www.hackerrank.com/certificates/a598598c9674',
  },
  {
    title: 'Learning Kubernetes',
    subtitle: 'LinkedIn',
    date: 'Oct 2020',
    link: 'https://www.linkedin.com/learning/certificates/c03736a4fbf910a14da73e4b03942ee607f2b51d2180b2b929f22ce9d1763eaf?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BpB%2FolY5dT0aSsCki%2Fx6VjQ%3D%3D',
  },
  {
    title: 'Problem Solving (Basic) Certificate',
    subtitle: 'HackerRank',
    date: 'May 2020',
    link: 'https://www.hackerrank.com/certificates/2e37d1d831b5',
  },
  {
    title: 'Problem Solving (Intermediate) Certificate',
    subtitle: 'HackerRank',
    date: 'May 2020',
    link: 'https://www.hackerrank.com/certificates/35aed6c2318a',
  },
  {
    title: 'Python (Basic) Certificate',
    subtitle: 'HackerRank',
    date: 'May 2020',
    link: 'https://www.hackerrank.com/certificates/9c64740c2ef4',
  },
  {
    title: 'Machine Learning',
    subtitle: 'Stanford University (Coursera)',
    date: 'Mar 2019',
    link: 'https://www.coursera.org/account/accomplishments/verify/GUGVZ8NW3GE4?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate',
  },
  {
    title: 'Introduction to Structured Query Language (SQL)',
    date: 'Dec 2018',
    subtitle: 'University of Michigan (Coursera)',
    link: 'https://coursera.org/share/ba0e21897436354a736403789c99f998',
  },
  {
    title: 'Python Data Structures',
    subtitle: 'University of Michigan (Coursera)',
    date: 'May 2016',
    link: 'https://www.coursera.org/account/accomplishments/verify/XAP6NJCC9FVC',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    subtitle: 'University of Michigan (Coursera)',
    date: 'Jan 2016',
    link: 'https://www.coursera.org/account/accomplishments/verify/9GXNEHHCMNX9',
  },
];

export const EXTRACURRICULARS = [
  {
    file: 'public/markdown/extracurriculars/seds.md',
    imageSrc: 'images/seds.png',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/extracurriculars/ieee.md',
    imageSrc: 'images/ieee.jpg',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/extracurriculars/vfs.md',
    imageSrc: 'images/vfs.jpeg',
    bgEnabled: false,
  },
  {
    file: 'public/markdown/extracurriculars/hindu.md',
    imageSrc: 'images/hindu.jpeg',
    bgEnabled: false,
  },
];
