import { useState, useRef, useCallback, useLayoutEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../../data/projects'
import Lightbox from './Lightbox'
import styles from './Proyectos.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Proyectos() {
  const sectionRef = useRef(null)
  const previewRef = useRef(null)
  const infoRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const pendingAnimIn = useRef(false)

  const openLightbox = useCallback((images, index) => setLightbox({ images, index }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  // Section entrance animations
  useGSAP(() => {
    gsap.from('.proyectos-header', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.proyectos-header', start: 'top 80%' },
    })
    gsap.from('.proyecto-list-item', {
      opacity: 0,
      x: -20,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.proyectos-list', start: 'top 78%' },
    })
    gsap.from('.proyectos-preview', {
      opacity: 0,
      x: 20,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.proyectos-preview', start: 'top 78%' },
    })
  }, { scope: sectionRef })

  // Animate preview panel + info in after activeIndex state change commits to DOM
  useLayoutEffect(() => {
    if (!pendingAnimIn.current) return
    pendingAnimIn.current = false
    const targets = [previewRef.current, infoRef.current].filter(Boolean)
    gsap.fromTo(targets, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
  }, [activeIndex])

  const handleSelect = (index) => {
    const isMobile = window.matchMedia('(max-width: 900px)').matches
    if (isMobile) {
      setActiveIndex((prev) => (prev === index ? null : index))
      return
    }
    if (index === activeIndex) return
    // Desktop: fade out → update → fade in
    pendingAnimIn.current = true
    gsap.to([previewRef.current, infoRef.current].filter(Boolean), {
      opacity: 0,
      y: 10,
      duration: 0.15,
      ease: 'power2.in',
      onComplete: () => setActiveIndex(index),
    })
  }

  const active = projects[activeIndex ?? 0]

  return (
    <section ref={sectionRef} id="proyectos" className={styles.section} aria-label="Proyectos destacados">
      <div className={`container ${styles.header} proyectos-header`}>
        <span className="section-label">Trabajo seleccionado</span>
        <h2 className={styles.title}>Proyectos destacados</h2>
        <p className={styles.intro}>
          Una selección de proyectos residenciales, comerciales y visualizaciones 3D
          desarrolladas para comunicar espacios con claridad, atmósfera y detalle.
        </p>
      </div>

      <div className={`container ${styles.showcase}`}>
        {/* Left: list + active project info */}
        <div className={styles.leftCol}>
          <ul className={`${styles.list} proyectos-list`} role="listbox" aria-label="Lista de proyectos">
            {projects.map((project, i) => (
              <li key={project.id} className={styles.listRow}>
                <button
                  className={`${styles.listItem} proyecto-list-item ${activeIndex === i ? styles.listItemActive : ''}`}
                  onClick={() => handleSelect(i)}
                  role="option"
                  aria-selected={activeIndex === i}
                  aria-expanded={activeIndex === i}
                >
                  <span className={styles.listNum}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.listInfo}>
                    <span className={styles.listTitle}>{project.title}</span>
                    <span className={styles.listCat}>{project.category}</span>
                  </div>
                  <span className={styles.listArrow} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {/* Mobile accordion panel */}
                {activeIndex === i && (
                  <div className={styles.accordionContent}>
                    <PreviewMedia project={project} index={i} onOpenLightbox={openLightbox} />
                    <PreviewInfo project={project} index={i} />
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop: active project info below list */}
          {active && (
            <div ref={infoRef} className={styles.activeInfo}>
              <PreviewInfo project={active} index={activeIndex ?? 0} />
            </div>
          )}
        </div>

        {/* Right: image + mini gallery */}
        {active && (
          <div ref={previewRef} className={`${styles.preview} proyectos-preview`} aria-live="polite">
            <PreviewMedia project={active} index={activeIndex ?? 0} onOpenLightbox={openLightbox} />
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}

function PreviewMedia({ project, index, onOpenLightbox }) {
  return (
    <div className={styles.mediaArea}>
      <button
        className={styles.mediaBtn}
        onClick={() => onOpenLightbox(project.gallery, 0)}
        aria-label={`Ver galería de ${project.title}`}
      >
        <div className={styles.mediaWrapper}>
          <img
            src={project.cover}
            alt={`Imagen principal: ${project.title}`}
            className={styles.mediaImg}
            style={{ objectFit: project.mainImageFit || 'cover' }}
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding={index < 2 ? 'sync' : 'async'}
          />
          <div className={styles.mediaOverlay} aria-hidden="true">
            <span className={styles.mediaHint}>Ver galería</span>
          </div>
        </div>
      </button>

      <div className={styles.miniGallery} aria-label="Galería del proyecto">
        {project.gallery.slice(0, 4).map((img, i) => (
          <button
            key={i}
            className={styles.thumbBtn}
            onClick={() => onOpenLightbox(project.gallery, i)}
            aria-label={`Imagen ${i + 1} de ${project.title}`}
          >
            <img
              src={img}
              alt={`Vista ${i + 1} del proyecto ${project.title}`}
              className={styles.thumb}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function PreviewInfo({ project, index }) {
  return (
    <div className={styles.previewInfo}>
      <span className={`section-label ${styles.previewNum}`}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className={styles.previewTitle}>{project.title}</h3>
      <p className={styles.previewCategory}>{project.category}</p>
      <p className={styles.previewDesc}>{project.description}</p>
    </div>
  )
}
