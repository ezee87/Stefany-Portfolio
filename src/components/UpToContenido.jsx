export default function UpToContenido({ visible }) {
  if (!visible) return null;
  return (
    <a
      href="#contenido"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full bg-black text-white shadow-lg hover:bg-[#444] transition transform hover:-translate-y-0.5"
      aria-label="Volver a Contenido"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </a>
  );
}
