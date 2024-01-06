"use client";

import { createContext, useState } from "react";
import {
  SectionNameProps,
  ActiveNavContextProviderProps,
  ActiveNavContextProps,
} from "@/types";
import { useInView } from "react-intersection-observer";

export const ActiveNavContext = createContext<ActiveNavContextProps | null>(
  null
);

const ActiveNavContextProvider = ({
  children,
}: ActiveNavContextProviderProps) => {
  const [activeNav, setActiveNav] = useState<SectionNameProps>("Home");
  const [clickTimer, setClickTimer] = useState(0);

  return (
    <ActiveNavContext.Provider
      value={{
        activeNav,
        setActiveNav,
        clickTimer,
        setClickTimer,
      }}
    >
      {children}
    </ActiveNavContext.Provider>
  );
};

export default ActiveNavContextProvider;
