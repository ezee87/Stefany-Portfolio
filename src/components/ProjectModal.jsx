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
          <TransformWrapper
            initialScale={1}
            wheel={{ step: 0.2 }}
            doubleClick={{ step: 1.5 }}
            pinch={{ step: 1.2 }}
          >
            <TransformComponent>
              <img
                src={img}
                alt={`${project.title} ${i + 1}`}
                className="object-contain"
                style={{
                  maxWidth: "80%",
                  maxHeight: "70vh",
                }}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        {/* Thumbnails fijos debajo, centrados */}
        {/* Thumbnails fijos debajo, centrados en una sola fila con scroll suave */}
        {project.images.length > 1 && (
          <div className="w-full overflow-x-auto mt-4 scrollbar-hide">
            <div className="flex gap-2 justify-center">
              {project.images.map((img, i) => (
                <button key={i} onClick={() => goToSlide(i)} className="flex-shrink-0">
                  <img
                    src={img}
                    alt={`Thumb ${i + 1}`}
                    className={`h-16 w-24 object-cover rounded-lg border-2 transition ${i === activeIndex ? "border-white" : "border-transparent"
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
