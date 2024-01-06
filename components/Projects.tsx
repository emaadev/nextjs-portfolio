"use client";

import React from "react";

import { projectsData } from "@/constants/data";
import Project from "./shared/Project";

import useActiveInView from "@/hooks/useActiveInView";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref } = useActiveInView("Projects");

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
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
