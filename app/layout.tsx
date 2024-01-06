import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import ActiveNavContextProvider from "@/context/ActiveNavContextProvider";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/shared/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emanuel Nuñez | Portfolio",
  description: "Front End Developer & Graphic Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-100 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 w-[100%]`}
      >
        <div className="bg-circle__top-right" />
        <div className="bg-circle__top-left" />

        <ThemeContextProvider>
          <ActiveNavContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="bottom-center" />

            <ThemeSwitch />
          </ActiveNavContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
