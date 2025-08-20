import ArrowDown from "./ArrowDown.jsx";

export default function DiagramasGallery({ diagramas = [], onImageClick = () => { } }) {
    const defaults = [
        { src: "/images/diagrama1.jpg", title: "Museo y Centro Cultural Herencia" },
        { src: "/images/diagrama2.jpg", title: "Museo y Centro Cultural Herencia" },
        { src: "/images/diagrama3.jpg", title: "Memoria descriptiva Reestructuración urbana del barrio" },
        { src: "/images/diagrama4.jpg", title: "Memoria descriptiva Espacio publico" },
        { src: "/images/diagrama5.jpg", title: "Proyecto del Centro Parroquial" },
    ];

    const items = (diagramas.length ? diagramas : defaults).slice(0, 5).map((d, i) => {
        if (typeof d === "string") return { src: d, title: defaults[i].title };
        return { src: d.src || defaults[i].src, title: d.title || defaults[i].title };
    });

    const palette = [
        { bg: "#e9bbbbff", textClass: "text-white" },
        { bg: "#d9b5a8", textClass: "text-gray-900" },
        { bg: "#f8ece8ff", textClass: "text-gray-900" },
        { bg: "#8f5f58", textClass: "text-white" },
        { bg: "#cdb9ad", textClass: "text-gray-900" },
    ];

    return (
        <section
            id="diagramación-y-representación-visual-de-proyectos"
            className="w-full h-screen overflow-hidden bg-[#efe6dc] flex flex-col items-center"
        >
            {/* Desktop grid */}
            <div
                className="hidden md:grid w-full h-full overflow-hidden"
                style={{ gridTemplateColumns: "2fr repeat(5, 1fr)" }}
            >
                {/* Columna del título */}
                <div className="relative flex flex-col justify-start items-center h-full box-border" style={{ paddingTop: "25%" }}>
                    <h2 className="text-3xl font-light text-left max-w-[80%]">
                        Diagramación y <br /> Representación Visual
                    </h2>

                    {/* Flecha en la columna del título */}
                    <div className="mt-auto mb-6 flex justify-center w-full">
                        <ArrowDown href="#contacto" dark={false} />
                    </div>
                </div>

                {/* 5 columnas de diagramas */}
                {items.map((d, idx) => {
                    const paletteItem = palette[idx % palette.length];
                    const isImageBottom = idx % 2 === 0;

                    const colorBlock = (
                        <div
                            className="flex items-center justify-center w-full h-full box-border"
                            style={{ backgroundColor: paletteItem.bg }}
                        >
                            <p className={`text-xl font-medium ${paletteItem.textClass} text-center break-words px-2`}>
                                {d.title}
                            </p>
                        </div>
                    );

                    const imageBlock = (
                        <button
                            onClick={() => onImageClick(d.src)}
                            className="w-full h-full focus:outline-none box-border overflow-hidden"
                            aria-label={`Abrir ${d.title}`}
                        >
                            <img
                                src={d.src}
                                alt={d.title}
                                className="w-full h-full object-cover max-w-full hover:scale-105 transition-transform duration-300"
                            />
                        </button>
                    );

                    return (
                        <div key={idx} className="flex flex-col h-full w-full box-border">
                            {isImageBottom ? (
                                <>
                                    <div className="h-2/5">{colorBlock}</div>
                                    <div className="h-3/5 overflow-hidden">{imageBlock}</div>
                                </>
                            ) : (
                                <>
                                    <div className="h-3/5 overflow-hidden">{imageBlock}</div>
                                    <div className="h-2/5">{colorBlock}</div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

         {/* Mobile: stacked */}
<div className="md:hidden w-full h-full overflow-y-auto">
    <h2 className="text-3xl font-light py-6 text-center text-gray-800">
        Diagramación y Representación Visual
    </h2>
    <div className="flex flex-col space-y-4 px-2">
        {items.map((d, idx) => (
            <div key={idx} className="w-full flex flex-col h-auto rounded-2xl overflow-hidden shadow-sm">
                <button
                    onClick={() => onImageClick(d.src)}
                    className="w-full h-64 overflow-hidden focus:outline-none"
                    aria-label={`Abrir ${d.title}`}
                >
                    <img
                        src={d.src}
                        alt={d.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </button>
                <div
                    style={{ backgroundColor: palette[idx % palette.length].bg }}
                    className={`flex items-center justify-center ${palette[idx % palette.length].textClass} px-3 py-2`}
                >
                    <p className="text-sm sm:text-base font-medium text-center break-words">
                        {d.title}
                    </p>
                </div>
            </div>
        ))}
    </div>

   {/* Flecha para mobile */}
<div className="flex justify-center mt-4 pb-6">
    <ArrowDown href="#contacto" dark={false} />
</div>
</div>



        </section>
    );
}
