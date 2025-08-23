import ArrowDown from "./ArrowDown.jsx";

export default function RendersGallery({ renders = [], onImageClick = () => {}, colors, mobileRows = 2 }) {
  const columns = Math.ceil(renders.length / mobileRows);

  return (
    <section
      id="mis-renders-fotorealistas-y-post-producción"
      className="px-6 md:px-10 lg:px-20 py-20 min-h-screen flex flex-col"
      style={{ backgroundColor: colors.fondoB, color: colors.text }}
    >
      <h2 className="text-3xl font-light mb-12 text-center">Galería de Renders</h2>

      <div className="flex md:hidden gap-4 overflow-x-auto pb-4">
        {renders.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0"
            style={{ width: "16rem", height: `calc((100vh - 10rem) / ${mobileRows})` }}
          >
            <button
              onClick={() => onImageClick(img)}
              className="w-full h-full overflow-hidden shadow-md hover:scale-105 transition duration-300 rounded-none"
              style={{ borderColor: colors.border }}
            >
              <img
                src={img}
                alt={`Render ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        ))}
      </div>

      <div
        className="hidden md:grid gap-6 flex-1"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridAutoRows: `calc((100vh - 20rem) / 2)`,
        }}
      >
        {renders.map((img, idx) => (
          <div key={idx} className="w-full h-full">
            <button
              onClick={() => onImageClick(img)}
              className="w-full h-full overflow-hidden shadow-md hover:scale-105 transition duration-300 rounded-none"
              style={{ borderColor: colors.border }}
            >
              <img
                src={img}
                alt={`Render ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <ArrowDown href="#diagramación-y-representación-visual-de-proyectos"/>
      </div>
    </section>
  );
}
