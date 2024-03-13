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
        While I was starting my studies to be an{" "}
        <span className="font-medium">Information System Engineer</span>, I
        decided to build my passion for technology,{" "}
        <span className="font-medium">Graphic Design</span> and{" "}
        <span className="font-medium">Software Development</span>.
      </p>

      <p className="mb-3">
        I am dedicated to the creation of{" "}
        <span className="italic">audiovisual products</span> with{" "}
        <span className="font-medium">several years of experience</span> in
        Graphic Design and professional Front-End development projects focused
        on working in{" "}
        <span className="font-medium">Full-Stack Development</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I like to read
        personal growth books, play video games and visit unknown places.
        Playing guitar and exercising are my favorite passions and I can't live
        without doing them at least once a day.
      </p>
    </motion.section>
  );
};

export default About;
