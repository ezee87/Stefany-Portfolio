import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './CtaFooter.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function CtaFooter() {
  const ctaRef = useRef(null)
  const imgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax — fromTo keeps the image centered across the scroll range
      // The wrapper extends 20% top/bottom in CSS, so ±10% movement always covers the section
      gsap.fromTo(imgRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      // Title reveal by lines
      const lines = textRef.current.querySelectorAll('span')
      gsap.from(lines, {
        opacity: 0,
        y: 36,
        stagger: 0.13,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 70%',
        },
      })
    }, ctaRef)

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* CTA Section */}
      <section ref={ctaRef} className={styles.cta} aria-label="Llamada a la acción">
        <div ref={imgRef} className={styles.imgWrapper} aria-hidden="true">
          <img
            src="/images/spa-6.png"
            alt="Espacio spa wellness con luz cálida y materiales naturales"
            className={styles.img}
            loading="lazy"
          />
          <div className={styles.overlay} />
        </div>

        <div className={`container ${styles.ctaContent}`}>
          <h2 ref={textRef} className={styles.ctaTitle}>
            <span>¿Tienes un proyecto que</span>
            <span className={styles.ctaTitleItalic}>necesita verse</span>
            <span>con más claridad?</span>
          </h2>

          <p className={styles.ctaText}>
            Puedo ayudarte a transformar tu idea, plano o referencia en una propuesta
            visual profesional, lista para presentar y evaluar.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} aria-label="Pie de página">
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.footerLeft}>
            <p className={styles.footerBrand}>Arquitectura · Interiorismo · Visualización 2D y 3D</p>
            <p className={styles.footerTagline}>
              Disponible para proyectos freelance
            </p>
          </div>

          <nav className={styles.footerNav} aria-label="Links del pie de página">
            <a href="#proyectos" className={styles.footerLink}>Proyectos</a>
            <a href="#servicios" className={styles.footerLink}>Servicios</a>
            <a href="#proceso" className={styles.footerLink}>Proceso</a>
          </nav>
        </div>

        <div className={`container ${styles.footerBottom}`}>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} · Arquitectura & Visualización 3D
          </p>
        </div>
      </footer>
    </>
  )
}
