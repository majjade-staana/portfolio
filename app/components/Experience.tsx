"use client";

import { motion } from "framer-motion";
import experience from "@/json/experience.json";
import { useEffect, useState } from "react";

export default function Experience() {
  const [maxLength, setMaxLength] = useState(500);

  // Detect screen size
  useEffect(() => {
    const updateMaxLength = () => {
      if (window.innerWidth < 768) {
        setMaxLength(150); // mobile
      } else {
        setMaxLength(300); // desktop
      }
    };

    updateMaxLength(); // run on mount
    window.addEventListener("resize", updateMaxLength);
    return () => window.removeEventListener("resize", updateMaxLength);
  }, []);

  

  return (
    <section
      id="experience"
      className="px-6 md:px-16 lg:px-24 py-10"
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
        <div className="relative border-l border-gray-300">
          {experience.map((item, index) => {
            const [expanded, setExpanded] = useState(false);
            const isLong = item.description.length > maxLength;
            const displayedText = expanded
              ? item.description
              : item.description.slice(0, maxLength) + (isLong ? "..." : "");
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="mb-10 ml-6"
              >
                {/* Dot */}
                <div className="absolute -left-3 w-6 h-6 bg-yellow-500 rounded-full border-4 border-background"></div>

                {/* Content */}
                <div className="bg-card p-6 rounded-xl shadow-md">
                  <span className="text-sm font-medium text-yellow-600">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">
                    {item.role}{" "}
                    <span className="italic text-base text-bty">
                      @ {item.company}
                    </span>
                  </h3>

                  <p className="mt-2">{displayedText}</p>

                  {isLong && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="mt-2 text-yellow-600 text-sm font-medium hover:underline"
                    >
                      {expanded ? "Show less" : "Read more"}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
