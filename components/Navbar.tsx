"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useActiveNavContext } from "@/hooks/useActiveNavContext";

import { links } from "@/constants/data";

const Navbar = () => {
  const { activeNav, setActiveNav, setClickTimer } = useActiveNavContext();

  return (
    <>
      {links.map((item, index) => (
        <li
          key={item.hash}
          className={`relative text-gray-500 text-[12px] sm:text-[16px] font-medium hover:text-gray-900 py-[8px] px-[9px] sm:px-[12.2px] ${
            activeNav === item.name && "text-gray-950 dark:text-gray-300"
          } ${
            links.length - 1 === index && "hidden sm:block"
          } dark:hover:text-gray-300`}
        >
          <Link
            onClick={() => {
              setActiveNav(item.name);
              setClickTimer(Date.now());
            }}
            href={item.hash}
          >
            {item.name}

            {activeNav === item.name && (
              <motion.span
                layoutId="activeNav"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-700"
              />
            )}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Navbar;
