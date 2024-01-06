import { CustomButtonsProps } from "@/types";
import { motion } from "framer-motion";

export const CustomBlackButton = ({
  children,
  href,
  customClasses,
  onClick,
}: CustomButtonsProps) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      className={`group bg-gray-900 text-white text-[16px] px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-700 shadow-xl ${customClasses}`}
    >
      {children}
    </motion.a>
  );
};

export const CustomDownloadButton = ({
  children,
  href,
  customClasses,
}: CustomButtonsProps) => {
  return (
    <motion.a
      href={href}
      download
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
      className={`group bg-white text-gray-900 text-[16px] px-7 py-3 flex items-center gap-2 rounded-full shadow-xl ${customClasses} dark:bg-white/20 dark:text-white`}
    >
      {children}
    </motion.a>
  );
};

export const CustomIconButton = ({
  children,
  href,
  customClasses,
}: CustomButtonsProps) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
      className={`bg-gray-700 hover:bg-gray-900 text-white text-[16px] p-4 w-[50px] flex justify-center items-center rounded-full shadow-xl ${customClasses} dark:bg-white/20 dark:text-white`}
    >
      {children}
    </motion.a>
  );
};
