import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
