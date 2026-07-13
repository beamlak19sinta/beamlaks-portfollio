// ============================================================
// Personal Information
// ============================================================
export const personalInfo = {
  name: 'Beamlak Sintayehu',
  title: 'Information Systems Graduate',
  subtitle: 'Frontend Developer | React & Next.js Developer',
  location: 'Addis Ababa, Ethiopia',
  phone: '+251963687232',
  email: 'beamlaksintayheu6@gmail.com',
  github: 'https://github.com/beamlak19sinta',
  linkedin: '', // Add your LinkedIn URL here when ready
  bio: 'I am Beamlak Sintayehu, a graduate in Information Systems passionate about building modern and user-friendly web applications. I specialize in React and Next.js and enjoy solving real-world problems through technology. I continuously improve my skills and strive to create high-quality digital experiences.',
  resumeUrl: '/resume.pdf', // Place your resume PDF in the public folder
  profileImage: '/profile.jpg', // Place your photo in the public folder
};

// ============================================================
// Navigation Links
// ============================================================
export const navLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Experience',    href: '#experience' },
  { label: 'Education',     href: '#education' },
  { label: 'Certificates',  href: '#certificates' },
  { label: 'Contact',       href: '#contact' },
];

// ============================================================
// Typing Effect Words
// ============================================================
export const typingWords = [
  'Frontend Developer',
  'React Developer',
  'Next.js Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
];

// ============================================================
// Skills
// ============================================================
export const skills = {
  frontend: [
    { name: 'HTML5',       level: 95, icon: 'SiHtml5'       },
    { name: 'CSS3',        level: 90, icon: 'SiCss3'        },
    { name: 'JavaScript',  level: 88, icon: 'SiJavascript'  },
    { name: 'React',       level: 90, icon: 'SiReact'       },
    { name: 'Next.js',     level: 85, icon: 'SiNextdotjs'   },
    { name: 'Tailwind CSS',level: 92, icon: 'SiTailwindcss' },
  ],
  backend: [
    { name: 'Node.js',    level: 75, icon: 'SiNodedotjs'  },
    { name: 'Express.js', level: 72, icon: 'SiExpress'    },
  ],
  database: [
    { name: 'MongoDB', level: 72, icon: 'SiMongodb' },
    { name: 'MySQL',   level: 68, icon: 'SiMysql'   },
  ],
  tools: [
    { name: 'Git',     level: 85, icon: 'SiGit'        },
    { name: 'GitHub',  level: 88, icon: 'SiGithub'     },
    { name: 'VS Code', level: 92, icon: 'SiVisualstudiocode' },
    { name: 'Postman', level: 75, icon: 'SiPostman'    },
    { name: 'Vercel',  level: 82, icon: 'SiVercel'     },
  ],
  soft: [
    'Problem Solving',
    'Leadership',
    'Communication',
    'Team Collaboration',
    'Project Management',
  ],
};

