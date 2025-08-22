import ArrowDown from "./ArrowDown.jsx";

export default function Proyectos({ proyectos = [], onOpenProject }) {
  return (
    <section
      id="mis-proyectos"
      className="min-h-screen px-6 md:px-20 py-20 bg-[#1a1a1a] text-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-light mb-12 text-center">Mis Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {proyectos.map((p) => (
          <div key={p.id} className="group relative rounded-xl overflow-hidden shadow-lg">
            <button
              onClick={() => onOpenProject(p)}
              className="w-full h-full block focus:outline-none"
            >
              {/* Imagen con proporción 16:9 */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={`/images/proyecto${p.id}.jpg`}
                  alt={p.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay con título */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="mt-4 text-center font-semibold whitespace-normal break-words max-w-[250px] mx-auto">
                  {p.title}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <ArrowDown href="#mis-renders-fotorealistas-y-post-producción" dark />
      </div>
    </section>
  );
}
