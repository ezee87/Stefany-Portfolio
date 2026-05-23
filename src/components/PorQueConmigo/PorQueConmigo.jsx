import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './PorQueConmigo.module.css'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    title: 'Criterio arquitectónico',
    body: 'Cada imagen parte de una lectura espacial, no solo de una composición estética.',
  },
  {
    title: 'Estética cuidada',
    body: 'Trabajo con paletas, materiales, iluminación y atmósferas coherentes con cada proyecto.',
  },
  {
    title: 'Claridad visual',
    body: 'El objetivo es que cada render ayude a entender mejor el espacio y tomar decisiones.',
  },
  {
    title: 'Proceso ordenado',
    body: 'Comunicación simple, avances claros y entregas orientadas al resultado final.',
  },
]

export default function PorQueConmigo() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.from('.porque-header > *', {
        opacity: 0,
        y: 28,
        stagger: 0.12,
        duration: 0.85,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.porque-header',
          start: 'top 78%',
        },
      })

      // Image reveal via clip-path
      gsap.from('.porque-img', {
        clipPath: 'inset(0% 100% 0% 0%)',
        duration: 1.1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.porque-img',
          start: 'top 80%',
        },
      })

      // Cards
      gsap.from('.porque-card', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.porque-card',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Por qué trabajar conmigo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.leftCol}>
          <div className={`${styles.header} porque-header`}>
            <span className={`section-label ${styles.sectionLabel}`}>Por qué contratarme</span>
            <h2 className={styles.title}>Diseño con criterio, imagen y detalle</h2>
          </div>

          <div className={styles.cards}>
            {reasons.map((r) => (
              <article key={r.title} className={`${styles.card} porque-card`}>
                <div className={styles.cardAccent} aria-hidden="true" />
                <div>
                  <h3 className={styles.cardTitle}>{r.title}</h3>
                  <p className={styles.cardBody}>{r.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.rightCol}>
          <div
            className="porque-img"
            style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          >
            <img
              src="/images/dise%C3%B1o.png"
              alt="Proyecto de arquitectura e interiores con criterio espacial y est\u00e9tica cuidada"
              className={styles.img}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
