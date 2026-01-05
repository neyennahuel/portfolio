"use client";

import { useState, useEffect } from "react";

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
        scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <h2 className="text-2xl font-bold text-gray-200 tracking-tight">
          Nahuel<span className="text-blue-500">.dev</span>
        </h2>

        {/* MENU */}
        <div className="flex gap-8 text-gray-300 font-medium">
          <a href="#inicio" className="hover:text-white transition">Inicio</a>
          <a href="#sobre-mi" className="hover:text-white transition">Sobre mí</a>
          <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </div>

      </div>
    </nav>
  );
}
