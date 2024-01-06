import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveNavContext } from "./useActiveNavContext";

import { SectionNameProps } from "@/types";

const useActiveInView = (sectionName: SectionNameProps, threshold = 0.75) => {
  const [ref, inView] = useInView({
    threshold: threshold,
  });
  const { setActiveNav, clickTimer } = useActiveNavContext();

  useEffect(() => {
    if (inView && Date.now() - clickTimer > 1000) {
      setActiveNav(sectionName);
    }
  }, [inView, setActiveNav, clickTimer, sectionName]);

  return { ref };
};

export default useActiveInView;
