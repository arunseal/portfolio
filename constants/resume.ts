export interface ResumeRole {
  title: string;
  dates: string;
}

export interface ResumeExperience {
  company: string;
  location: string;
  dates: string;
  roles: ResumeRole[];
  bullets: string[];
}

export interface ResumePatent {
  title: string;
  number: string;
  status: string;
}

export interface ResumePublication {
  title: string;
  venue: string;
}

export interface ResumeEducation {
  school: string;
  location: string;
  degree: string;
  dates: string;
  major: string;
}

export const PROFILE = {
  name: 'Arunava Seal',
  title: 'Sr. Lead Software Engineer, ML/AI Applications',
  location: 'Sunnyvale, California',
  email: 'arunavaseal1@gmail.com',
  linkedin: 'linkedin.com/in/arunava-seal',
  github: 'github.com/arunseal',
  portfolio: 'arunava-seal.vercel.app',
};

export const SUMMARY =
  "Software engineer leading the cross-functional ML/AI Applications team in Rivian's Autonomy organization, " +
  'building the infrastructure behind large-scale model training - labeling platforms, data discovery ' +
  'and curation, and end-to-end MLOps at petabyte scale. Background spans autonomous driving, computer ' +
  'vision and cloud engineering across Rivian and Mercedes-Benz R&D.';

export const RESUME_EXPERIENCE: ResumeExperience[] = [
  {
    company: 'Rivian Automotive',
    location: 'Palo Alto, California',
    dates: 'Feb 2022 - Present',
    roles: [
      {
        title: 'Sr. Lead Software Engineer, ML/AI Applications, Autonomy',
        dates: 'Mar 2026 - Present',
      },
      {
        title: 'Lead / Staff Software Engineer, ML/AI Applications, Autonomy',
        dates: 'Dec 2023 - Mar 2026',
      },
      { title: 'Senior Software Engineer, Full Stack, Autonomy', dates: 'Feb 2022 - Dec 2023' },
    ],
    bullets: [
      'Leading the 12-person cross-functional ML/AI Applications team across US and Serbia, architecting the foundational pipelines and platforms that enable large-scale ML/DL model training across the Autonomy organization.',
      'Engineered a scalable 2D/3D labeling platform and the annotation pipeline behind it on AWS (Lambda, Batch, S3), Argo Workflows and Python (OpenCV, NumPy, pandas), ingesting petabytes of multi-modal sensor data (LiDAR, camera, RADAR) for curation and vendor annotation.',
      'Developed a high-performance vector search platform indexing over 2 billion learned embeddings, enabling semantic search and edge-case detection across multi-modal sensor data, streamlining data curation and discovery.',
      'Architected containerized MLOps workflows on Docker and AWS EKS, cutting the path from raw sensor data ingestion to validated model deployment from days to hours.',
    ],
  },
  {
    company: 'Mercedes-Benz Research & Development North America',
    location: 'Sunnyvale, California',
    dates: 'Mar 2019 - Feb 2022',
    roles: [
      { title: 'Software Engineer, Data and Cloud', dates: 'Oct 2020 - Feb 2022' },
      {
        title: 'Associate Software Engineer, Data and Cloud',
        dates: 'Apr 2020 - Oct 2020',
      },
      { title: 'Software Engineer, Early Talent Rotational Program', dates: 'Mar 2019 - Apr 2020' },
    ],
    bullets: [
      'Lead Engineer and Product Owner for the SmartHome integration project, coordinating a team of 4 across Germany and USA. Built the micro-services cloud architecture in Python-Flask, Node.js-Koa and MongoDB on Kubernetes and Azure.',
      'Engineered data pipelines through Azure Event Hubs, Data Lakes and Databricks for the ingestion, storage and analysis of speech data for the Hey Mercedes voice assistant, surfaced through Grafana and SQL dashboards.',
      'Led feature engineering, data collection, optimization and evaluation for multi-stage multi-modal sensor fusion and road topology learning for map-less driving, developing state-of-the-art semantic segmentation models in Python, TensorFlow and C++ that detect stop lines at up to 50 meters under heavy occlusion.',
    ],
  },
  {
    company: 'Inovision, Inc.',
    location: 'Rochester Hills, Michigan',
    dates: 'May 2018 - Dec 2018',
    roles: [{ title: 'Software Engineering Intern', dates: 'May 2018 - Dec 2018' }],
    bullets: [
      'Engineered the machine learning and image processing pipelines for a dynamic, moving-line automatic paint defect detection system at the General Motors assembly plant in Flint, Michigan.',
      'Built region-of-interest detection in Python and C# feeding a cascaded TensorFlow classifier, separating true defects from false positives with up to 98% accuracy.',
    ],
  },
];

export const RESUME_EDUCATION: ResumeEducation[] = [
  {
    school: 'University of Michigan',
    location: 'Ann Arbor, Michigan',
    degree: 'M.S. in Electrical and Computer Engineering',
    dates: '2017 - 2018',
    major: 'Major: Signal and Image Processing and Machine Learning',
  },
  {
    school: 'Vellore Institute of Technology',
    location: 'Vellore, India',
    degree: 'B.Tech. in Electronics and Communication Engineering',
    dates: '2013 - 2017',
    major: '',
  },
];

// A selection rather than the full list -- five items, the convention for a
// combined section. The two 2017 undergraduate papers (IRJET, ICTACC) are on
// the site at /publications instead.
export const RESUME_PATENTS: ResumePatent[] = [
  {
    title: 'Stop line detection for vehicle assistance systems',
    number: 'GB 2015142.9',
    status: 'Issued Apr 2022',
  },
  {
    title: 'Map-less road topology estimation for vehicle assistance systems',
    number: 'GB 2012981.3',
    status: 'Issued Mar 2022',
  },
  {
    title: 'Smart Home integration service for vehicle-to-device communication',
    number: 'GB 2117650.8',
    status: 'Filed Dec 2021',
  },
];

export const RESUME_PUBLICATIONS: ResumePublication[] = [
  {
    title: 'Hierarchical Road Topology Learning for Urban Map-less Driving',
    venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2022',
  },
  {
    title: 'Holistic Grid Fusion Based Stop Line Estimation',
    venue: 'International Conference on Pattern Recognition (ICPR), 2020',
  },
];
