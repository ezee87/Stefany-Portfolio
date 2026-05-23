import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Servicios.module.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Diseño arquitectónico residencial',
    description:
      'Desarrollo de propuestas espaciales para viviendas, distribución, criterios de uso, materialidad y visualización del proyecto.',
    image: '/images/residencial.png',
    alt: 'Render arquitectónico de vivienda residencial con volúmenes de hormigón y luz natural',
  },
  {
    title: 'Diseño interior',
    description:
      'Ambientación, composición, elección de materiales, mobiliario, iluminación y resolución visual de espacios residenciales, clínicos o comerciales.',
    image: '/images/spa-3.png',
    alt: 'Render de spa wellness con iluminación cálida y materiales naturales',
  },
  {
    title: 'Modelado 3D y renders arquitectónicos',
    description:
      'Imágenes profesionales para presentar proyectos, validar decisiones, comunicar ideas o mostrar una propuesta con mayor claridad.',
    image: '/images/modelado.png',
    alt: 'Render fotorrealista arquitectónico con iluminación natural y materialidad detallada',
  },
  {
    title: 'Visualización para espacios comerciales',
    description:
      'Renders e interiorismo para clínicas, espacios wellness y proyectos de atención al cliente que necesitan comunicar confianza, atmósfera y funcionalidad.',
    image: '/images/render6.png',
    alt: 'Render fotorrealista de espacio comercial con iluminación estratégica',
  },
]

export default function Servicios() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // Header
    gsap.from('.servicios-header > *', {
      opacity: 0,
      y: 24,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.servicios-header',
        start: 'top 80%',
      },
    })

    // Cards stagger
    gsap.from('.servicio-card', {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.servicio-card',
        start: 'top 82%',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="servicios" className={styles.section} aria-label="Servicios">
      <div className="container">
        <div className={`${styles.header} servicios-header`}>
          <span className="section-label">Servicios</span>
          <h2 className={styles.title}>Cómo puedo ayudarte</h2>
          <p className={styles.intro}>
            Servicios para convertir ideas, planos o referencias en propuestas espaciales
            claras y visualizaciones profesionales.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.title} className={`${styles.card} servicio-card`}>
              <div className={styles.imgWrapper}>
                <img src={s.image} alt={s.alt} className={styles.img} loading="lazy" />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
