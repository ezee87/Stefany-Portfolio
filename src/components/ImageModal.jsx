import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageModal({ images = [], initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

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
        {/* Cierre */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 text-white text-3xl font-bold 
                     focus:outline-none transition-opacity duration-200 
                     opacity-80 hover:opacity-100 hover:bg-black/30 rounded-full p-1"
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Flechas */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 transition"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Zoom */}
        <TransformWrapper
          key={currentIndex}
          initialScale={1}
          wheel={{ step: 0.2 }}
          doubleClick={{ step: 1.5 }}
          pinch={{ step: 1.2 }}
        >
          <TransformComponent>
            <img
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}
