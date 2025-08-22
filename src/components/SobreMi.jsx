import ArrowDown from "./ArrowDown.jsx";

export default function SobreMi() {
  return (
    <section
      id="sobre-mí"
      className="min-h-screen px-6 md:px-20 py-20 bg-[#efe6dc] flex flex-col items-center"
    >
      <h2 className="text-3xl font-light mb-12 text-center">Sobre mí</h2>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna izquierda */}
        <div className="md:col-span-1 bg-[#f5f1e8] rounded-2xl p-6 border border-[#ece9e2] flex flex-col items-center">
          <img
            src="/images/sobre-mi.jpg"
            alt="Stefany"
            className="w-full h-72 object-cover rounded-xl"
          />

   
  
          {/* Enfoques */}
          <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-4 mt-6 shadow-sm w-full">
            <h3 className="font-semibold mb-2 text-sm">Enfoques</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Bienestar humano y confort</li>
              <li>Interiorismo y diseño de espacios</li>
              <li>Sostenibilidad ambiental y energética</li>
              <li>Optimización constructiva y materialidad</li>
            </ul>
          </div>

          {/* Idiomas */}
          <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-4 mt-6 shadow-sm w-full">
            <h3 className="font-semibold mb-2 text-sm">Idiomas</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Español (Nativo)</li>
              <li>Inglés (Avanzado)</li>
            </ul>
          </div>

          {/* Aptitudes */}
          <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-4 mt-4 shadow-sm w-full">
            <h3 className="font-semibold mb-2 text-sm">Aptitudes</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Comunicación efectiva</li>
              <li>Creatividad</li>
              <li>Resolución de problemas</li>
              <li>Liderazgo</li>
              <li>Gestión del tiempo</li>
              <li>Adaptabilidad</li>
              <li>Trabajo en equipo</li>
              <li>Pensamiento crítico</li>
            </ul>
          </div>
        </div>

        {/* Columna derecha (textos principales) */}
        <div className="md:col-span-2 space-y-6">
          {/* Perfil */}
          <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Perfil</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Arquitecta con experiencia en diseño y desarrollo integral de
              proyectos, con énfasis en la optimización espacial, eficiencia
              funcional y sostenibilidad ambiental. La práctica profesional en
              la que me enfoco articula la conceptualización arquitectónica con
              criterios de eficiencia energética, selección de materiales
              responsables y coherencia contextual, integrando procesos de
              modelado tridimensional, representación gráfica y documentación
              técnica. Se especializa en generar soluciones que equilibran
              innovación formal, viabilidad constructiva y desempeño ambiental,
              orientadas a la creación de espacios funcionales, duraderos y
              armónicamente vinculados con su entorno natural y urbano.
            </p>
          </div>

          {/* Formación + Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Formación en Arquitectura</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Universidad Católica Boliviana "San Pablo”, Tarija</li>
                <li>Universidad Autónoma Juan Misael Saracho</li>
                <li>Facultad de Arquitectura y Diseño Gráfico</li>
                <li>Diseño arquitectónico</li>
                <li>Construcción y tecnología</li>
                <li>Urbanismo y planificación territorial</li>
                <li>Historia y teoría de la arquitectura</li>
                <li>Sostenibilidad y eficiencia energética</li>
                <li>Representación gráfica y modelado 3D</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Cursos</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Renderización Avanzada con SketchUp y V-Ray</li>
                <li>Modelado y Gráficos Arquitectónicos en Revit</li>
                <li>Movilidad y Arquitectura Accesible</li>
                <li>Jornada de arquitectura e ingeniería civil</li>
                <li>IA aplicada a la Arquitectura y Urbanismo</li>
              </ul>
            </div>
          </div>

          {/* Competencias + Experiencia + Logros */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Competencias</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>AutoCAD avanzado</li>
                <li>SketchUp avanzado</li>
                <li>Revit intermedio</li>
                <li>Adobe Photoshop / InDesign / Illustrator</li>
                <li>Renderizado fotorrealista</li>
                <li>Diseño arquitectónico</li>
                <li>Presupuestos y cómputos métricos</li>
                <li>Word y Excel</li>
                <li>Diseño de interiores</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Experiencia</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Estudio de Arquitectura Mariana Franco (Arq. Mariana Franco, Tarija). </li>
                <li>Empresa constructora Virsur (Ing. Javier Viracocha, Tarija).</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Logros</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  Diplomas de Honor – mejor promedio de la Carrera de
                  Arquitectura (UCB 2021-2022)
                </li>
                <li>
                  Nota máxima en defensa de Proyecto de Grado (UCB 2023)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ArrowDown href="#mis-proyectos" dark={false} />
    </section>
  );
}
