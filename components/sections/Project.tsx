"use client";

import { motion } from "framer-motion";
import projectsData from "@/json/projects.json";
import FallbackImage from "@/components/utils/FallbackImage";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { ButtonLink, Container } from "@/components/UIElements";
import { chunkArray } from "@/lib/helper";

// Types
import { Project } from "@/lib/types";
import { ProjectCard } from "../card/Project";

const projects: Project[] = projectsData;

type ProjectsProps = {
  isInner?: boolean;
};

export default function Projects({ isInner = false }: ProjectsProps) {
  // Split normal projects vs grouped
  const individualProjects = projects.filter((p) => !p.projects);
  const groupedProjects = projects.filter((p) => p.projects);

  const chunkedProjects = isInner ? individualProjects : individualProjects.slice(0, 4);

  return (
    <Container className="max-w-7xl mx-auto text-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-bty"
      >
        Projects
      </motion.h2>

      {/* Individual Projects Grid */}
      <div className="text-left grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-6 md:mb-8 pb-8">
        {chunkedProjects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>

      {!isInner && <ButtonLink href="/projects" variant="outline">View All Projects</ButtonLink>}

      {/* Grouped Projects Listing */}
      {isInner && 
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
      </div>}
    </Container>
  );
}
