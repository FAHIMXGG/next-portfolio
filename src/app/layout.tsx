import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import {Recursive} from 'next/font/google'
import { ThemeProvider } from "./components/theme-provider";
import StarsCanvas from "./components/star-bg";
import { HeaderWrapper } from "./components/header-wrapper";

const inter = Recursive({subsets: ['latin']})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ahasanul Haque",
  description: "I'm Ahasanul Haque, a passionate web developer specializing in building fast, responsive, and scalable web apps. Open to new opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.className} overflow-x-hidden`}
      >
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <HeaderWrapper/>
          <StarsCanvas/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
