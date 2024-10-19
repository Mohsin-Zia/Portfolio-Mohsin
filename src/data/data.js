import { FaReact, FaJs, FaNodeJs, FaCss3Alt, FaDatabase, FaServer } from 'react-icons/fa'
import { SiTypescript, SiGraphql } from 'react-icons/si'
import map from '../assets/map.jpg'
import css from "../assets/tech/css.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import typescript from "../assets/tech/typescript.png";
import flutter from "../assets/tech/flutter.png";
import cypress from "../assets/tech/cypress.png";
import express from "../assets/tech/express.png";
import mongo from "../assets/tech/mongo.png";

export const menuItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]
export const technologies = [
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    {
      name: "cypress",
      icon: cypress,
    },
    {
      name: "Mongo DB",
      icon: mongo,
    },
    {
      name: "express",
      icon: express,
    },
  ];

export const heroData = {
    subtitle: "HI WEB DEVELOPER",
    greeting: "HI, I'M",
    name: "MOHSIN",
    title: "THE WEB DEVELOPER",
    roles: ["THE HACKER", "DEVELOPER", "SOFTWARE ENGINEER"],
    scrollText: "MOUSE SCROLL",
    mapImage: map,
    image: "/assets/developer-image.jpg",
    overlayImage: "/assets/overlay-image.jpg"
  }

export const aboutData = {
  imageUrl: '/placeholder.svg?height=400&width=400',
  bio: [
    "I'm a passionate web developer with a keen eye for design and a love for creating intuitive, user-friendly interfaces. With expertise in React, Node.js, and various modern web technologies, I strive to build applications that not only look great but also provide exceptional user experiences.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software architecture and design patterns. I believe in continuous learning and pushing the boundaries of what's possible in web development."
  ],
  education: [
    {
      school: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      year: "2015 - 2019",
      description: "Focused on software engineering and web development."
    },
    {
      school: "Tech Institute",
      degree: "Full Stack Web Development Bootcamp",
      year: "2020",
      description: "Intensive program covering modern web technologies and practices."
    }
  ],
  experience: [
    {
      company: "Tech Innovators Inc.",
      position: "Junior Web Developer",
      year: "2019 - 2021",
      description: "Developed and maintained client websites using React and Node.js."
    },
    {
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      year: "2021 - Present",
      description: "Lead developer for various web applications and e-commerce platforms."
    }
  ]
}

export const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: 'https://example-ecommerce.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app built with React and Firebase',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['React', 'Firebase', 'Material-UI'],
    liveLink: 'https://example-taskmanager.com',
    githubLink: 'https://github.com/yourusername/task-manager'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather app built with React and OpenWeatherMap API',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['React', 'OpenWeatherMap API', 'Chart.js'],
    liveLink: 'https://example-weatherapp.com',
    githubLink: 'https://github.com/yourusername/weather-dashboard'
  },
]

export const skillsData = [
  { name: 'React', level: 90, icon: FaReact },
  { name: 'JavaScript', level: 85, icon: FaJs },
  { name: 'Node.js', level: 80, icon: FaNodeJs },
  { name: 'CSS/Sass', level: 75, icon: FaCss3Alt },
  { name: 'TypeScript', level: 70, icon: SiTypescript },
  { name: 'GraphQL', level: 65, icon: SiGraphql },
  { name: 'MongoDB', level: 75, icon: FaDatabase },
  { name: 'Express', level: 70, icon: FaServer },
]

export const contactData = {
  email: 'johndoe@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Web Dev Street, Codeville, IN 12345',
  socialMedia: [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'FaGithub' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'FaLinkedin' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'FaTwitter' },
  ]
}

export const footerData = {
  name: 'John Doe',
  year: new Date().getFullYear(),
}