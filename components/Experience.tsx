"use client";

import { experiencesData } from "@/constants/data";
import useActiveInView from "@/hooks/useActiveInView";
import useThemeContext from "@/hooks/useThemeContext";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const { ref } = useActiveInView("Experience");
  const { theme } = useThemeContext();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28">
      <h2>My Experience</h2>

      <VerticalTimeline
        className="before:!bg-gray-200 dark:before:!bg-white/20"
        lineColor=""
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgb(235 236 237)"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.4)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#fff" : "rgb(17 24 39)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>

              {item.keyAchievements.length > 0 && (
                <p className="!mt-4 text-gray-600 dark:text-gray-300">
                  Key Achievements:
                </p>
              )}

              {item.keyAchievements.map((keyAchievement, indexKey) => (
                <li
                  key={indexKey}
                  className="text-[13px] sm:text-[16px] text-gray-700 dark:text-gray-400"
                >
                  {keyAchievement}
                </li>
              ))}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
