import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  if (!project) return null;

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  // Forzar que el thumbnail activo esté sincronizado desde el inicio
  useEffect(() => {
    setActiveIndex(0);
    goToSlide(0);
  }, [project]);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold z-20"
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Contenedor de imagen principal */}
        <div className="w-full flex-1 flex items-center justify-center">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation  // Flechas automáticas de Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full h-full"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className="max-w-[80%] max-h-[70vh] object-contain mx-auto"
                    />
                  </TransformComponent>
                </TransformWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnails fijos debajo, centrados y scroll horizontal en mobile */}
        {project.images.length > 1 && (
          <div className="w-full overflow-x-auto mt-4 scrollbar-hide">
            <div className="flex gap-2 justify-center">
              {project.images.map((img, i) => (
                <button key={i} onClick={() => goToSlide(i)} className="flex-shrink-0">
                  <img
                    src={img}
                    alt={`Thumb ${i + 1}`}
                    className={`h-16 w-24 object-cover rounded-lg border-2 transition ${
                      i === activeIndex ? "border-white" : "border-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
