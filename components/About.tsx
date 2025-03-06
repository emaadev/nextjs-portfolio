"use client";

import { motion } from "framer-motion";
import useActiveInView from "@/hooks/useActiveInView";

const About = () => {
  const { ref } = useActiveInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="relative mb-28 px-4 sm:px-8 max-w-[45rem] text-left leading-8 scroll-mt-28"
    >
      <h2 className="text-center">About Me</h2>

      <p className="mb-3">
        While pursuing my degree in Information Systems Engineering, I discovered my passion for technology, graphic design, and software development. Over the years, I've focused on creating audiovisual products and have built extensive experience in both graphic design and front-end development. More recently, I've expanded into full-stack projects, combining a keen eye for design with robust technical skills to deliver engaging digital experiences.

        When I’m not coding, I enjoy reading personal development books, exploring new places, and doing workout. Playing guitar and staying active are also essential parts of my daily routine—they keep me balanced and inspired.
      </p>
    </motion.section>
  );
};

export default About;
