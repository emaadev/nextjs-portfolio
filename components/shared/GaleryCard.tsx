import Image, { StaticImageData } from "next/image";

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
    <div className="card shadow-lg">
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
    </div>
  );
};

export default GaleryCard;
