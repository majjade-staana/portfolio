"use client";

import { motion } from "framer-motion";
import experience from "@/json/experience.json";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-16 lg:px-24 py-10 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Experience & Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-gray-600">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-10 ml-6"
            >
              {/* Dot */}
              <div className="absolute -left-3 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white dark:border-gray-900"></div>

              {/* Content */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                  {item.date}
                </span>
                <h3 className="text-lg font-semibold mt-2">
                  {item.role}{" "}
                  <span className="text-gray-500 dark:text-gray-400">
                    @ {item.company}
                  </span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
