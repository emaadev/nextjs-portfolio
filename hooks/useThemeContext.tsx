import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContextProvider";

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
};

export default useThemeContext;
