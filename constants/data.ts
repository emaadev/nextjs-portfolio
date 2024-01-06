import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";

import webScrapperApp from "@/public/web-scrapper-app.png";
import carhubApp from "@/public/carhub-app.png";
import postItApp from "@/public/postit-app.png";
import livechatApp from "@/public/livechat-app.png";
import hoobankApp from "@/public/hoobank-app.png";

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

export const projectsData = [
  {
    title: "Products Web Scrapper",
    description:
      "Full-Stack App with a custom API Rest for a Company. It provides an Average Price the products and gives some specific data.",
    tags: ["Next.js", "TypeScript", "Python", "TailwindCSS"],
    imageUrl: webScrapperApp,
    github: "https://github.com/emaadev/web-scrapper-app",
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
  {
    title: "Hoobank",
    description:
      "Front-End project for a Digital Bank including the UX Design. See the main info of the Company and some user recomendations.",
    tags: ["ReactJS", "TailwindCSS", "Figma", "Photoshop", "Illustrator"],
    imageUrl: hoobankApp,
    github: "https://github.com/emaadev/hoobank",
    website: "https://emaadev.github.io/hoobank/",
  },
  {
    title: "ChatApp",
    description:
      "Full-Stack Project with Chat Stream, including login validation, server management and instant messaging.",
    tags: ["ReactJS", "NodeJS", "Stream Chat", "CSS", "Figma"],
    imageUrl: livechatApp,
    github: "https://github.com/emaadev/live-chat-app",
    website: "https://live-chat-app-project.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "Bootstrap",
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
] as const;

export const experiencesData = [
  {
    title: "Freelancer | Full-Stack Development",
    location: "Bs As, Argentina",
    description:
      "I'm studying Full-Stack Development working as a Front-End & Graphic Designer freelance. My stack includes React, Next.js, TypeScript, TailwindCSS and Python. I'm now looking to full-time opportunities.",
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
