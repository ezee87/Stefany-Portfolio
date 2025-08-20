import ArrowDown from "./ArrowDown.jsx";

export default function Proyectos({ proyectos = [], onOpenProject }) {
  return (
    <section id="mis-proyectos" className="min-h-screen px-6 md:px-20 py-20 bg-[#1a1a1a] text-white flex flex-col items-center">
      <h2 className="text-3xl font-light mb-12 text-center">Mis Proyectos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {proyectos.map((p) => (
          <div key={p.id} className="flex flex-col">
            <button
              onClick={() => onOpenProject(p)}
              className="relative w-full overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={`/images/proyecto${p.id}.jpg`}
                alt={p.title}
                className="w-full h-48 sm:h-56 md:h-auto object-cover hover:scale-105 transition duration-300"
              />
            </button>
            <span className="mt-4 text-center font-semibold">{p.title}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <ArrowDown href="#mis-renders-fotorealistas-y-post-producción" dark />
      </div>
    </section>
  );
}
