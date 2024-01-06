import { useContext } from "react";
import { ActiveNavContext } from "@/context/ActiveNavContextProvider";

export const useActiveNavContext = () => {
  const context = useContext(ActiveNavContext);

  if (context === null) {
    throw new Error("There is a problem with the ActiveNavContext");
  }
  return context;
};
