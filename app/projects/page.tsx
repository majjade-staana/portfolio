import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Project";
import { Section } from "@/components/UIElements";

export const metadata = {
  title: "Projects",
  description: "Learn more about my projects and work.",
};

export default function ProjectsPage() {
  return (
    <>
        {/* Projects Section */}
        <Section id="projects" className="">
            <Projects isInner />
        </Section>
        
        {/* Contact Section */}
        <Section id="contact" className="bg-accent">
          <Contact />
        </Section>  
    </>
  );
}
