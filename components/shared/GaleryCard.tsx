import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

import "./GaleryCard.css";

export interface GaleryCardProps {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  textButton: string;
}

const GaleryCard = ({
  title,
  description,
  href,
  image,
  textButton,
}: GaleryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.05, rotate: "-1deg" }}
      className="card shadow-lg"
    >
      <Image src={image} alt="CarHub App" className="img" />

      <div className="textBox">
        <h4 className="text-[20px] font-semibold -mb-[12px]">{title}</h4>
        <span className="text-[16px] text-gray-200">{description}</span>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-[14px] flex gap-2 items-center hover:underline group"
        >
          {textButton}{" "}
          <BsArrowRight
            className="transition group-hover:translate-x-1"
            size={15}
          />
        </a>
      </div>
    </motion.div>
  );
};

export default GaleryCard;
