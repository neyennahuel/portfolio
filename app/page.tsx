import Footer from "./components/Footer";
import FeaturedProjects, {
  type FeaturedProject,
} from "./components/FeaturedProjects";
import Navbar from "./components/Navbar";

const GITHUB_USERNAME = "neyennahuel";
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";
const EXCLUDED_REPOS = new Set([
  "portfolio",
  "portfolio-pro",
  "Repar-Ando",
  "BurgerBite",
  "LandingSWhittall",
]);

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "consultorio",
    eyebrow: "Proyecto destacado",
    name: "Consultorio",
    description:
      "Sistema privado responsive para profesionales de la salud y equipos de secretaria. Permite gestionar pacientes, asignar turnos, enviar confirmaciones automaticas por WhatsApp y administrar evoluciones, notas, archivos y exportaciones.",
    badges: [
      "Proyecto comercial",
      "En funcionamiento",
      "Codigo privado",
      "Multiusuario",
      "Responsive",
    ],
    actions: [
      {
        label: "Ver sistema",
        href: "https://consultorio.efectossaludybienestar.com.ar/pages/login.html",
        variant: "primary",
      },
    ],
    note: "Solucion implementada para clientes reales",
    featureTitle: "Aspectos clave",
    featureItems: [
      {
        title: "Agenda y pacientes",
        description:
          "Carga y seguimiento de pacientes desde una sola interfaz, pensada para usarse con comodidad tanto en desktop como en celular.",
      },
      {
        title: "Confirmaciones por WhatsApp",
        description:
          "Envio automatico de recordatorios el dia previo para reducir ausencias y mejorar la organizacion.",
      },
      {
        title: "Evoluciones y adjuntos",
        description:
          "Modulo de evoluciones, notas internas, archivos y exportacion para seguimiento clinico y administrativo.",
      },
    ],
    detailTitle: "Accesos y operacion",
    detailItems: [
      {
        title: "Profesional",
        description:
          "Gestiona sus pacientes, asigna turnos y registra evoluciones, notas y archivos desde su cuenta.",
      },
      {
        title: "Admin / Secretaria",
        description:
          "Da de alta o baja profesionales y tambien puede cargar turnos para la operacion diaria del consultorio.",
      },
      {
        title: "Programador",
        description:
          "Cuenta interna para soporte tecnico, con acciones para forzar el bot de WhatsApp y revisar un panel de errores.",
      },
    ],
    tags: [
      "Gestion de turnos",
      "Pacientes",
      "WhatsApp bot",
      "Responsive",
      "Archivos",
      "Exportacion",
      "Cloudflare",
    ],
    galleryTitle: "Capturas reales del sistema",
    screenshots: [
      {
        src: "/projects/consultorio/consultorio-01.jpg",
        alt: "Captura del sistema Consultorio 1",
        width: 1365,
        height: 633,
      },
      {
        src: "/projects/consultorio/consultorio-02.jpg",
        alt: "Captura del sistema Consultorio 2",
        width: 1365,
        height: 631,
      },
      {
        src: "/projects/consultorio/consultorio-03.jpg",
        alt: "Captura del sistema Consultorio 3",
        width: 1365,
        height: 634,
      },
      {
        src: "/projects/consultorio/consultorio-04.jpg",
        alt: "Captura del sistema Consultorio 4",
        width: 1363,
        height: 627,
      },
    ],
  },
  {
    id: "burgerbite",
    eyebrow: "Proyecto destacado",
    name: "BurgerBite",
    description:
      "Carta web responsive para un local gastronomico. Permite armar el pedido online, calcular importes y abrir un chat de WhatsApp con el mensaje ya cargado, incluyendo costos y detalle del pedido.",
    badges: [
      "Proyecto comercial",
      "En funcionamiento",
      "Responsive",
      "GitHub Pages",
      "Presupuesto acotado",
    ],
    actions: [
      {
        label: "Ver demo",
        href: "https://neyennahuel.github.io/BurgerBite/",
        variant: "primary",
      },
      {
        label: "Ver GitHub",
        href: "https://github.com/neyennahuel/BurgerBite",
        variant: "secondary",
      },
    ],
    note: "Publicado en GitHub Pages mientras se define el dominio propio",
    featureTitle: "Aspectos clave",
    featureItems: [
      {
        title: "Carta web y pedido guiado",
        description:
          "La carta esta pensada para una navegacion simple, clara y responsive, priorizando la experiencia desde el celular sin perder usabilidad en desktop.",
      },
      {
        title: "Pedido listo para WhatsApp",
        description:
          "Al finalizar, el sistema prepara el mensaje con productos, cantidades, costos y detalle del pedido para continuar la compra por chat.",
      },
      {
        title: "Gestion sin panel de admin",
        description:
          "Los productos y valores se administran desde una hoja de calculo, evitando desarrollar un login extra y reduciendo costo de implementacion.",
      },
    ],
    detailTitle: "Operacion y despliegue",
    detailItems: [
      {
        title: "Responsive",
        description:
          "La experiencia acompana el flujo real del cliente: elegir desde el telefono y mandar el pedido por WhatsApp en pocos pasos.",
      },
      {
        title: "Hoja de calculo",
        description:
          "La administracion del menu se resuelve desde una hoja de calculo para que el negocio pueda actualizar items sin depender de un panel complejo.",
      },
      {
        title: "Publicacion actual",
        description:
          "El proyecto esta en linea desde GitHub Pages porque el dominio propio todavia no fue activado por el cliente.",
      },
    ],
    tags: [
      "Carta web",
      "Responsive",
      "WhatsApp",
      "Hoja de calculo",
      "UX",
      "GitHub Pages",
    ],
    galleryTitle: "Capturas de BurgerBite",
    screenshots: [
      {
        src: "/projects/burgerbite/burgerbite-02.jpeg",
        alt: "Vista mobile de BurgerBite 1",
        width: 707,
        height: 1280,
      },
      {
        src: "/projects/burgerbite/burgerbite-03.jpeg",
        alt: "Vista mobile de BurgerBite 2",
        width: 687,
        height: 1280,
      },
      {
        src: "/projects/burgerbite/burgerbite-01.jpg",
        alt: "Hoja de calculo de BurgerBite",
        width: 875,
        height: 452,
      },
    ],
  },
  {
    id: "sistemas-whittall",
    eyebrow: "Proyecto destacado",
    name: "Sistemas Whittall",
    description:
      "Landing institucional responsive para mi marca, pensada para presentar servicios de desarrollo web, automatizaciones y sistemas a medida con una identidad visual propia y foco comercial.",
    badges: [
      "Proyecto propio",
      "En linea",
      "Responsive",
      "Dominio propio",
      "Cloudflare",
    ],
    actions: [
      {
        label: "Ver sitio",
        href: "https://www.swhittall.com.ar",
        variant: "primary",
      },
      {
        label: "Ver GitHub",
        href: "https://github.com/neyennahuel/LandingSWhittall",
        variant: "secondary",
      },
    ],
    note: "Landing publicada con dominio propio",
    featureTitle: "Aspectos clave",
    featureItems: [
      {
        title: "Presentacion clara de servicios",
        description:
          "La estructura esta pensada para mostrar rapido que hago: landings, sistemas a medida y automatizaciones orientadas a negocio.",
      },
      {
        title: "Marca propia y contacto directo",
        description:
          "Integra identidad visual propia, enlaces de contacto y un flujo simple para iniciar consultas por WhatsApp desde cualquier dispositivo.",
      },
      {
        title: "Responsive y orientada a conversion",
        description:
          "La landing mantiene lectura clara en desktop y mobile, con secciones pensadas para ordenar servicios, trabajos realizados y cierre comercial.",
      },
    ],
    detailTitle: "Operacion y despliegue",
    detailItems: [
      {
        title: "Dominio real",
        description:
          "Se publica con dominio propio para funcionar como presencia comercial principal de la marca.",
      },
      {
        title: "Cloudflare Tunnel",
        description:
          "El despliegue queda resuelto sobre servidor propio con Cloudflare, sin depender de una plataforma de hosting tradicional.",
      },
      {
        title: "Trabajo de identidad",
        description:
          "El sitio toma como base el sistema de marca de Sistemas Whittall, combinando el logo oficial, el isotipo y una presentacion sobria.",
      },
    ],
    tags: [
      "Landing",
      "Responsive",
      "Marca propia",
      "Next.js",
      "Cloudflare",
      "WhatsApp",
    ],
    galleryTitle: "Capturas de Sistemas Whittall",
    screenshots: [
      {
        src: "/projects/swhittall/swhittall-01.png",
        alt: "Vista desktop de Sistemas Whittall",
        width: 1440,
        height: 2200,
      },
      {
        src: "/projects/swhittall/swhittall-02.png",
        alt: "Vista mobile de Sistemas Whittall",
        width: 430,
        height: 2000,
      },
    ],
  },
  {
    id: "reparando",
    eyebrow: "Proyecto propio destacado",
    name: "Repar-Ando",
    description:
      "Aplicacion hecha para mi trabajo tecnico. Centraliza control de stock de PCs, mantenimiento, insumos, notificaciones, agrupacion por equipos y configuracion personalizada de cada cuanto hacer los service.",
    badges: [
      "Proyecto propio",
      "En uso",
      "Instalador",
      "Releases en GitHub",
      "ES / EN / PT",
    ],
    actions: [
      {
        label: "Ver GitHub",
        href: "https://github.com/neyennahuel/Repar-Ando",
        variant: "primary",
      },
      {
        label: "Ver releases",
        href: "https://github.com/neyennahuel/Repar-Ando/releases",
        variant: "secondary",
      },
    ],
    note: "Instalador con actualizaciones publicadas",
    featureTitle: "Aspectos clave",
    featureItems: [
      {
        title: "Stock y mantenimiento",
        description:
          "Controla stock de PCs, historial de mantenimiento y frecuencia configurable de service por cada equipo.",
      },
      {
        title: "Operacion diaria",
        description:
          "Incluye control simple de insumos, notificaciones y division por grupos para ordenar el trabajo tecnico.",
      },
      {
        title: "Distribucion y actualizacion",
        description:
          "Se entrega con instalador y publica nuevas versiones mediante GitHub Releases para mantenerla al dia.",
      },
    ],
    detailTitle: "Distribucion y alcance",
    detailItems: [
      {
        title: "Frecuencia configurable",
        description:
          "Cada grupo o equipo puede definir cada cuanto corresponde hacer mantenimiento o service preventivo.",
      },
      {
        title: "Multilenguaje",
        description:
          "La app esta preparada en espanol, ingles y portugues para facilitar su uso en distintos contextos.",
      },
      {
        title: "Actualizaciones versionadas",
        description:
          "Las mejoras quedan ordenadas por release en GitHub, con un canal claro para descargar versiones nuevas.",
      },
    ],
    tags: [
      "Desktop app",
      "Stock de PC",
      "Mantenimiento",
      "Insumos",
      "Notificaciones",
      "Multilenguaje",
    ],
    galleryTitle: "Capturas de Repar-Ando",
    screenshots: [
      {
        src: "/projects/reparando/reparando-01.jpg",
        alt: "Captura de Repar-Ando 1",
        width: 1365,
        height: 628,
      },
      {
        src: "/projects/reparando/reparando-02.jpg",
        alt: "Captura de Repar-Ando 2",
        width: 1350,
        height: 633,
      },
      {
        src: "/projects/reparando/reparando-03.jpg",
        alt: "Captura de Repar-Ando 3",
        width: 1365,
        height: 629,
      },
    ],
  },
];

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  stargazers_count: number;
  language?: string | null;
  topics?: string[];
  fork?: boolean;
};

