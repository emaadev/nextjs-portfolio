"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { ProjectProps } from "@/types";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  github,
  website,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.8], [0.6, 1]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50, originZ: 0.7 }}
        animate={{ opacity: 1, x: 0, originZ: 1 }}
        transition={{ duration: 0.4 }}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="mb-[35px]"
      >
        <section className="group relative bg-white bg-opacity-40 hover:bg-opacity-80 backdrop-blur-[5px] max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 rounded-[12px] shadow-xl transition dark:bg-gray-400 dark:bg-opacity-70">
          <div className="flex flex-col justify-between py-4 px-5 sm:pl-10 sm:pr-2 sm:py-8 sm:max-w-[50%] h-full">
            <h3 className="text-2xl font-semibold dark:text-white">{title}</h3>
            <p className="mt-2 mb-0 leading-relaxed text-gray-700 dark:text-white">
              {description}
            </p>

            <ul className="flex w-full flex-wrap justify-center sm:justify-start mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-2 sm:mt-0 sm:absolute flex justify-around items-center z-10 p-2 sm:-bottom-10 sm:-right-10 sm:rounded-tl-[12px] shadow-xl backdrop-blur-[0.2rem] bg-black/[0.8] shadow-gray-800 sm:w-[250px] sm:h-[50px] transition-all sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:-translate-y-10 sm:group-hover:-translate-x-10 sm:group-hover:duration-300">
            {tags.includes("Photoshop" || "AdobeXd") ? (
              ""
            ) : (
              <a
                href={github}
                className="flex justify-center gap-2 items-center text-gray-300 hover:text-white"
              >
                GitHub <FaGithub />
              </a>
            )}
            <a
              href={website}
              className="flex justify-center gap-2 items-center text-gray-300 hover:text-white"
            >
              {tags.includes("Photoshop" || "AdobeXd")
                ? "Live Mockup"
                : "Website"}
              <RiExternalLinkLine />
            </a>
          </div>

          <Image
            src={imageUrl}
            alt={title}
            quality={100}
            className="group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition hidden sm:block absolute -right-12 sm:-right-[160px] top-32 sm:top-8 w-[250px] sm:w-[480px] rounded-[10px]"
          />
        </section>
      </motion.div>
    </>
  );
};

export default Project;
