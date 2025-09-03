import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

import { Section } from "@/components/UIElements";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section id="hero" className="">
        <Hero />
      </Section>

      {/* About Section */}
      <Section id="about" className="pb-10">
        <About />
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-accent">
        <Projects />
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="pb-0">
        <Skills />
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <Experience />
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-accent">
        <Contact />
      </Section>
    </>
  );
}
