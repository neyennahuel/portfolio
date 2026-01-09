import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const GITHUB_USERNAME = "neyennahuel";
const EXCLUDED_REPOS = new Set(["portfolio", "portfolio-pro"]);

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
              <br /><br />
              Actualmente continuo ampliando mis conocimientos en HTML, CSS,
              JavaScript, React y Next.js.
            </p>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10">Habilidades</h2>

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
                        <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
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









