import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Posicionamiento.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Posicionamiento() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const pillarsRef = useRef(null)

  useGSAP(() => {
    // Title lines reveal
    const titleLines = titleRef.current.querySelectorAll('span')
    gsap.from(titleLines, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    // Body text
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })

    // Pillar words
    const pillars = pillarsRef.current.querySelectorAll('span')
    gsap.from(pillars, {
      opacity: 0,
      y: 16,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: pillarsRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Propuesta de valor">
      <div className={`container ${styles.inner}`}>
        <h2 ref={titleRef} className={styles.title}>
          <span>Del concepto</span>
          <span className={styles.titleItalic}>al espacio</span>
          <span>visualmente claro</span>
        </h2>

        <p ref={textRef} className={styles.body}>
          Trabajo cada proyecto combinando criterio arquitectónico, sensibilidad estética y
          visualización 3D, para transformar ideas, planos o referencias en imágenes que
          comuniquen mejor el potencial del espacio.
        </p>

        <div ref={pillarsRef} className={styles.pillars}>
          <span>Criterio espacial</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>Materialidad</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>Atmósfera</span>
        </div>
      </div>
    </section>
  )
}
