"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/UIElements";

type AboutProps = {
  isInner?: boolean;
};

export default function About({ isInner = false }: AboutProps) {
  return (
    <Container className="[&>p]:text-base md:[&>p]:text-lg md:text-left">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-3 md:mb-6"
      >
        {isInner ? `More About Me` : `About Me`}
      </motion.h2>

      {!isInner 
      ? <>
      
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="leading-relaxed mb-6"
        >
          {"I'm a Full Stack Developer with experience building modern web applications across both front-end and back-end stacks. I’ve worked on e-commerce platforms using Next.js, headless WordPress, and WooCommerce, developed scalable APIs with Laravel and Express.js, and built solutions ranging from live-streaming platforms powered by AWS to workflow systems for government and private organizations."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="leading-relaxed"
        >
          {"Beyond coding, I value adaptability, clean architecture, and collaborative problem-solving. My career path—from technical support and automation to full stack development—has shaped me into a versatile professional who thrives on learning new technologies and creating impactful digital solutions."}
        </motion.p>
      </> : <>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="leading-relaxed mb-6"
        >
          {"I'm a Full Stack Developer with a background in building a wide range of web applications, from user-friendly interfaces to scalable backends. My recent work includes developing modern e-commerce solutions with Next.js, headless WordPress, and WooCommerce, while also leading back-end implementations using Laravel and Express.js."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="leading-relaxed mb-6"
        >
          {"Over the years, I’ve delivered projects across diverse stacks. I worked on a live-streaming platform integrating AWS IVS and third-party APIs for payments, as well as systems for government agencies that digitized workflows and improved efficiency. These experiences allowed me to work on projects that demanded both innovation and reliability."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="leading-relaxed mb-6"
        >
          {"My expertise isn’t limited to new technologies—I’ve also maintained and modernized legacy platforms, ensuring clients like 7-Eleven PH and JuanHand could evolve without losing stability. This mix of modern and legacy work honed my ability to adapt quickly to client needs while balancing innovation with practicality."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="leading-relaxed mb-6"
        >
          {"Before becoming a full-time developer, I gained experience in technical support and automation, even starting my career outside tech as a Collections Executive. These roles strengthened my communication, problem-solving, and resilience—skills that continue to shape how I collaborate and approach challenges as a developer."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="leading-relaxed"
        >
          {"Outside of work, I’m passionate about continuous growth—whether it’s experimenting with new frameworks, refining best practices, or exploring creative approaches to build meaningful digital solutions."}
        </motion.p>
      </>}


    </Container>
  );
}
