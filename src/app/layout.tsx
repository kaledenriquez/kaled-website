import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/app/components/Navbar";
import About from "@/src/app/about/about";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ 
  subsets: ["latin", "greek"] ,
  weight: ['400', '500', '700'],
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
      <body className={roboto.className}>
        <Navbar></Navbar>
        {children}
        <About></About>
        </body>
    </html>
  );
}
