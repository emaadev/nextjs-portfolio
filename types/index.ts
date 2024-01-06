import { links, projectsData } from "@/constants/data";

export interface CustomButtonsProps {
  children: React.ReactNode;
  href: string;
  customClasses: string;
  onClick: any;
}

export type ProjectProps = (typeof projectsData)[number];

export type SectionNameProps = (typeof links)[number]["name"];

export type ActiveNavContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveNavContextProps = {
  activeNav: SectionNameProps;
  setActiveNav: React.Dispatch<React.SetStateAction<SectionNameProps>>;
  clickTimer: number;
  setClickTimer: React.Dispatch<React.SetStateAction<number>>;
};

export type Theme = "light" | "dark";

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  handleTheme: () => void;
};
