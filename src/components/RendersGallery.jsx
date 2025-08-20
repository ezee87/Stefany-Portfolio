import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";
import ArrowDown from "./ArrowDown.jsx";

export default function RendersGallery({ renders = [], onImageClick = () => {} }) {
  return (
    <section id="mis-renders-fotorealistas-y-post-producción" className="min-h-screen px-6 md:px-10 lg:px-20 py-20 bg-[#f5f1e8]">
      <h2 className="text-3xl font-light mb-12 text-center">Galería de Renders</h2>

      <Swiper
        modules={[Navigation, Grid]}
        spaceBetween={16}
        slidesPerView={2}            // Mobile: 2 slides visibles
        grid={{ rows: 2, fill: "row" }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
          768: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
          1024: { slidesPerView: 4, grid: { rows: 2, fill: "row" } },
        }}
        className="py-4"
      >
        {renders.map((img, idx) => (
          <SwiperSlide key={idx}>
            <button
              onClick={() => onImageClick(img)}
              className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:scale-105 transition duration-300"
            >
              <img
                src={img}
                alt={`Render ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-6">
        <ArrowDown href="#diagramación-y-representación-visual-de-proyectos" dark={false} />
      </div>
    </section>
  );
}
