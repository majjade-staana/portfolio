"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="z-10 fixed p-3 rounded-full shadow-md shadow-foreground/30 bg-toggler bottom-22 md:bottom-24 right-3 md:right-4 transform cursor-pointer hover:-translate-y-1"
      title="Back to top"
    >
      <ArrowUp className="w-6 h-6 md:w-9 md:h-9 text-current" />
    </button>
  );
}