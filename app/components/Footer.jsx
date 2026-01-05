import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-20 border-t border-border/60 bg-surface py-12 text-muted"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>

        <p className="mb-6 text-muted">
          ¿Queres hablar de un proyecto o colaborar? ¡Escribime!
        </p>

        <div className="flex justify-center gap-6 text-lg mb-6">
          <a
            href="mailto:neyennahuel@gmail.com"
            aria-label="Enviar email a Neyen Nahuel"
            title="Enviar email"
            className="hover:text-foreground transition flex items-center gap-2"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/nahuel-whittall/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition flex items-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://wa.me/5491126980656?text=Hola%2C%20queria%20consultar%20por%20tus%20servicios%20de%20programador%20web"
            target="_blank"
            rel="noreferrer"
            aria-label="Enviar WhatsApp"
            title="Enviar WhatsApp"
            className="hover:text-foreground transition flex items-center gap-2"
          >
            <MessageCircle size={20} />
          </a>

          <a
            href="https://github.com/neyennahuel"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition flex items-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
          <span className="rounded-full border border-border/60 bg-surface-muted px-4 py-1">
            Nacionalidad: Argentina
          </span>
          <span className="rounded-full border border-border/60 bg-surface-muted px-4 py-1">
            Idiomas: Espanol (nativo), Ingles
          </span>
        </div>

        <p className="text-sm text-muted">
          (c) {new Date().getFullYear()} Nahuel.dev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}





