import ArrowDown from "./ArrowDown.jsx";

export default function SobreMi() {
  return (
    <section id="sobre-mí" className="min-h-screen px-6 md:px-20 py-20 bg-[#efe6dc] flex flex-col items-center">
      <h2 className="text-3xl font-light mb-12 text-center">Sobre mí</h2>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1 bg-[#f5f1e8] rounded-2xl p-6 border border-[#ece9e2] flex flex-col items-center">
          <img src="/images/sobre-mi.jpg" alt="Stefany" className="w-full h-72 object-cover rounded-xl" />
          <div className="mt-6 space-y-2 text-sm w-full">
            <div className="flex items-center justify-between">
              <span className="font-medium">Ubicación</span>
              <span className="text-gray-600">Tarija, Bolivia</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Experiencia</span>
              <span className="text-gray-600">+5 años</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Enfoque</span>
              <span className="text-gray-600">Sostenible &amp; Japandi</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Perfil</h3>
            <p className="text-sm text-gray-700">
              Arquitecta con experiencia en diseño y desarrollo de proyectos, destacada por creatividad,
              atención al detalle y compromiso con la arquitectura sostenible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Formación</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Universidad Católica Boliviana "San Pablo"</li>
                <li>Universidad Autónoma Juan Misael Saracho</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#ece9e2] bg-[#faf9f7] p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Competencias &amp; Logros</h3>
              <p className="text-sm">AutoCAD, SketchUp, Revit, Photoshop, Illustrator, V-Ray…</p>
              <p className="text-sm">Diplomas de Honor y nota máxima en Proyecto de Grado.</p>
              <p className="text-sm">Idiomas: Español (Nativo), Inglés (Avanzado)</p>
            </div>
          </div>
        </div>
      </div>

      <ArrowDown href="#mis-proyectos" dark={false} />
    </section>
  );
}
