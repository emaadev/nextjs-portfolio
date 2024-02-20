import React from "react";
import { SiAdobephotoshop } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import webScrapperApp from "@/public/compressed/web-scrapper-app.png";
import carhubApp from "@/public/compressed/carhub-rentcar.png";
import postItApp from "@/public/compressed/postit-app.png";
import comingSoon from "@/public/compressed/coming-soon.jpg";
import ecommerceAdminPanel from "@/public/compressed/admin-ecommerce-panel.png";
import ecommerceClientSide from "@/public/compressed/client-eccomerce-website.png";

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
    title: "E-Commerce Client Side",
    description:
      "Next.js professional E-Commerce TailwindCSS and TypeScript. This have the client side of the project. The admin panel is in GitHub",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Axios", "HeadlessUI"],
    imageUrl: ecommerceClientSide,
    github:
      "https://github.com/emaadev/nextjs-mysql-ecommerce-client/blob/main/package.json",
    website: "https://nextjs-mysql-ecommerce-client.vercel.app/",
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
  {
    title: "Products Web Scrapper",
    description:
      "Full-Stack App with a custom API Rest for a Company. I developed the REST API on Python, you can see the code in GitHub.",
    tags: ["Next.js", "TypeScript", "Python", "TailwindCSS"],
    imageUrl: webScrapperApp,
    github: "https://github.com/emaadev/scrapper-api",
    website: "https://web-scrapper-app-omega.vercel.app/",
  },
  {
    title: "CarHub",
    description:
      "Front-End project for a Car Rent Company. See the best car option for yourself and get more info about each car (the Car Image API is updating at the moment).",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    imageUrl: carhubApp,
    github: "https://github.com/emaadev/carhub-app",
    website: "https://carhub-app-eight.vercel.app/",
  },
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
  "Object-Oriented Programming",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Python",
  "Node.js",
  "PHP",
  "jQuery",
  "MySQL",
  "Git",
  "TailwindCSS",
  "Express",
  "Framer Motion",
  "Photoshop",
  "Lightroom",
  "After Effects",
  "Illustrator",
  "Figma",
  "AdobeXd",
  "Responsive Design",
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
    title: "Freelancer | Front-End to Full-Stack Dev",
    location: "Bs As, Argentina",
    description: `I'm working as a Front-End Developer freelance while I'm studying Full-Stack Development. My stack includes React, Next.js, TypeScript, TailwindCSS and Python. 
    \n I'm now looking to full-time opportunities.`,
    keyAchievements: [],
    icon: React.createElement(SiNextdotjs),
    date: "2023 - present",
  },
  {
    title: "Fixdate | Front-End Developer",
    location: "Santa Catarina, Brazil",
    description:
      "I worked as a Front End Developer on this startup for 2 years. I developed projects in PHP, jQuery, MySQL, React.js and Python.",
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
    description:
      "I worked as a Graphic Designer & Web Developer freelance on this company for 3 years.",
    keyAchievements: [
      "Created and designed over +100 graphic and audiovisuals projects with Adobe Photoshop, Illutrator, After Effects and Premiere Pro.",
      "Implemented websites and landing pages from concept through development",
    ],
    icon: React.createElement(MdDesignServices),
    date: "2020 - 2023",
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
