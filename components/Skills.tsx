"use client";

import { motion } from "framer-motion";
import { softSkills, techSkills } from "@/constants/data";

import useActiveInView from "@/hooks/useActiveInView";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useActiveInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h2>Tech Skills</h2>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {techSkills.map((item, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            whileHover={{ scale: 1.1 }}
            custom={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-gray-700 dark:text-white/80"
          >
            {item}
          </motion.li>
        ))}
      </ul>

      <h2 className="mt-[80px]">Soft Skills</h2>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {softSkills.map((item, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            whileHover={{ scale: 1.1 }}
            custom={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-gray-700 dark:text-white/80"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
