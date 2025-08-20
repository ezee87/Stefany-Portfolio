export default function Contacto() {
  return (
  <section
      id="contacto"
      className="px-6 md:px-10 lg:px-20 py-32 flex flex-col items-center bg-[#f5f1e8]"
    >
        <h2 className="text-3xl font-light mb-6">Contacto</h2>
        <p className="mb-6 text-center max-w-xl text-sm">
          Si deseas ponerte en contacto conmigo, puedes solicitar mis datos personales o referencias por privado, o enviarme un mensaje directo:
        </p>
        <form className="w-full max-w-lg space-y-4">
          <input type="text" placeholder="Tu nombre" className="w-full p-3 border rounded-lg text-sm" />
          <input type="email" placeholder="Tu correo" className="w-full p-3 border rounded-lg text-sm" />
          <textarea placeholder="Tu mensaje" rows="5" className="w-full p-3 border rounded-lg text-sm" />
          <button type="submit" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm">
            Enviar
          </button>
        </form>
      </section>
  );
}
