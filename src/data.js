export const featuredProject = {
  title: 'Wimbledon ML Match Predictor',
  description:
    'A grass-specific ELO system with 270-day decay, paired with a general/elite XGBoost split and a 10,000-run Monte Carlo simulation. Served through a FastAPI/uvicorn backend with HTML frontends.',
  stack: ['XGBoost', 'Monte Carlo', 'FastAPI', 'pandas'],
  stats: [
    { n: '73.3%', l: 'validated accuracy, 2025 R16–Final matchups' },
    { n: '10,000', l: 'Monte Carlo simulation runs' },
  ],
}

export const workProjects = [
  {
    tag: 'WEB · JS',
    title: 'CineGlide',
    description:
      'A responsive movie discovery web app deployed to Vercel, integrating the TMDB API with a recommendation library for personalised suggestions from live save history.',
    stack: ['TMDB API', 'Vanilla JS', 'Vercel'],
  },
  {
    tag: 'ANDROID · GPS',
    title: 'Location Tracer',
    description:
      'A NIELIT group project: an Android app sending live location via SMS in low/no-internet conditions, accurate to ~12m, with saved favourites for fast sending.',
    stack: ['Java', 'Android SDK', 'Maps API'],
  },
  {
    tag: 'HORROR · GODOT 4.4',
    title: 'The Tenant Below',
    description:
      'A single-apartment stalker horror game — the walls feel closer every night someone else moves in above you.',
    stack: ['PSX shaders', 'Godot 4.4'],
  },
]

export const alsoBuilding = [
  {
    tag: 'DUAL-POV',
    title: 'Small Hands',
    description:
      'Eight-year-old Dessa lives through one week of parental neglect — no jump scares, just the slow arithmetic of a bad home.',
    stack: ['Narrative systems'],
  },
  {
    tag: 'FPS HORROR',
    title: 'Checkpoint',
    description:
      "A Papers, Please-style border checkpoint across five escalating nights — every stamp is a choice you can't take back.",
    stack: ['Systems design'],
  },
]

export const skillBars = [
  { label: 'Python / ML', pct: 90 },
  { label: 'ML Tooling', pct: 85 },
  { label: 'Java / C / C++', pct: 78 },
  { label: 'Web / JS', pct: 72 },
  { label: 'Databases', pct: 65 },
]

export const toolbelt = [
  'XGBoost', 'pandas', 'NumPy', 'scikit-learn', 'FastAPI',
  'Docker', 'Tableau', 'Git', 'Android Studio', 'MySQL', 'PostgreSQL',
]

export const education = {
  degree: 'B.Tech CSE',
  school: 'Techno College of Engineering Agartala (2022–2026)',
  gpa: 'CGPA 7.17/10.0',
}

export const internships = [
  { org: 'NIELIT Agartala', role: 'Android Development Trainee', dates: '06/2025–07/2025' },
  { org: 'DND Learning', role: 'Web Development & AI Intern', dates: '06/2026–07/2026' },
]

export const certifications = 'NIELIT Completion · DND Certificate · LinkedIn Speaking Certificate'

export const contact = {
  email: 'aniketlodh0707@gmail.com',
  github: 'https://github.com/Hadoken-io',
  linkedin: 'https://linkedin.com/in/aniket-lodh-968177290/',
}
