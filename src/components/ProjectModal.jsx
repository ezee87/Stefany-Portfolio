import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
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
          className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Contenedor de imagen principal */}
        <div className="w-full flex-1 flex items-center justify-center">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full h-full"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    className="object-contain"
                    style={{
                      maxWidth: "80%",   // nunca pasa el 80% del ancho del modal
                      maxHeight: "70vh", // deja espacio suficiente para thumbnails y flechas
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnails fijos debajo, centrados */}
        {project.images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {project.images.map((img, i) => (
              <button key={i} onClick={() => goToSlide(i)}>
                <img
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  className={`h-16 w-24 object-cover rounded-lg border-2 ${
                    i === activeIndex ? "border-white" : "border-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
