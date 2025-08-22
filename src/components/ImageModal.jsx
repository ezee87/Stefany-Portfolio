import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ImageModal({ src, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative rounded-lg">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold focus:outline-none transition-opacity duration-200 opacity-80 hover:opacity-100 hover:bg-black/30 rounded-full p-1"
          aria-label="Cerrar"
        >
          ×
        </button>

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
              className="max-w-3xl max-h-[80vh] rounded-lg shadow-2xl"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}