async function fetchGitHubProjects(): Promise<Repo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return [];

    const repos = (await response.json()) as Repo[];
    return repos.filter((repo) => !repo.fork && !EXCLUDED_REPOS.has(repo.name));
  } catch (error) {
    console.error("Error al obtener proyectos de GitHub:", error);
    return [];
  }
}

export default async function Home() {
  const projects = await fetchGitHubProjects();

  return (
    <>
      <Navbar />

      <main className="px-6 pt-24 pb-24 text-foreground">
        {/* HERO */}
        <section
          id="inicio"
          className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6"
        >
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-muted mb-6">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Hola, soy Nahuel Whittall
              <br />
              <span className="text-accent">Desarrollador Web</span>
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
              Construyo sitios modernos, rapidos y funcionales usando tecnologias
              como HTML, CSS, JavaScript, React y Next.js.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#proyectos"
                className="px-6 py-3 rounded-full bg-accent text-white font-medium shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 transition"
              >
                Ver mis proyectos
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 rounded-full border border-border/70 bg-surface text-foreground font-medium hover:-translate-y-0.5 hover:shadow-md transition"
              >
                Contactarme
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE MI */}
        <section id="sobre-mi" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center bg-surface border border-border/60 rounded-3xl p-10 shadow-[var(--shadow)]">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sobre mi</h2>

            <p className="text-lg text-muted leading-relaxed">
              Soy un Desarrollador Web en formacion, con experiencia trabajando
              en entornos tecnicos y orientado a la resolucion de problemas.
              <br />
              <br />
              Actualmente continuo ampliando mis conocimientos en HTML, CSS,
              JavaScript, React y Next.js.
            </p>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10">
              Habilidades
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Git / GitHub",
                "SQL",
                "Python",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-6 bg-surface border border-border/60 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition text-center"
                >
                  <p className="text-lg font-semibold text-foreground">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Proyectos</h2>

            <FeaturedProjects
              projects={FEATURED_PROJECTS}
              basePath={BASE_PATH}
            />

            <div className="mb-8 text-left">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-muted">
                Repos publicos
              </p>
              <h3 className="text-2xl font-semibold text-foreground">
                Otros proyectos y demos
              </h3>
            </div>

            {projects.length === 0 ? (
              <div className="bg-surface border border-border/60 shadow-[var(--shadow)] rounded-2xl p-8 max-w-xl mx-auto text-center">
                <p className="text-muted mb-4">
                  No pude cargar los proyectos desde GitHub en este momento.
                </p>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Ver perfil en GitHub
                </a>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="relative bg-surface border border-border/60 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-[var(--shadow)] transition h-full"
                  >
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${project.name} en GitHub`}
                      className="absolute inset-0 z-0"
                    />
                    <div className="h-40 bg-gradient-to-br from-accent/10 via-surface-muted to-surface flex items-center justify-center">
                      <p className="text-accent font-semibold">{project.name}</p>
                    </div>
                    <div className="relative z-10 p-6 text-left flex flex-col h-full pointer-events-none">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {project.name}
                        </h3>
                        <span className="text-sm text-muted">
                          ⭐ {project.stargazers_count}
                        </span>
                      </div>
                      <p className="text-muted mb-4">
                        {project.description || "Sin descripcion por ahora."}
                      </p>

                      <div className="flex flex-wrap gap-2 text-sm text-muted mb-4">
                        {project.language && (
                          <span className="px-3 py-1 bg-surface-muted border border-border/60 rounded-full">
                            {project.language}
                          </span>
                        )}
                        {project.topics?.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-surface-muted text-accent border border-border/60 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex gap-3">
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-accent hover:underline pointer-events-auto"
                        >
                          Ver en GitHub
                        </a>

                        {project.homepage && (
                          <a
                            href={project.homepage}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted hover:text-foreground hover:underline pointer-events-auto"
                          >
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
