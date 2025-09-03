"use client";

import { motion } from "framer-motion";
import projectsData from "@/json/projects.json";
import FallbackImage from "../utils/FallbackImage";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/UIElements";

// Types
type SubProject = {
  title: string;
  tech?: string[];
  link?: string | null;
  status?: string;
};

type Project = {
  title: string;
  description: string;
  image?: string | null;
  demo?: string | null;
  code?: string | null;
  tech?: string[];
  company?: string;
  type: string;
  projects?: SubProject[];
  highlight?: boolean
};

const projects: Project[] = projectsData;

export default function Projects() {
  // Split normal projects vs grouped
  const individualProjects = projects.filter((p) => !p.projects);
  const groupedProjects = projects.filter((p) => p.projects);

  const [maxLength, setMaxLength] = useState(500);
  const [expanded, setExpanded] = useState<number | null>(null);

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
    <Container className="max-w-7xl mx-auto text-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Projects
      </motion.h2>

      {/* Individual Projects Grid */}
      <div className="text-left grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b-2 border-bty">
        {individualProjects.map((project, index) => {
          const length = project.highlight ? maxLength * 2.5 : maxLength
          const isLong = project.description.length > length;
          const displayedText = expanded === index
            ? project.description
            : project.description.slice(0, length) + (isLong ? "..." : "");

          return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`
              bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col
              ${project.highlight ? "md:col-span-3 md:flex-row" : ""}
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
              <h3 className="text-2xl font-semibold mb-2 text-bty">
                {project.title}
                {/* {project.highlight && (
                  <span className="ml-2 inline-block text-sm bg-yellow-500 text-white px-2 py-0.5 rounded">
                    Featured
                  </span>
                )} */}
              </h3>
              <p className="flex-grow text-lg">{displayedText}</p>
              {isLong && (
                <button
                  onClick={() => setExpanded(index === expanded ? null : index)}
                  className="mt-2 text-yellow-600 text-sm font-medium md:hover:underline text-left"
                >
                  {index === expanded ? "Show less" : "Read more"}
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
        })}
      </div>

      {/* Grouped Projects Listing */}
      <div className="text-left grid md:grid-cols-2 gap-8">
        {groupedProjects.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="bg-card rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-bty">{group.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">
              {group.description}
            </p>

            <ul className="space-y-3">
              {group.projects?.map((sub, i) => (
                <li
                  key={i}
                  className="border-b md:hover:border-transparent"
                >
                  {!sub.link
                    ? (
                      <div className=" p-2 pb-3 last:border-0 md:hover:bg-gray-400 md:hover:text-gray-800 md:hover:rounded-lg md:hover:[&>a]:text-gray-800">
                        <span className="font-medium">{sub.title}</span>
                        {sub.tech && (
                          <div className="text-xs text-muted-foreground mt-1">
                            {sub.tech.join(", ")}
                          </div>
                        )}
                        {sub.status && (
                          <div className="text-xs text-red-500">
                            {sub.status}
                          </div>
                        )}
                      </div>)
                    : (
                      <a className="border-b p-2 pb-3 last:border-0 flex flex-row justify-between items-center sm:justify-between md:hover:bg-yellow-500 md:hover:text-gray-800 md:hover:rounded-lg md:hover:[&>svg]:text-gray-900"
                      href={sub.link}
                      target="_blank">
                        <div>
                          <span className="font-medium">{sub.title}</span>
                          {sub.tech && (
                            <div className="text-xs text-muted-foreground mt-1">
                              {sub.tech.join(", ")}
                            </div>
                          )}
                          {sub.status && (
                            <div className="text-xs text-red-500">
                              {sub.status}
                            </div>
                          )}
                        </div>
                        <ExternalLink className="text-bty" size={16} />
                      </a>)
                  }
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
