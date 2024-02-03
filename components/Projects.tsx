"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";

import Project from "@/components/shared/Project";
import SkillsButton from "@/components/shared/SkillsButton";
import GalleryCard from "./shared/GalleryCard";

import useActiveInView from "@/hooks/useActiveInView";

import { webDevelopmentData } from "@/constants/data";

import portfolioDesign from "@/public/portfolio-design.jpg";
import comingSoon from "@/public/coming-soon.jpg";

const Projects = () => {
  const { ref } = useActiveInView("Projects", 0.2);

  const [active, setActive] = useState<string>("graphic-design");

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="relative scroll-mt-28 px-4 sm:px-8 mb-20"
    >
      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="bg-circle__middle-right"
      />
      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="bg-circle__middle-left"
      />

      <h2 className="text-center">Projects</h2>

      <div className="flex items-center justify-center gap-4 mb-6 -mt-4">
        <SkillsButton
          id="web-development"
          active={active}
          setActive={setActive}
        >
          <FaCode className="w-5 h-5" />
          Web Development
        </SkillsButton>

        <SkillsButton id="graphic-design" active={active} setActive={setActive}>
          <MdOutlineDesignServices className="w-5 h-5" />
          Graphic Design
        </SkillsButton>
      </div>

      <div>
        {active === "web-development" &&
          webDevelopmentData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}

        {/* {active === "graphic-design" &&
          grahicDesignData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))} */}

        {active === "graphic-design" && (
          <section className="mx-auto w-full flex flex-wrap gap-4 mb-8">
            <GalleryCard
              title="UX/UI Design"
              description="Portfolio design built with AdobeXd"
              href="https://xd.adobe.com/view/2608fd90-7c10-410a-9a89-7273ec911f40-735b/"
              image={portfolioDesign}
              textButton="Go To Website"
            />

            <GalleryCard
              title="Coming Soon..."
              description="Uploading all my projects 🚀"
              href=""
              image={comingSoon}
              textButton="Uploading"
            />
          </section>
        )}
      </div>

      <div className="m-auto flex items-center justify-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${
            active === "web-development" ? "bg-gray-600" : "bg-gray-400"
          }`}
        />
        <div
          className={`w-2 h-2 rounded-full ${
            active === "graphic-design" ? "bg-gray-600" : "bg-gray-400"
          }`}
        />
      </div>
    </motion.section>
  );
};

export default Projects;
