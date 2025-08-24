"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import contact from "@/json/contact.json";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 lg:px-24 py-10 bg-yellow-500 dark:bg-gray-700"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>

        {/* Email */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6"
        >
          Reach me at{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-white dark:text-yellow-500 font-semibold hover:underline"
          >
            {contact.email}
          </a>
        </motion.p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          {contact.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
