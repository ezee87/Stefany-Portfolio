import { useState, useEffect, useCallback, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styles from './Lightbox.module.css'

export default function Lightbox({ images, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex)
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.out',
    })
  }, { scope: containerRef })

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      ref={containerRef}
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Lightbox de imágenes"
    >
      <div
        className={styles.inner}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose} aria-label="Cerrar lightbox">
          <span>✕</span>
        </button>

        <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Imagen anterior">
          <span>←</span>
        </button>

        <div className={styles.imgContainer}>
          <img
            key={current}
            src={images[current]}
            alt={`Imagen ${current + 1} de ${images.length}`}
            className={styles.img}
          />
        </div>

        <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Imagen siguiente">
          <span>→</span>
        </button>

        <div className={styles.counter} aria-live="polite">
          {current + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}
