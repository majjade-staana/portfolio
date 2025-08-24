"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-16 xl:px-0 py-10 " // very light yellow background
    >
      <div className="max-w-7xl mx-auto md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg leading-relaxed mb-6 "
        >
          I’m a developer who enjoys turning ideas into digital solutions. 
          I have experience working across the full stack, from crafting 
          intuitive user interfaces to building scalable backend systems. 
          I value clean code, thoughtful design, and creating impactful 
          applications that improve people’s lives.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg leading-relaxed"
        >
          Outside of coding, I’m always exploring new technologies, learning 
          best practices, and finding ways to grow both professionally and 
          personally.
        </motion.p>
      </div>
    </section>
  );
}
