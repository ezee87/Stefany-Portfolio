import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import { ThemeProvider, useTheme } from "./ThemeContext.jsx";

import Home from "./components/Home.jsx";
import Contenido from "./components/Contenido.jsx";
import SobreMi from "./components/SobreMi.jsx";
import Proyectos from "./components/Proyectos.jsx";
import RendersGallery from "./components/RendersGallery.jsx";
import DiagramasGallery from "./components/DiagramasGallery.jsx";
import ImageModal from "./components/ImageModal.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import UpToContenido from "./components/UpToContenido.jsx";
import { Lightbulb, LampDesk } from "lucide-react";

// Renders automáticos
const rendersModules = import.meta.glob("./assets/renders/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const renders = Object.values(rendersModules);

// Diagramas automáticos
const diagramasModules = import.meta.glob("./assets/diagramas/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const diagramas = Object.values(diagramasModules).map((src) => ({ src }));

function AppContent() {
  const { theme, colors, toggleTheme } = useTheme();

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedImagesArray, setSelectedImagesArray] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showUpToContenido, setShowUpToContenido] = useState(false);

  const menuItems = [
    "Sobre mí",
    "Mis proyectos",
    "Mis renders fotorealistas y post-producción",
    "Diagramación y representación visual de proyectos",
    "Contacto",
  ];

  const proyectos = [
    // ... tu array de proyectos
  ];

  useEffect(() => {
    const onScroll = () => {
      const sec = document.getElementById("contenido");
      if (!sec) return setShowUpToContenido(false);
      const bottom = sec.offsetTop + sec.offsetHeight;
      setShowUpToContenido(window.scrollY > bottom - 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openModalWithArray = (imagesArray, clickedImage) => {
    setSelectedImagesArray(imagesArray);
    const idx = imagesArray.indexOf(clickedImage);
    setSelectedImageIndex(idx >= 0 ? idx : 0);
  };

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }} className="font-sans scroll-smooth relative">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full shadow-md transition"
        style={{ backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.border }}
      >
        {theme === "dark" ? (
          <Lightbulb className="h-6 w-6" />
        ) : (
          <LampDesk className="h-6 w-6" />
        )}
      </button>

      <UpToContenido visible={showUpToContenido} />

      <Home />
      <Contenido items={menuItems} colors={colors} />
      <SobreMi colors={colors} />
      <Proyectos proyectos={proyectos} onOpenProject={(p) => setSelectedProject(p)} colors={colors} />

      <RendersGallery
        renders={renders}
        onImageClick={(img) => openModalWithArray(renders, img)}
        colors={colors}
        mobileRows={2}
      />

      <DiagramasGallery
        diagramas={diagramas}
        onImageClick={(img) => openModalWithArray(diagramas.map(d => d.src), img)}
        colors={colors}
      />

      {selectedImageIndex !== null && (
        <ImageModal
          images={selectedImagesArray}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      <Contacto colors={colors} />
      <Footer colors={colors} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