// ============================================================
// Projects
// ============================================================
export const projects = [
  {
    id: 1,
    title: 'Educational Chat Application',
    description:
      'A full-stack educational chat platform developed with React and backend integration. The application enables communication and collaboration between users in an educational environment.',
    image: '/projects/educhats.jpg',
    technologies: ['React', 'Node.js', 'Express.js'],
    features: ['Authentication', 'Real-time messaging', 'User management', 'Responsive design'],
    github: 'https://github.com/beamlaksinta/education-chat-app',
    demo: 'https://education-chat-app.vercel.app/',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Task Management Application',
    description:
      'A comprehensive task management app with full CRUD operations, priority management, search & filtering, and a clean dashboard with dark mode support.',
    image: '/projects/taskpro.jpg',
    technologies: ['React', 'Tailwind CSS', 'Local Storage'],
    features: ['CRUD operations', 'Categories', 'Priority management', 'Search & filtering', 'Dashboard', 'Dark mode'],
    github: 'https://github.com/beamlak19sinta',
    demo: 'https://task-managment-app-six.vercel.app/dashboard',
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Zemnay Tech Website Redesign',
    description:
      'Redesigned and improved the user interface and user experience of the Zemnay Tech website to create a more modern and responsive design.',
    image: '/projects/zemnay.png',
    technologies: ['React', 'Tailwind CSS'],
    features: ['Responsive layout', 'Improved UI/UX', 'Modern components', 'Better user experience'],
    github: 'https://github.com/beamlak19sinta',
    demo: '#',
    category: 'UI/UX',
  },
  {
    id: 4,
    title: 'Bahir Dar Explorer',
    description:
      'Bahir Dar Explorer is a modern tourism and travel platform designed to showcase the beauty, culture, history, and attractions of Bahir Dar, Ethiopia. The application provides visitors with information about tourist destinations, hotels, restaurants, cultural sites, and travel experiences through a responsive and user-friendly interface.',
    image: '/projects/bahirdar.jpg',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    features: ['Tourist destinations', 'Hotels & restaurants', 'Cultural sites', 'Travel experiences', 'Responsive design'],
    github: 'https://github.com/beamlak19sinta',
    demo: 'https://agent-6a46997c4f7bdb243--delicate-strudel-48c6fe.netlify.app/',
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'Enterprise ERP System',
    description:
      'A full-stack Enterprise Resource Planning (ERP) system developed to streamline business operations. The application includes secure authentication, employee management, department management, attendance tracking, payroll, leave management, reporting, dashboards, and role-based access control. It is built with modern technologies and follows a responsive, scalable architecture suitable for business environments.',
    image: '/projects/erp.png',
    technologies: ['Next.js 14', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
    features: ['Secure authentication', 'Employee management', 'Attendance tracking', 'Payroll', 'Leave management', 'Role-based access control'],
    github: 'https://github.com/beamlak19sinta/enterprise-system',
    demo: 'https://erp-frontend-9vo9.onrender.com',
    category: 'Full Stack',
  },
];

// ============================================================
// Experience
// ============================================================
export const experiences = [
  {
    id: 1,
    role: 'Frontend Developer Intern',
    company: 'Zemnay Tech',
    period: '2025',
    location: 'Ethiopia',
    type: 'Internship',
    description:
      'Worked as a Frontend Developer Intern contributing to real-world projects and gaining hands-on experience with modern web technologies.',
    responsibilities: [
      'Redesigned web interfaces for improved usability and aesthetics.',
      'Developed reusable React components following best practices.',
      'Improved UI/UX across multiple pages.',
      'Collaborated with team members in an Agile workflow.',
      'Built responsive pages optimized for all screen sizes.',
    ],
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Git'],
  },
];

// ============================================================
// Education
// ============================================================
export const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Systems',
    institution: 'Bahir Dar University',
    location: 'Ethiopia',
    period: 'Graduated',
    description:
      'Studied Information Systems with focus on software development, database management, and system analysis.',
    highlights: [
      'Software Engineering',
      'Database Systems',
      'Web Development',
      'System Analysis & Design',
      'Project Management',
    ],
  },
];

// ============================================================
// Certificates
// ============================================================
export const certificates = [
  {
    id: 1,
    title: 'Problem Solving Certificate',
    issuer: 'Green Pill',
    category: 'Problem Solving',
    color: 'from-green-400 to-emerald-600',
    icon: 'FaTrophy',
  },
  {
    id: 2,
    title: 'Website Development Certificate',
    issuer: 'Udacity',
    category: 'Web Development',
    color: 'from-blue-400 to-indigo-600',
    icon: 'FaCode',
  },
  {
    id: 3,
    title: 'Data Analysis Certificate',
    issuer: 'Udacity',
    category: 'Data Analysis',
    color: 'from-purple-400 to-violet-600',
    icon: 'FaChartBar',
  },
  {
    id: 4,
    title: 'Leadership Certificate',
    issuer: 'Kibure College',
    category: 'Leadership',
    color: 'from-orange-400 to-red-600',
    icon: 'FaStar',
  },
];
