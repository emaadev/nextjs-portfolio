import React from "react";
import { SiAdobephotoshop } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

// import webScrapperApp from "@/public/compressed/web-scrapper-app.png";
// import carhubApp from "@/public/compressed/carhub-rentcar.png";
import postItApp from "@/public/compressed/postit-app.png";
import comingSoon from "@/public/compressed/coming-soon.jpg";
import ecommerceAdminPanel from "@/public/compressed/admin-ecommerce-panel.png";
// import ecommerceClientSide from "@/public/compressed/client-eccomerce-website.png";
import aviationStore from "@/public/compressed/aviation-store.png";
import bayesiteCode from "@/public/compressed/bayesiteit.png";

// import livechatApp from "@/public/livechat-app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const webDevelopmentData = [
  {
    title: "Web Application for an IT Recruitment Company",
    description:
      "Complete Web Application with a CRM. Added Internationalization (i18n). AI Coming Soon to this project, it will be able to receive user data from a ChatBot integrated with OpenAI.",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Three.js",
      "Google APIs",
      "i18n",
    ],
    imageUrl: bayesiteCode,
    github: "https://github.com/emaadev",
    website: "https://www.bayesiteit.com/",
  },
  {
    title: "E-Commerce for an Aeronautical Business",
    description:
      "E-Commerce for an Aeronautical Company. It has dynamic routes, navigation and a connection to the WhatsApp API service to checkout products. It will have a CRM built with Next.js and Python connected to a MySQL database, also a connection to MercadoPago to checkout.",
    tags: [
      "Next.js",
      "TypeScript",
      "Python",
      "MySQL",
      "MercadoPago API",
      "WhatsApp API",
    ],
    imageUrl: aviationStore,
    github: "https://github.com/emaadev/nextjs-aviation-store/tree/main",
    website: "https://iseap-store.vercel.app/",
  },
  {
    title: "Professional Admin Panel",
    description:
      "Next.js professional Admin Panel using TailwindCSS, TypeScript and MySQL for database with an Integration of Stripe Payments. This have a custom Dashboard and Administration for each page in the website.",
    tags: ["Next.js", "TypeScript", "MySQL", "axios", "TailwindCSS", "Shadcn"],
    imageUrl: ecommerceAdminPanel,
    github: "https://github.com/emaadev/nextjs-mysql-ecommerce-admin",
    website: "https://nextjs-mysql-ecommerce-admin.vercel.app/",
  },
  // {
  //   title: "Products Web Scrapper",
  //   description:
  //     "Full-Stack App with a custom API Rest for a Company. I developed the REST API on Python, you can see the code in GitHub.",
  //   tags: ["Next.js", "TypeScript", "Python", "TailwindCSS"],
  //   imageUrl: webScrapperApp,
  //   github: "https://github.com/emaadev/scrapper-api",
  //   website: "https://web-scrapper-app-omega.vercel.app/",
  // },
  // {
  //   title: "CarHub",
  //   description:
  //     "Front-End project for a Car Rent Company. See the best car option for yourself and get more info about each car (the Car Image API is updating at the moment).",
  //   tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  //   imageUrl: carhubApp,
  //   github: "https://github.com/emaadev/carhub-app",
  //   website: "https://carhub-app-eight.vercel.app/",
  // },
  {
    title: "PostIt Social App",
    description:
      "Full-Stack Social App oriented to Instagram. Create, edit, submit and delete social posts in the app and explore other users content.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "CSS", "Appwrite"],
    imageUrl: postItApp,
    github: "https://github.com/emaadev/postit-social-app",
    website: "https://postit-nine-eta.vercel.app/",
  },
  // {
  //   title: "Hoobank",
  //   description:
  //     "Front-End project for a Digital Bank including the UX Design. See the main info of the Company and some user recomendations.",
  //   tags: ["ReactJS", "TailwindCSS", "Figma", "Photoshop", "Illustrator"],
  //   imageUrl: hoobankApp,
  //   github: "https://github.com/emaadev/hoobank",
  //   website: "https://emaadev.github.io/hoobank/",
  // },
  // {
  //   title: "ChatApp",
  //   description:
  //     "Full-Stack Project with Chat Stream, including login validation, server management and instant messaging.",
  //   tags: ["ReactJS", "NodeJS", "Stream Chat", "CSS", "Figma"],
  //   imageUrl: livechatApp,
  //   github: "https://github.com/emaadev/live-chat-app",
  //   website: "https://live-chat-app-project.netlify.app/",
  // },
];

