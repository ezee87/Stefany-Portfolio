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
import Contacto from "./components/Contacto.jsx"
import Footer from "./components/Footer.jsx";
import UpToContenido from "./components/UpToContenido.jsx";

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

  const renders = Array.from({ length: 20 }, (_, i) => `/images/render${(i % 6) + 1}.jpg`);

  const diagramas = [
    { src: "/images/diagrama1.jpg" },
    { src: "/images/diagrama2.jpg" },
    { src: "/images/diagrama3.jpg" },
    { src: "/images/diagrama4.jpg" },
    { src: "/images/diagrama5.jpg" },
  ];

  const proyectos = [
    {
      id: 1,
      title: "Proyecto 1",
      images: ["/images/proyecto1-1.jpg", "/images/proyecto1-2.jpg"],
      description: "Descripción detallada del Proyecto 1.",
    },
    {
      id: 2,
      title: "Proyecto 2",
      images: ["/images/proyecto2-1.jpg", "/images/proyecto2-2.jpg"],
      description: "Descripción detallada del Proyecto 2.",
    },
    {
      id: 3,
      title: "Proyecto 3",
      images: ["/images/proyecto3-1.jpg", "/images/proyecto3-2.jpg"],
      description: "Descripción detallada del Proyecto 3.",
    },
    {
      id: 4,
      title: "Proyecto 4",
      images: ["/images/proyecto4-1.jpg", "/images/proyecto4-2.jpg"],
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

      <RendersGallery renders={renders} onImageClick={(img) => setSelectedImage(img)} />

      <DiagramasGallery diagramas={diagramas} onImageClick={(img) => setSelectedImage(img)} />

      {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

 <Contacto />
      <Footer />
    </div>
  );
}
