export default function ArrowDown({ href = "#", dark = false }) {
  return (
    <a
      href={href}
      className={`mt-12 inline-flex items-center justify-center h-12 w-12 rounded-full shadow-md transition transform hover:-translate-y-0.5 ${
        dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/5 text-black hover:bg-black/10"
      }`}
      aria-label="Ir a la siguiente sección"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  );
}
