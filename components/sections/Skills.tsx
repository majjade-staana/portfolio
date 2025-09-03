"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import skills from "@/json/skills.json";
import { Container } from "@/components/UIElements";

export default function Skills() {
  return (
    <Container className="max-w-7xl mx-auto text-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-bty"
      >
        Skills & Tech Stack
      </motion.h2>

      {/* Categories */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="rounded-2xl shadow-md p-6 bg-card"
          >
            <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
            <div className="grid grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="p-3 mb-2 shadow-md rounded-full bg-icon transition-transform duration-200 hover:-translate-y-1">
                    <div className="w-9 h-9 relative">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-sm">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
