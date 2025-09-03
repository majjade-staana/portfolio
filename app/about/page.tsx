import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import { Section } from "@/components/UIElements";

export const metadata = {
  title: "About Me",
  description: "Learn more about me and my background.",
};

export default function AboutPage() {
  return (
    <>
        {/* Experience Section */}
        <Section id="experience" className="">
            <Experience />
        </Section>

        {/* Skills Section */}
        <Section id="skills" className="bg-accent">
            <Skills isInner />
        </Section>

        {/* About Section */}
        <Section id="about" className="">
          <About isInner />
        </Section>
    
        {/* Contact Section */}
        <Section id="contact" className="bg-accent">
          <Contact />
        </Section>
    </>
  );
}
