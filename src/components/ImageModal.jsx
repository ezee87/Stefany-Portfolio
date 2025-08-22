import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ImageModal({ src, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] flex items-center justify-center"
      >
        {/* Botón de cierre siempre visible */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 text-white text-3xl font-bold 
                     focus:outline-none transition-opacity duration-200 
                     opacity-80 hover:opacity-100 hover:bg-black/30 rounded-full p-1"
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Contenedor con zoom */}
        <TransformWrapper
          initialScale={1}
          wheel={{ step: 0.2 }}
          doubleClick={{ step: 1.5 }}
          pinch={{ step: 1.2 }}
        >
          <TransformComponent>
            <img
              src={src}
              alt="Ampliada"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}
