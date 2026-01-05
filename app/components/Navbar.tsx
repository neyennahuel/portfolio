"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/80 backdrop-blur-md py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">

        {/* LOGO */}
        <h2 className="text-2xl font-bold text-foreground tracking-tight">
          Nahuel<span className="text-accent">.dev</span>
        </h2>

        {/* MENU */}
        <div className="flex items-center gap-8 text-muted font-medium">
          <a href="#inicio" className="hover:text-foreground transition">Inicio</a>
          <a href="#sobre-mi" className="hover:text-foreground transition">Sobre mi</a>
          <a href="#proyectos" className="hover:text-foreground transition">Proyectos</a>
          <a href="#contacto" className="hover:text-foreground transition">Contacto</a>
        </div>

        <ThemeToggle />

      </div>
    </nav>
  );
}


