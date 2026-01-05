import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const GITHUB_USERNAME = "nahuelwhittall";

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
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );

    if (!response.ok) return [];

    const repos = (await response.json()) as Repo[];
    return repos.filter((repo) => !repo.fork);
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

      <main className="px-6 pt-24">

        {/* HERO */}
        <section
          id="inicio"
          className="h-[80vh] flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hola, soy Nahuel —{" "}
            <span className="text-blue-600">Desarrollador Web</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Construyo sitios modernos, rápidos y funcionales usando tecnologías
            como HTML, CSS, JavaScript, React y Next.js.
          </p>

          <div className="flex gap-4">
            <a
              href="#proyectos"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Ver mis proyectos
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-100 transition"
            >
              Contactarme
            </a>
          </div>
        </section>

        {/* SOBRE MI */}
        <section id="sobre-mi" className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Soy un Desarrollador Web en formación, con experiencia trabajando
              en entornos técnicos y orientado a la resolución de problemas.
              <br /><br />
              Actualmente continúo ampliando mis conocimientos en HTML, CSS,
              JavaScript, React y Next.js.
            </p>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Habilidades</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Git / GitHub",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-6 bg-white rounded-xl shadow hover:scale-105 transition text-center"
                >
                  <p className="text-lg font-semibold">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Proyectos</h2>

            {projects.length === 0 ? (
              <div className="bg-white shadow rounded-xl p-8 max-w-xl mx-auto text-center">
                <p className="text-gray-700 mb-4">
                  No pude cargar los proyectos desde GitHub en este momento.
                </p>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Ver perfil en GitHub
                </a>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white shadow rounded-xl overflow-hidden hover:scale-[1.02] transition h-full"
                  >
                    <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <p className="text-blue-700 font-semibold">{project.name}</p>
                    </div>
                    <div className="p-6 text-left flex flex-col h-full">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <span className="text-sm text-gray-500">
                          ⭐ {project.stargazers_count}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {project.description || "Sin descripción por ahora."}
                      </p>

                      <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
                        {project.language && (
                          <span className="px-3 py-1 bg-gray-100 rounded-full">
                            {project.language}
                          </span>
                        )}
                        {project.topics?.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
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
                          className="text-blue-600 hover:underline"
                        >
                          Ver en GitHub
                        </a>

                        {project.homepage && (
                          <a
                            href={project.homepage}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 hover:underline"
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
