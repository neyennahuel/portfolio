import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
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

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="bg-white shadow rounded-xl overflow-hidden hover:scale-[1.02] transition"
                >
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Imagen del proyecto</p>
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold mb-2">
                      Proyecto {num}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Una breve descripción del proyecto que crearás en el futuro.
                    </p>
                    <button className="text-blue-600 hover:underline">
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
