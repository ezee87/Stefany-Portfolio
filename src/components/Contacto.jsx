export default function Contacto({ colors }) {
  return (
    <section
      id="contacto"
      className="px-6 md:px-20 py-32 flex flex-col items-center"
      style={{ backgroundColor: colors.fondoB, color: colors.text }}
    >
      <h2 className="text-3xl font-light mb-6 text-center">Contacto</h2>

      <p className="mb-6 text-center max-w-xl text-sm" style={{ color: colors.textSecondary }}>
        Si deseas ponerte en contacto conmigo, puedes solicitar mis datos personales o referencias por privado, o enviarme un mensaje directo:
      </p>

      <form className="w-full max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 border rounded-none text-sm"
          style={{ borderColor: colors.border, backgroundColor: colors.inputBg, color: colors.text }}
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full p-3 border rounded-none text-sm"
          style={{ borderColor: colors.border, backgroundColor: colors.inputBg, color: colors.text }}
        />
        <textarea
          placeholder="Tu mensaje"
          rows="5"
          className="w-full p-3 border rounded-none text-sm"
          style={{ borderColor: colors.border, backgroundColor: colors.inputBg, color: colors.text }}
        />
        <button
          type="submit"
          className="px-6 py-3 text-sm font-medium rounded-none transition"
          style={{ backgroundColor: colors.buttonBg, color: colors.buttonText }}
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
