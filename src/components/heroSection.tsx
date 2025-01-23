'use client'
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Navbar from "./Navbar";

const aboutMe = `
I am a passionate developer, constantly learning and improving my skills. With a strong background in web development and a focus on React and Tailwind CSS, I build user-friendly applications that solve real-world problems. Let's build something amazing together!`;

export function HeroSection() {
  return (
    <AuroraBackground>
      <Navbar/>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {/* Centered Heading */}
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center mt-32 md:mt-36 mx-auto">
          I&apos;m Naman Sharma
        </div>
        
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
          And this, is my Portfolio.
        </div>

        {/* Resume Download Button */}
        <a
          href="https://drive.google.com/file/d/15tEdyas7tTvnV0Cj4FwCGI7nJskFLUaq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
        >
          View My CV
        </a>

        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center" id="about">
          <div className="text-2xl md:text-4xl font-bold max-w-3xl mx-auto leading-relaxed">
            <TextGenerateEffect words={aboutMe} />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
