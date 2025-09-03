"use client"

import { Project } from "@/lib/types"
import { motion } from "framer-motion";
import FallbackImage from "@/components/utils/FallbackImage";
import { useEffect, useState } from "react";

type ProjectCardProps = {   
  index: number;
  project: Project;
  className?: string;
};  

export const ProjectCard = ({ index, project }: ProjectCardProps) => {
    const [maxLength, setMaxLength] = useState(500);
    const [expanded, setExpanded] = useState(false);

    // Detect screen size
    useEffect(() => {
    const updateMaxLength = () => {
        const windowWidth = window.innerWidth
        if (windowWidth < 768) {
        setMaxLength(130); // mobile
        } else if (windowWidth < 1024) {
        setMaxLength(150); // tablet
        } else {
        setMaxLength(200); // desktop
        }
    };

    updateMaxLength(); 
    window.addEventListener("resize", updateMaxLength);
    return () => window.removeEventListener("resize", updateMaxLength);
    }, []);
    
    const length = project.highlight ? maxLength * 2.5 : maxLength
    const isLong = project.description.length > length;
    const displayedText = expanded
    ? project.description
    : project.description.slice(0, length) + (isLong ? "..." : "");
    
    return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`
              bg-card rounded-[1px] shadow-lg overflow-hidden flex flex-col
              ${project.highlight ? "md:col-span-2 xl:col-span-3 md:flex-row" : ""}
            `}
          >
            {/* Project Image */}
            <div className={`relative min-h-48 ${project.highlight ? "md:w-1/2 h-full" : "w-full"}`}>
              <FallbackImage
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Content */}
            <div className={`p-6 flex flex-col flex-grow ${project.highlight ? "md:w-1/2" : ""}`}>
              <h3 className={`text-lg font-semibold mb-2 text-bty ${project.highlight ? "md:text-3xl" : "md:text-xl"}`}>
                {project.title}
              </h3>
              <p className={`flex-grow text-base md:text-lg`}>{displayedText}</p>
              {isLong && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-2 text-yellow-600 text-sm font-medium md:hover:underline text-left"
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              )}

              {/* Tech Stack */}
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              {(project.demo || project.code) &&
                <div className="mt-4 flex gap-3">
                  {project.demo && 
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 bg-yellow-500 text-white text-center py-2 rounded shadow-md md:hover:bg-yellow-600 transition"
                  >
                    Live Demo
                  </a>}
                  {project.code && 
                  <a
                    href={project.code}
                    target="_blank"
                    className="flex-1 border border-yellow-500 text-yellow-500 text-center py-2 rounded shadow-md md:hover:bg-yellow-500 md:hover:text-white transition"
                  >
                    Code
                  </a>}
                </div>
              }
            </div>
          </motion.div>
    )
}   