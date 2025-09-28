import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  flexos,
  secureApp,
  omsaitrader,
  agriculture,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];
const experiences = [
  // {
  //   title: "Campus Ambassador",
  //   company_name: "GeeksforGeeks",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "May 2025 - Present",
  //   points: [
  //     "Represented GeeksforGeeks on campus as a Campus Ambassador.",
  //     "Promoted coding culture and GfG events among peers.",
  //     "Organized workshops and sessions to enhance student engagement.",
  //     "Collaborated with the GfG team to drive outreach and participation."
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "Om Sai Traders Pvt Ltd, Dhule",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - May 2023",
    points: [
      "Worked as a Web Developer in a 6-week internship program.",
      "Developed an application using Django, Mediapipe, and SQLite.",
    ],
  },
  // {
  //   title: "Full Stack Web Developer",
  //   company_name: "Unified Mentor Private Limited",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2025 - Feb 2025",
  //   points: [
  //     "Completed a one-month remote web development internship.",
  //     "Designed, developed, and optimized web applications while enhancing problem-solving skills.",
  //     "Gained understanding of industry best practices.",
  //   ],
  // },
];


const projects = [
  //{
  //   name: "FlexOS",
  //   description:
  //     "A versatile OS simulation designed to enhance accessibility, featuring AI-based hand and retina controls with real-time image processing and speech-to-text capabilities.",
  //   tags: [
  //     {
  //       name: "django",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mediapipe",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "opencv",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: { flexos },
  //   source_code_link: "",
  // },
  {
    name: "Om Sai Traders Web Application",
    description:
      "Developed a secure, scalable Django web app for efficient data storage and management using HTML, CSS, JavaScript, SQL, and multithreading",
    tags: [
      {

        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "SqlLite",
        color: "green-text-gradient",
      },
      {
        name: "multithreading",
        color: "blue-text-gradient",
      },
    ],
    image: omsaitrader,
    source_code_link: "https://github.com/CodeMayur23/Om-Sai-Traders-master",
  },
  {
    name: "Secure Exam App",
    description:
      "A secure, AI-driven examination application that uses real-time face and gesture recognition to monitor users during online exams.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: secureApp ,
    source_code_link: "https://github.com/CodeMayur23/Secure-Exam-Web-App",
  },
  {
    name: "FarmTech_-Rental-System-For-Agriculture-Equipment ",
    description:
      "FarmTech: Rent agri‑equipment—browse, book, pay. Providers list; admin controls. Built with HTML/CSS/JS, PHP & MySQL.",
    tags: [
      {
        name: "FrontEnd Devlopement",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: agriculture,
    source_code_link: "https://github.com/CodeMayur23/FarmTech_-Rental-System-For-Agriculture-Equipment-main",
  },
  {
    name: "Online-Movie-Booking-System",
    description:
      "MovieBook: Streamlined ticketing—browse movies, choose seats, pay securely. Admins handle showtimes. Built with HTML/CSS/JS, PHP & MySQL.",
    tags: [
      {
        name: "Frontend Devlopment",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300",
    source_code_link: "",
  },
];


const achievements = [
  {
    title: "Tata Intern GenAI Powered Data Analytics Job Simulation",
    competition: "Tata Internship",
    date: "2025",
    image: "/images/tata-cert.png",
    link: "https://drive.google.com/file/d/19oq3mMNfQkHoh1z_Q9u51OQDRrCiL9zD/view?usp=sharing", 
  },
  {
    title: "Deloitte Technology Job Simulation",
    competition: "Forage Virtual Internship",
    date: "2025",
    image: "src/assets/Deloitte Technology Certificate.pdf",
    link: "https://drive.google.com/file/d/1Gca3ssAcgvSajYwZgp1KsSJgQz8vtYFO/view?usp=sharing",
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    competition: "Deloitte Internship",
    date: "2025",
    image: "/images/deloitte-data.png",
    link: "https://drive.google.com/file/d/1d6Afn8JXE3vspWN6UKFRXqTePR7wev6a/view?usp=sharing",
  },
  {
    title: "Data Analytics",
    competition: "SKN VAP Program",
    date: "2025",
    image: "/images/data-analytics.png",
    link: "/images/data-analytics.png",
  },

 
];

export { services, technologies, experiences, achievements, projects };
