"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <nav className="flex justify-center">
        <motion.div
          className="nav-container"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ul className="nav-container__ul">
            <Navbar />
          </ul>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
