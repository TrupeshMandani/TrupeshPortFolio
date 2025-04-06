import React from "react";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarCanvas from "./components/main/StarBackground"; // Ensure the correct path
import NavBar from "./components/main/NavBar";

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
  title: "Trupesh Mandani",
  description: "A software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarCanvas />
        <div className="">
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
