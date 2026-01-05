import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-black text-gray-300 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>

        <p className="mb-6 text-gray-400">
          ¿Querés hablar de un proyecto o colaborar? ¡Escribime!
        </p>

        <div className="flex justify-center gap-6 text-lg mb-8">
          <a
            href="mailto:nahuel.whittall@gmail.com"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/tuusuario"
            target="_blank"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/neyennahuel"
            target="_blank"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Nahuel.dev — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