export const grahicDesignData = [
  {
    title: "Coming Soon...",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam aliquam ipsum necessitatibus.",
    tags: ["Photoshop", "Illustrator", "AdobeXd", "Figma", "UX/UI Design"],
    imageUrl: comingSoon,
    github: "",
    website: "https://web-scrapper-app-omega.vercel.app/",
  },
  {
    title: "Creating & Uploading Section...",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam aliquam ipsum necessitatibus.",
    tags: ["Photoshop", "Illustrator", "AdobeXd", "Figma", "UX/UI Design"],
    imageUrl: comingSoon,
    github: "",
    website: "https://web-scrapper-app-omega.vercel.app/",
  },
];

export const techSkills = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "SEO",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Python",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "Git / Github",
  "TailwindCSS",
] as const;

export const softSkills = [
  "Responsibility",
  "Communication",
  "Critical Thinking",
  "Assertiveness",
  "Initiative",
  "Punctuality",
  "Empathy",
  "Ease of Learning",
  "Time Management",
  "Kindness",
  "Ease of Problem Solving",
] as const;

export const experiencesData = [
  {
    title: "BayeSite | Web Developer & IT Recruiter",
    location: "Argentina",
    description: `At BayeSite, I led the development of a web application that revolutionizes talent recruitment, combining Next.js with agile methodologies to improve user-company interaction.`,
    keyAchievements: [
      "As a technical recruiter, my development background influences candidate selection, looking for both technical skill and creative innovation. This duality of roles has deepened my understanding of technological impact, contributing to business growth and career advancement of connected talent.",
    ],
    icon: React.createElement(SiNextdotjs),
    date: "2024 - present",
  },
  {
    title: "Freelancer | Web Developer",
    location: "Bs As, Argentina",
    description: `I'm working as a Web Developer freelance while I'm studying Full-Stack Development. My stack includes React, Next.js, TypeScript, TailwindCSS and Python. 
    \n I'm now looking to full-time opportunities.`,
    keyAchievements: [],
    icon: React.createElement(SiNextdotjs),
    date: "2023 - present",
  },
  {
    title: "Fixdate | Front-End Developer",
    location: "Santa Catarina, Brazil",
    description:
      "I worked as a Front End Developer on this startup for 2 years. I developed projects in JavaScript, Node.js, React.js, Python and MySQL working with Git/Github.",
    keyAchievements: [
      "Analyzed and designed UX/UI designs for technical feasibility.",
      "Created sales strategies to improve company's income",
      "Mentored junior developers and worked closely with the CEO Company.",
    ],
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "ISEAP | Graphic Designer & Web Developer",
    location: "Bs As, Argentina",
    description: "I worked as a Graphic Designer & Web Developer freelance.",
    keyAchievements: [
      "Created and designed over +100 graphic and audiovisuals projects with Adobe Photoshop, Illutrator, After Effects and Premiere Pro.",
      "Implemented websites and landing pages from concept through development",
    ],
    icon: React.createElement(MdDesignServices),
    date: "2019 - 2023",
  },
  {
    title: "PSA | Graphic Designer",
    location: "Bs As, Argentina",
    description: "I worked as a Graphic Designer on this company for 1 year.",
    keyAchievements: [
      "Created and designed over +50 graphic and audiovisuals projects with Adobe Photoshop, Illutrator.",
    ],
    icon: React.createElement(SiAdobephotoshop),
    date: "2019 - 2020",
  },
] as const;
