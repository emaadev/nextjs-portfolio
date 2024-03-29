"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";

import Project from "@/components/shared/Project";
import SkillsButton from "@/components/shared/SkillsButton";
import GalleryCard from "./shared/GalleryCard";

import useActiveInView from "@/hooks/useActiveInView";

import { webDevelopmentData } from "@/constants/data";

import portfolioDesign from "@/public/compressed/portfolio-design.jpg";
import codingMetricsBranding from "@/public/compressed/coding-metrics.jpg";
import oasisDelSaberBranding from "@/public/compressed/oasis-del-saber.jpg";
import aviationEcommerce from "@/public/compressed/aviation-store.jpg";
import financialDashboard from "@/public/compressed/financial-dashboard.jpeg";
import bayesite from "@/public/compressed/bayesite.jpg";
// import comingSoon from "@/public/compressed/coming-soon.jpg";

const Projects = () => {
  const { ref } = useActiveInView("Projects", 0.2);

  const [active, setActive] = useState<string>("web-development");

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="relative scroll-mt-28 px-2 sm:px-6 mb-20"
    >
      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="bg-circle__middle-right"
      />
      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="bg-circle__middle-left"
      />

      <h2 className="text-center">Projects</h2>

      <div className="flex items-center justify-center gap-4 mb-6 -mt-4">
        <SkillsButton
          id="web-development"
          active={active}
          setActive={setActive}
        >
          <FaCode className="w-5 h-5" />
          Web Development
        </SkillsButton>

        <SkillsButton id="graphic-design" active={active} setActive={setActive}>
          <MdOutlineDesignServices className="w-5 h-5" />
          Graphic Design
        </SkillsButton>
      </div>

      <>
        <motion.section
          initial={{ opacity: 0, x: 50, originZ: 0.7 }}
          animate={{ opacity: 1, x: 0, originZ: 1 }}
          transition={{ duration: 0.4 }}
          className={`${active === "web-development" ? "sm:block" : "hidden"}`}
        >
          {webDevelopmentData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50, originZ: 0.7 }}
          animate={{ opacity: 1, x: 0, originZ: 1 }}
          transition={{ duration: 0.4 }}
          className={`flex flex-wrap justify-center mx-auto w-[70%] gap-4 mb-8 ${
            active === "graphic-design" ? "sm:flex" : "hidden"
          }`}
        >
          <GalleryCard
            title="BayeSite Official Website"
            description="UX/UI design of an AI Website, I'm developing the website for this company. Will be available in the Web Development section."
            href="https://xd.adobe.com/view/1221c505-d31d-4239-a514-bb3c9ed0d06f-4772/?fullscreen"
            image={bayesite}
            textButton="View Design"
          />

          <GalleryCard
            title="Financial Dashboard"
            description="Personal Financial Admin"
            href="https://xd.adobe.com/view/abb5e1fe-d956-4404-87ea-24a397d58aa0-fee6/"
            image={financialDashboard}
            textButton="Go To Website"
          />

          <GalleryCard
            title="UX/UI Design"
            description="E-Commerce mockup design for a real Aviation's Company located in Argentina. Developing project in progress."
            href="https://xd.adobe.com/view/1e294fd1-031d-4ef8-be96-ec1fe6d1429a-4b7a/"
            image={aviationEcommerce}
            textButton="Go To Website"
          />

          <GalleryCard
            title="Oasis del Saber Branding"
            description="complete branding for a personal growth brand. Designed all the branding and social media posts."
            href="/branding_oasisdelsaber_compressed.pdf"
            image={oasisDelSaberBranding}
            textButton="Download PDF"
          />

          <GalleryCard
            title="Codign Metrics Branding"
            description="Complete branding for a Digital Marketing Company. Designed all the branding and social media posts."
            href="/branding_coding_metrics_compressed.pdf"
            image={codingMetricsBranding}
            textButton="Download PDF"
          />

          <GalleryCard
            title="UX/UI Design"
            description="Portfolio design built with AdobeXd"
            href="https://xd.adobe.com/view/2608fd90-7c10-410a-9a89-7273ec911f40-735b/"
            image={portfolioDesign}
            textButton="Go To Website"
          />

          {/* <GalleryCard
            title="Coming Soon..."
            description="Uploading all my projects 🚀"
            href=""
            image={comingSoon}
            textButton="Uploading"
          /> */}
        </motion.section>
      </>

      <div className="m-auto flex items-center justify-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${
            active === "web-development" ? "bg-gray-600" : "bg-gray-400"
          }`}
        />
        <div
          className={`w-2 h-2 rounded-full ${
            active === "graphic-design" ? "bg-gray-600" : "bg-gray-400"
          }`}
        />
      </div>
    </motion.section>
  );
};

export default Projects;
