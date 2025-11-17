import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import Profile from '../assets/Profile.jpg';
import projectImg4 from '../assets/project4.avif';
import realState from '../assets/realstate2.avif';
import razorpay from '../assets/razorpay.jpg';
import todolist from '../assets/todolist.jpg';
import ChatApplication from '../assets/ChatApplication.png'


export const assets = {
  Profile,
  
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React','Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const projects = [
  {
    title: "Real Estate Website",
    description: "A responsive real estate site built with React and Vite for smooth and fast property browsing.",
    image: realState,
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://nivas-infra.vercel.app/",
    code: "https://github.com/Danishmanyotra/Nivas_Infra",
  },
  {
    title: "Personal Portfolio Website",
    description: "A sleek and responsive portfolio showcasing my projects, skills, and experience with smooth UI.",
    image: projectImg4,
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion","React Icons"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://personal-portfolio-dun-two-78.vercel.app/",
    code: "https://github.com/Danishmanyotra/Personal-Portfolio",
  },
  {
    title:"RealTime Chat Application",
    description:"A real-time messaging app built with a clean UI, secure authentication, and features for seamless user communication.",
    image:ChatApplication,
    tech:["React", "Node.js", "Express", "MongoDB","Socket.io"],
    icons:[FaReact, FaNodeJs, FaDatabase],
    demo:"",
    code:"https://github.com/Danishmanyotra/Chatterly"
  },
  {
    title: "Razorpay Clone",
    description: "A frontend-only clone of Razorpay's modern payments interface with a clean UI and responsive design.",
    image: razorpay,
    tech: ["React", "Tailwind CSS", "Vite"],
    icons: [FaReact, FaDatabase],
    demo: "https://razorpay-xi-three.vercel.app/",
    code: "https://github.com/Danishmanyotra/razorpay",
  },
  {
    title: "To-Do List Web App",
    description: "A simple and interactive to-do list that lets users add, edit and delete task.",
    image: todolist,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaCloud],
    demo: "https://to-do-list-five-omega-45.vercel.app/",
    code: "https://github.com/Danishmanyotra/To-Do-List",
  },
  
];


export const workData = [
  {
    role: "Frontend Developer Intern",
    company: "NAHEP(IDP), Pantnagar",
    duration: "Jul-Sep 2024 - Remote",
    description:
      "Contributed as a Frontend Developer under senior developers to build the official NAHEP Pantnagar ICAR website.",
    color: "purple"
  },
  
  
];
