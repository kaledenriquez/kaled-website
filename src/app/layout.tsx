import type { Metadata } from "next";
import { Inter, Arimo} from "next/font/google";
import "./globals.css";
import Navbar from "@/src/app/components/Navbar";
import About from "@/src/app/about/about";
import Projects from "@/src/app/projects/projects";
import Skills from "@/src/app/skills/skills";

const inter = Inter({ subsets: ["latin"] });
const arimo = Arimo({
   subsets: ["latin", "cyrillic"],
   weight: ['400', '500', '600', '700'], 
   style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Kaled Enriquez - Portfolio",
  description: "Made by Kaled Enriquez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <Navbar></Navbar>
        {children}
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        </body>
    </html>
  );
}
