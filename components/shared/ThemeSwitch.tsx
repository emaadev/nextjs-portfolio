"use client";

import { motion } from "framer-motion";

import useThemeContext from "@/hooks/useThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, handleTheme } = useThemeContext();

  return (
    <motion.button
      animate={{ y: [0, -15, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="fixed flex justify-center items-center bottom-6 right-6 md:right-[15%] bg-white text-[19px] w-[3.5rem] h-[3.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-300 border-opacity-40 shadow-xl shadow-black/50 rounded-full transition-all hover:scale-110 active:scale-105 dark:bg-gray-950 dark:shadow-white/40"
      onClick={handleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
};

export default ThemeSwitch;
