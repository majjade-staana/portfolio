"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 xl:px-0 py-10 max-w-7xl mx-auto gap-6">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-yellow-500">Majjade <span className="truncate">Sta. Ana</span></span> 👋
        </h1>
        <p className="text-lg md:text-xl mb-6">
          A versatile developer passionate about creating modern, user-friendly, and impactful digital experiences.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-yellow-500 text-white px-6 py-3 rounded-[1px] shadow-md hover:bg-yellow-600 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-[1px] shadow-md hover:bg-yellow-500 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-0"
      >
        <Image
          src="/icon.png"
          alt="Cartoon of me"
          width={300}
          height={300}
          className="rounded-full border-4 border-yellow-500 shadow-lg"
          priority
        />
      </motion.div>
    </section>
  );
}
