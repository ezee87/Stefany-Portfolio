import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Proceso.module.css'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Entiendo tu proyecto',
    body: 'Reviso planos, referencias, necesidades, estilo buscado y nivel de detalle esperado.',
  },
  {
    num: '02',
    title: 'Desarrollo la propuesta',
    body: 'Trabajo la distribución, materialidad, atmósfera, iluminación y modelado del espacio.',
  },
  {
    num: '03',
    title: 'Creo las visualizaciones',
    body: 'Genero renders que permitan ver el proyecto con una lectura clara y profesional.',
  },
  {
    num: '04',
    title: 'Ajustamos detalles',
    body: 'Se revisan observaciones y se aplican correcciones para llegar a una entrega final cuidada.',
  },
]

export default function Proceso() {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  useGSAP(() => {
    // Header
    gsap.from('.proceso-header > *', {
      opacity: 0,
      y: 24,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.proceso-header',
        start: 'top 80%',
      },
    })

    // Steps with ScrollTrigger activation
    const stepEls = sectionRef.current.querySelectorAll('.proceso-step')
    stepEls.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })

      ScrollTrigger.create({
        trigger: el,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => setActiveStep(i),
        onEnterBack: () => setActiveStep(i),
      })
    })

    // Image reveal
    gsap.from('.proceso-img', {
      clipPath: 'inset(0% 100% 0% 0%)',
      duration: 1.1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.proceso-img',
        start: 'top 80%',
      },
    })

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="proceso" className={styles.section} aria-label="Proceso de trabajo">
      <div className={`container ${styles.inner}`}>
        {/* Left: text content */}
        <div className={styles.leftCol}>
          <div className={`${styles.header} proceso-header`}>
            <span className="section-label">Metodología</span>
            <h2 className={styles.title}>Un proceso simple para avanzar con claridad</h2>
            <p className={styles.intro}>
              Desde la primera idea hasta la entrega final, el proceso se organiza para que
              cada decisión sea fácil de revisar y cada avance tenga una dirección clara.
            </p>
          </div>

          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <li
                key={step.num}
                className={`${styles.step} proceso-step ${activeStep === i ? styles.stepActive : ''}`}
              >
                <span className={styles.stepNum}>{step.num}</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: sticky image */}
        <div className={styles.rightCol}>
          <div className={`${styles.imgWrapper} proceso-img`}>
            <img
              src="/images/metodologia.png"
              alt="Proceso de trabajo de arquitectura e interiorismo"
              className={styles.img}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
