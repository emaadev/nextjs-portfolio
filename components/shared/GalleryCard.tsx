import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

import "./GalleryCard.css";

export interface GalleryCardProps {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  textButton: string;
}

const GalleryCard = ({
  title,
  description,
  href,
  image,
  textButton,
}: GalleryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: "-1deg" }}
      className="card shadow-lg lg:w-[350px] lg:h-[180px]"
    >
      <Image priority={true} src={image} alt="CarHub App" className="img" />

      <div className="textBox text-center p-2">
        <h4 className="text-[20px] font-semibold -mb-[12px]">{title}</h4>
        <span className="text-[14px] text-gray-200">{description}</span>
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

export default GalleryCard;
