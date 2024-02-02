"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import Project from "@/components/shared/Project";
import SkillsButton from "@/components/shared/SkillsButton";

import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";

import useActiveInView from "@/hooks/useActiveInView";

import { grahicDesignData, webDevelopmentData } from "@/constants/data";

const Projects = () => {
  const { ref } = useActiveInView("Projects", 0.2);

  const [active, setActive] = useState<string>("web-development");

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

        {active === "graphic-design" &&
          grahicDesignData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
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
