export default function Contenido({ items = [], colors }) {
  return (
    <section
      id="contenido"
      className="relative min-h-screen flex items-center px-6 md:px-10"
      style={{ backgroundColor: colors.fondoB, color: colors.text }}
    >
      <div className="absolute inset-y-0 right-0 w-1/2">
        <img src="/images/contenido-bg.png" alt="Decoración" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 w-full md:w-1/4 ml-0 mr-auto flex flex-col items-end gap-3">
        <h2 className="text-3xl font-light mb-4 self-start">Contenido</h2>

        {items.map((item, index) => (
          <a
            key={index}
            href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
            className="px-5 py-3 shadow-sm transition text-sm font-medium w-[400px] text-right rounded-none"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
          >
            {index + 1}. {item}
          </a>
        ))}
      </div>
    </section>
  );
}
