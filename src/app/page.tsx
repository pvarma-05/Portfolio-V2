"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <div className="h-[100vh] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-50 w-full pt-20 md:pt-0">
        <h1 className="font-jakarta text-4xl md:text-6xl font-semibold text-center text-white">
          Hello I'm <span className="font-right bg-clip-text text-transparent bg-gradient-to-b from-emerald-300 to-sky-300">Pradeep Varma</span> 
        </h1>
        <p className="mt-5 font-medium font-outfit text-xl text-gray-300 max-w-lg text-center mx-auto">
          Student | Full Stack Developer | Cyber Enthusiast
        </p>
      </div>
    </div>
  );
}