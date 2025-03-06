"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ProfileImg from "@/public/compressed/profile.png";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import codeIcon from "../public/compressed/code-icon.gif";

import Divider from "./shared/Divider";
import {
  CustomBlackButton,
  CustomDownloadButton,
  CustomIconButton,
} from "./shared/CustomButtons";

import useActiveInView from "@/hooks/useActiveInView";
import { useActiveNavContext } from "@/hooks/useActiveNavContext";

const Intro = () => {
  const { ref } = useActiveInView("Home", 0.5);
  const { setActiveNav, setClickTimer } = useActiveNavContext();

  return (
    <>
      <main
        id="home"
        ref={ref}
        className="flex flex-col lg:flex-row-reverse items-center justify-center pt-[110px] sm:pt-[150px] scroll-mt-[100rem] lg:px-[100px]"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={ProfileImg}
              alt="Emanuel Nuñez Img"
              priority={true}
              className="h-32 w-32 lg:w-[220px] lg:h-[220px] rounded-full object-cover border-[0.35rem] border-white/60 shadow-xl dark:border-white/60"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute right-0 bottom-0 text-[30px] lg:text-[40px] bg-white shadow-md rounded-full p-2 lg:w-14 w-10 "
          >
            <Image src={codeIcon} priority={true} alt="Gif" />
          </motion.div>
        </div>

        <section className="flex lg:flex-1 flex-col justify-center items-center lg:justify-start lg:items-start lg:px-[20px]">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10 mt-4 px-3 text-[1rem] leading-[1.5] text-center sm:text-[1.5rem] lg:text-[1.3rem] lg:text-left lg:pt-[50px] max-w-[800px]"
          >
            Hey there! <br />
            I'm Ema, a <b>Web Developer</b> & <b>Graphic Designer</b> with 5+ years of professional experience. <br /><br />
            I specialize in building scalable applications using <b>Next.js</b> and <b>TypeScript</b>, blending eye-catching design with a solid architecture. I help businesses and startups take their projects to the next level, focusing on performance, accessibility, and user experience.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <CustomBlackButton
              onClick={() => {
                setActiveNav("Contact");
                setClickTimer(Date.now());
              }}
              href="#contact"
              customClasses={""}
            >
              Contact Me{" "}
              <BsArrowRight className="group-hover:translate-x-1.5 transition" />
            </CustomBlackButton>

            <CustomDownloadButton
              onClick={""}
              href="/resume-cv.pdf"
              customClasses={""}
            >
              Download CV{" "}
              <HiDownload className="group-hover:translate-y-1 transition" />
            </CustomDownloadButton>

            <div className="flex justify-center items-center gap-3 mt-4 sm:mt-0">
              <CustomIconButton
                onClick={""}
                href="https://www.linkedin.com/in/emanuelnunez/"
                customClasses={""}
              >
                <BsLinkedin />
              </CustomIconButton>

              <CustomIconButton
                onClick={""}
                href="https://github.com/emaadev"
                customClasses={""}
              >
                <FaGithubSquare />
              </CustomIconButton>
            </div>
          </motion.div>
        </section>
      </main>

      <Divider />
    </>
  );
};

export default Intro;
