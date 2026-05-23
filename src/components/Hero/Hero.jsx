import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { WORKANA_URL } from '../../constants'
import styles from './Hero.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const imgRef = useRef(null)
  const labelRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const btnsRef = useRef(null)
  const scrollIndicatorRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Cinematic image scale-down entrance
    tl.from(imgRef.current, { scale: 1.08, duration: 1.8, ease: 'power2.out' })
      .from(labelRef.current, { opacity: 0, y: 16, duration: 0.7 }, '-=0.8')
      .from(titleRef.current.querySelectorAll('span'), {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.9,
      }, '-=0.4')
      .from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
      .from(btnsRef.current.children, { opacity: 0, y: 16, stagger: 0.12, duration: 0.7 }, '-=0.3')
      .from(scrollIndicatorRef.current, { opacity: 0, y: -8, duration: 0.6 }, '-=0.2')

    // Parallax on scroll
    gsap.to(imgRef.current, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Content fade out on scroll
    gsap.to([labelRef.current, titleRef.current, subtitleRef.current, btnsRef.current], {
      opacity: 0,
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'center top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: heroRef })

  const scrollToProjects = () => {
    document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Sección principal">
      <div className={styles.imgWrapper} ref={imgRef}>
        <img
          src="/images/hero.png"
          alt="Render arquitectónico de proyecto residencial con materiales naturales y luz cálida"
          className={styles.img}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={`container ${styles.content}`}>
        <span ref={labelRef} className={`section-label ${styles.label}`}>
          Arquitectura · Interiorismo · Visualización 2D y 3D
        </span>

        <h1 ref={titleRef} className={styles.title}>
          <span>Arquitectura, interiores</span>
          <span>y visualización 3D <em className={styles.titleAccent}>para presentar</em></span>
          <span className={styles.titleAccent}>tu proyecto con claridad</span>
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Diseño espacios y desarrollo renders arquitectónicos pensados para que cada idea
          pueda entenderse, evaluarse y presentarse con una imagen profesional.
        </p>

        <div ref={btnsRef} className={styles.btns}>
          <button className={styles.btnPrimary} onClick={scrollToProjects}>
            Ver proyectos
          </button>
          <a
            href={WORKANA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Contratar por Workana
          </a>
        </div>
      </div>

      <div ref={scrollIndicatorRef} className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  )
}
