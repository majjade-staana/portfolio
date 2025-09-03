import Contact from "@/components//sections/Contact";
import ContactUnderConstruction from "@/components/ContactUnderConstruction";
import { Section, Container } from "@/components/UIElements";
export const metadata = {
  title: "Contact Me",
  description: "Get in touch with this full stack developer.",
};

export default function ContactPage() {
  return (
    <>
        <Section id="contact-message" className="min-h-[calc(100svh-332px)] md:min-h-[calc(100svh-340px)] grid place-items-center">
            <ContactUnderConstruction />
        </Section>
        {/* Contact Section */}
        <Section id="contact" className="bg-accent">
            <Contact />
        </Section>  
    </>
  );
}