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
          className="text-lg leading-relaxed mb-6"
        >{"I'm a Full Stack Developer with experience building modern web applications, from crafting user-friendly interfaces with Next.js and Vue.js to developing scalable backends with Laravel and Express.js. Over the years, I've delivered projects across diverse stacks- including e-commerce sites with headless WordPress and WooCommerce, live-streaming platforms powered by AWS, and internal systems that streamlined workflows for government and private organizations."}
          
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg leading-relaxed mb-6"
        >
          {"I enjoy working across both modern frameworks and legacy systems, adapting to client needs while focusing on clean, maintainable code. My background also spans technical support, automation, and even roles outside of tech, which shaped my problem-solving skills, adaptability, and ability to collaborate with diverse teams."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg leading-relaxed"
        >
          {"Outside of coding, I'm passionate about continuous learning—whether it's exploring new technologies, refining best practices, or finding creative ways to deliver meaningful digital solutions."}
        </motion.p>

      </div>
    </section>
  );
}
