"use client";

import { motion } from "framer-motion";
import skills from "@/json/skills.json";
import { ButtonLink, Container } from "@/components/UIElements";
import { SkillCard } from "@/components/card/Skill";
import { chunkArray } from "@/lib/helper";

type SkillsProps = {
  isInner?: boolean;
};

export default function Skills({ isInner = false }: SkillsProps) {
  const skillsArray = isInner ? skills : skills.slice(0, 3);

  return (
    <Container className="max-w-7xl mx-auto text-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-bty"
      >
        Skills & Tech Stack
      </motion.h2>

      {/* Categories */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillsArray.map((category, index) => (
          <SkillCard key={index} category={category} index={index} isInner={isInner} />
        ))}
      </div>

      {!isInner && <ButtonLink href="/about" variant="primary" className="mt-6">More Information</ButtonLink>}
    </Container>
  );
}
