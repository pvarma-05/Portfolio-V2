"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-[90vh] w-full rounded-md flex sm:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className="max-w-7xl mx-auto w-full py-20 md:pt-0">
          <h1 className="p-1 w-full font-jakarta  sm:text-3xl md:text-6xl font-semibold text-center text-white">
            <span className="sm:text-2xl md:text-4xl">नमस्ते, I'm</span> <span className="font-right bg-clip-text text-transparent bg-gradient-to-b from-emerald-300 to-sky-300">Pradeep Varma</span>
          </h1>
          <p className="sm:mt-2 md:mt-5 font-medium font-outfit sm:text-sm md:text-xl text-gray-300 max-w-lg text-center mx-auto">
            Student | Full Stack Developer | Cyber Enthusiast
          </p>
        </div>
      </section>
      <section className="h-[100vh] ">

      </section>
    </main>
  )
}