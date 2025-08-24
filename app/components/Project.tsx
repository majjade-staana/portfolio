"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/json/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 xl:px-0 py-10 bg-yellow-500 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 dark:text-yellow-500"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 bg-yellow-500 text-white text-center py-2 rounded-[1px] shadow-md hover:bg-yellow-600 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="flex-1 border border-yellow-500 text-yellow-500 text-center py-2 rounded-[1px] shadow-md hover:bg-yellow-500 hover:text-white transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
