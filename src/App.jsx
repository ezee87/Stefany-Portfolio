import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

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

// 🔥 Importa automáticamente todos los renders
const rendersModules = import.meta.glob("./assets/renders/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const renders = Object.values(rendersModules);

// 🔥 Importa automáticamente todos los diagramas
const diagramasModules = import.meta.glob("./assets/diagramas/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const diagramas = Object.values(diagramasModules).map((src) => ({ src }));

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
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
    {
      id: 1,
      title: "CD Clinica Dental, en Ciudad de Tarija.",
      images: ["/images/proyecto1-1.jpg", "/images/proyecto1-2.jpg", "/images/proyecto1-3.jpg", "/images/proyecto1-4.jpg"],
      description: "Descripción detallada del Proyecto 1.",
    },
    {
      id: 2,
      title: "DP Departamento en Santa Cruz de la Sierra.",
      images: ["/images/proyecto2-1.jpg", "/images/proyecto2-2.jpg", "/images/proyecto2-3.jpg", "/images/proyecto2-4.jpg"],
      description: "Descripción detallada del Proyecto 2.",
    },
    {
      id: 3,
      title: "SPA SS: Remodelación y diseño interior, en Ciudad de Tarija.",
      images: ["/images/proyecto3-1.jpg", "/images/proyecto3-2.jpg","/images/proyecto3-3.jpg", "/images/proyecto3-4.jpg"],
      description: "Descripción detallada del Proyecto 3.",
    },
    {
      id: 4,
      title: "Museo del Singani para la Comunidad de Yesera Sud.",
      images: ["/images/proyecto4-1.jpg", "/images/proyecto4-2.jpg", "/images/proyecto4-3.jpg", "/images/proyecto4-4.jpg"],
      description: "Descripción detallada del Proyecto 4.",
    },
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

  return (
    <div className="font-sans bg-[#f5f1e8] text-gray-900 scroll-smooth relative">
      <UpToContenido visible={showUpToContenido} />

      <Home />

      <Contenido items={menuItems} />

      <SobreMi />

      <Proyectos proyectos={proyectos} onOpenProject={(p) => setSelectedProject(p)} />

      {/* Galería de renders */}
      <RendersGallery
        renders={renders}
        onImageClick={(img) => setSelectedImage(img)}
        mobileRows={2} // fuerza siempre 2 filas en mobile
      />

      {/* Galería de diagramas */}
      <DiagramasGallery diagramas={diagramas} onImageClick={(img) => setSelectedImage(img)} />

      {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      <Contacto />
      <Footer />
    </div>
  );
}
