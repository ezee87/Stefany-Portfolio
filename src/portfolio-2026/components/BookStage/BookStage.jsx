import { useMemo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TechnicalFrame from '../TechnicalFrame/TechnicalFrame'
import { coverContent, introContent, nextProjectTeaser } from '../../data/content'
import styles from './BookStage.module.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const MOBILE_QUERY = '(max-width: 700px)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export default function BookStage() {
  const wrapperRef = useRef(null)
  const stageRef = useRef(null)

  const coverRef = useRef(null)
  const coverSheetRef = useRef(null)
  const coverShadeRef = useRef(null)
  const coverLightRef = useRef(null)
  const scrollHintRef = useRef(null)

  const spreadRef = useRef(null)
  const spreadSheetRef = useRef(null)
  const spreadShadeRef = useRef(null)
  const spreadLightRef = useRef(null)
  const introLabelRef = useRef(null)
  const introTitleRef = useRef(null)
  const introTextRef = useRef(null)
  const axesListRef = useRef(null)
  const imageGrowRef = useRef(null)
  const imageVeilRef = useRef(null)
  const paperLayerRef = useRef(null)

  const teaserRef = useRef(null)
  const teaserInnerRef = useRef(null)
  const teaserImageWrapRef = useRef(null)
  const teaserScrimRef = useRef(null)
  const teaserTextRef = useRef(null)
  const teaserDetailsRef = useRef(null)

  const foldShadowRef = useRef(null)

  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION_QUERY).matches,
    [],
  )

  useGSAP(() => {
    const axesItems = axesListRef.current ? gsap.utils.toArray(axesListRef.current.children) : []
    const titleLines = introTitleRef.current
      ? gsap.utils.toArray(introTitleRef.current.querySelectorAll(`.${styles.titleLine}`))
      : []
    const detailItems = teaserDetailsRef.current ? gsap.utils.toArray(teaserDetailsRef.current.children) : []

    const setStaticRevealedState = () => {
      gsap.set([coverRef.current, spreadRef.current, teaserRef.current], { autoAlpha: 1 })
      gsap.set([coverSheetRef.current, spreadSheetRef.current], { rotateX: 0, rotateY: 0 })
      gsap.set([coverShadeRef.current, coverLightRef.current, spreadShadeRef.current, spreadLightRef.current], { opacity: 0 })
      gsap.set(foldShadowRef.current, { opacity: 0.16 })
      gsap.set(scrollHintRef.current, { autoAlpha: 1 })
      gsap.set([introLabelRef.current, introTextRef.current, ...axesItems], { autoAlpha: 1, y: 0, clearProps: 'transform' })
      gsap.set(titleLines, { yPercent: 0 })
      gsap.set(paperLayerRef.current, { autoAlpha: 0 })
      gsap.set(imageVeilRef.current, { opacity: 0 })
      gsap.set(imageGrowRef.current, { scale: 1 })
      gsap.set(teaserImageWrapRef.current, { clipPath: 'none' })
      gsap.set(teaserScrimRef.current, { opacity: 0 })
      gsap.set(detailItems, { autoAlpha: 1, y: 0 })
      gsap.set(teaserInnerRef.current, { rotateX: 0, rotateY: 0 })
    }

    // Fases compartidas (escala 0–100):
    // 0–6 portada en reposo · 6–40 hoja de portada gira · 40–46 portada se retira
    // 44–58 contenido de presentación · 56–70 calco + render · 70–76 reposo
    // 76–92 hoja de presentación gira · 92–100 teaser se expande.
    const buildScene = ({ isMobile }) => {
      const turnProp = isMobile ? 'rotateX' : 'rotateY'
      const openTo = isMobile ? 172 : -176
      const teaserClipHidden = isMobile ? 'inset(50% 0% 0% 0%)' : 'inset(0% 0% 0% 50%)'
      const scrollVh = isMobile ? 340 : 400

      // Estados iniciales explícitos.
      gsap.set([coverShadeRef.current, coverLightRef.current, spreadShadeRef.current, spreadLightRef.current], { opacity: 0 })
      gsap.set(foldShadowRef.current, { opacity: 0.16 })
      gsap.set(coverSheetRef.current, { [turnProp]: 0 })
      gsap.set(spreadSheetRef.current, { [turnProp]: 0 })
      gsap.set(introLabelRef.current, { autoAlpha: 0, y: 14 })
      gsap.set(titleLines, { yPercent: 112 })
      gsap.set(introTextRef.current, { autoAlpha: 0, y: 18 })
      gsap.set(axesItems, { autoAlpha: 0, y: 14 })
      gsap.set(paperLayerRef.current, { autoAlpha: 1, xPercent: 0, yPercent: 0, rotate: 0 })
      gsap.set(imageVeilRef.current, { opacity: 0.55 })
      gsap.set(imageGrowRef.current, { scale: 1 })
      gsap.set(teaserImageWrapRef.current, { clipPath: teaserClipHidden })
      gsap.set(teaserScrimRef.current, { opacity: 0 })
      gsap.set(teaserRef.current, { '--teaser-ink': '#211F1C', '--teaser-ink-soft': '#69635C' })
      gsap.set(detailItems, { autoAlpha: 0, y: 12 })
      gsap.set(teaserInnerRef.current, { [turnProp]: 0 })

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: `+=${scrollVh}%`,
          scrub: 1,
          pin: stageRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // ── FASE A (0–6): portada visible y en reposo.
      tl.to({}, { duration: 6 }, 0)
      tl.to(scrollHintRef.current, { autoAlpha: 0, duration: 3, ease: 'power1.out' }, 4)

      // ── FASE B (6–40): la hoja derecha se levanta desde el pliegue.
      // Sombra en el pliegue, banda de luz en la hoja y oscurecimiento progresivo.
      tl.to(coverSheetRef.current, { [turnProp]: openTo, duration: 34, ease: 'power1.inOut' }, 6)
      tl.to(coverShadeRef.current, { opacity: 0.42, duration: 15, ease: 'power1.in' }, 6)
        .to(coverShadeRef.current, { opacity: 0, duration: 15, ease: 'power1.out' }, 25)
      tl.to(coverLightRef.current, { opacity: 0.55, duration: 15, ease: 'power1.in' }, 6)
        .to(coverLightRef.current, { opacity: 0, duration: 15, ease: 'power1.out' }, 25)
      tl.to(foldShadowRef.current, { opacity: 0.5, duration: 14, ease: 'power1.in' }, 6)
        .to(foldShadowRef.current, { opacity: 0.16, duration: 14, ease: 'power1.out' }, 26)

      // ── FASE C (40–46): la portada girada y su página estática se retiran juntas.
      tl.to(coverRef.current, { autoAlpha: 0, duration: 6, ease: 'power1.inOut' }, 40)
        .set(coverRef.current, { zIndex: 1 }, 46)

      // ── FASE D (44–58): presentación entra secuenciada (etiqueta, título por
      // líneas enmascaradas, texto, ejes).
      tl.to(introLabelRef.current, { autoAlpha: 1, y: 0, duration: 4, ease: 'power2.out' }, 44)
      tl.to(titleLines, { yPercent: 0, duration: 8, stagger: 1.6, ease: 'power3.out' }, 45)
      tl.to(introTextRef.current, { autoAlpha: 1, y: 0, duration: 5, ease: 'power2.out' }, 49)
      if (axesItems.length) {
        tl.to(axesItems, { autoAlpha: 1, y: 0, duration: 4, stagger: 1.2, ease: 'power2.out' }, 52)
      }

      // ── FASE E (56–70): el calco se desplaza y revela el render, que gana
      // contraste pleno y crece suavemente.
      tl.to(paperLayerRef.current, {
        xPercent: isMobile ? 40 : 112,
        yPercent: isMobile ? -120 : -30,
        rotate: 8,
        duration: 12,
      }, 56)
        .set(paperLayerRef.current, { autoAlpha: 0 }, 68)
      tl.to(imageVeilRef.current, { opacity: 0, duration: 12 }, 56)
      tl.to(imageGrowRef.current, { scale: 1.06, duration: 14, ease: 'power1.inOut' }, 58)

      // ── FASE F (70–76): reposo — presentación completa, render revelado.
      tl.to({}, { duration: 6 }, 70)

      // ── FASE G (76–92): la hoja de presentación gira y descubre el teaser.
      tl.to(spreadSheetRef.current, { [turnProp]: openTo, duration: 16, ease: 'power1.inOut' }, 76)
      tl.to(spreadShadeRef.current, { opacity: 0.42, duration: 7, ease: 'power1.in' }, 76)
        .to(spreadShadeRef.current, { opacity: 0, duration: 7, ease: 'power1.out' }, 85)
      tl.to(spreadLightRef.current, { opacity: 0.55, duration: 7, ease: 'power1.in' }, 76)
        .to(spreadLightRef.current, { opacity: 0, duration: 7, ease: 'power1.out' }, 85)
      tl.to(foldShadowRef.current, { opacity: 0.5, duration: 7, ease: 'power1.in' }, 76)
        .to(foldShadowRef.current, { opacity: 0.16, duration: 7, ease: 'power1.out' }, 85)
      tl.to(spreadRef.current, { autoAlpha: 0, duration: 4, ease: 'power1.inOut' }, 88)
        .set(spreadRef.current, { zIndex: 1 }, 92)

      // ── FASE H (92–100): el render de Spa se expande a casi toda la pantalla,
      // el texto pasa a modo editorial superpuesto y aparecen detalles técnicos.
      tl.to(teaserImageWrapRef.current, { clipPath: 'inset(0% 0% 0% 0%)', duration: 7, ease: 'power2.inOut' }, 92)
      tl.to(teaserScrimRef.current, { opacity: 1, duration: 6, ease: 'power1.inOut' }, 93)
      tl.to(teaserRef.current, { '--teaser-ink': '#F7F3EB', '--teaser-ink-soft': 'rgba(247,243,235,0.72)', duration: 6 }, 93)
      if (detailItems.length) {
        tl.to(detailItems, { autoAlpha: 1, y: 0, duration: 3, stagger: 0.8, ease: 'power2.out' }, 95)
      }
      // Sugerencia de la hoja siguiente: el conjunto se levanta apenas al final.
      tl.to(teaserInnerRef.current, { [turnProp]: isMobile ? 3 : -3, duration: 3, ease: 'power1.in' }, 97)

      return tl
    }

    const mm = gsap.matchMedia()

    mm.add(
      {
        isReduced: REDUCED_MOTION_QUERY,
        isMobile: `(prefers-reduced-motion: no-preference) and ${MOBILE_QUERY}`,
        isDesktop: `(prefers-reduced-motion: no-preference) and (min-width: 701px)`,
      },
      (context) => {
        const { isReduced, isMobile } = context.conditions

        if (isReduced) {
          setStaticRevealedState()
          return undefined
        }

        gsap.fromTo(
          coverRef.current,
          { autoAlpha: 0.85 },
          { autoAlpha: 1, duration: 1.1, ease: 'power2.out' },
        )

        const tl = buildScene({ isMobile })

        // Solo dev: permite pausar el scrub y posicionar la timeline para validación visual.
        if (import.meta.env.DEV) window.__bookTimeline = tl

        return () => {
          tl.scrollTrigger?.kill()
          tl.kill()
        }
      },
    )

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh())
    }

    return () => mm.revert()
  }, { scope: wrapperRef, dependencies: [] })

  const refreshOnLoad = () => ScrollTrigger.refresh()

  return (
    <section
      ref={wrapperRef}
      className={styles.stageWrapper}
      data-motion={prefersReducedMotion ? 'reduced' : 'full'}
      aria-label="Portada y apertura del portfolio interactivo"
    >
      <div ref={stageRef} className={styles.stage}>
        <div className={styles.paper}>
          {/* Capa inferior — teaser Spa Wellness */}
          <div ref={teaserRef} className={`${styles.layer} ${styles.teaserLayer}`}>
            <div ref={teaserInnerRef} className={styles.teaserInner}>
              <div ref={teaserImageWrapRef} className={styles.teaserImageWrap}>
                <img
                  src={nextProjectTeaser.image.src}
                  alt={nextProjectTeaser.image.alt}
                  loading="lazy"
                  onLoad={refreshOnLoad}
                />
              </div>
              <div ref={teaserScrimRef} className={styles.teaserScrim} aria-hidden="true" />
              <div className={styles.teaserIndex} aria-hidden="true">
                {nextProjectTeaser.indexMarks.map((mark) => (
                  <span
                    key={mark}
                    className={mark === nextProjectTeaser.index ? styles.teaserIndexActive : undefined}
                  >
                    {mark}
                  </span>
                ))}
              </div>
              <div ref={teaserTextRef} className={styles.teaserText}>
                <span className={styles.teaserLabel}>{nextProjectTeaser.label}</span>
                <h3 className={styles.teaserTitle}>{nextProjectTeaser.title}</h3>
                <p className={styles.teaserCategory}>{nextProjectTeaser.category}</p>
              </div>
              <div ref={teaserDetailsRef} className={styles.teaserDetails}>
                {nextProjectTeaser.details.map((detail) => (
                  <span key={detail} className={styles.teaserDetail}>{detail}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Capa media — presentación */}
          <div ref={spreadRef} className={`${styles.layer} ${styles.spreadLayer}`}>
            <div className={`${styles.pageHalf} ${styles.pageLeft}`}>
              <TechnicalFrame
                pageLabel={introContent.pageLabel}
                pageRef={introContent.pageRef}
                pageCount={introContent.pageCount}
              />

              <span ref={introLabelRef} className={styles.axesLabel}>Presentación</span>
              <h2 ref={introTitleRef} className={styles.introTitle}>
                {introContent.titleLines.map((line) => (
                  <span key={line} className={styles.titleLineMask}>
                    <span className={styles.titleLine}>{line}</span>
                  </span>
                ))}
              </h2>
              <p ref={introTextRef} className={styles.introText}>{introContent.text}</p>

              <ul ref={axesListRef} className={styles.axesList}>
                {introContent.axes.map((axis, i) => (
                  <li key={axis}>
                    <span className={styles.axesIndex}>{String(i + 1).padStart(2, '0')}</span>
                    {axis}
                  </li>
                ))}
              </ul>
            </div>

            <div ref={spreadSheetRef} className={styles.sheet}>
              <div className={`${styles.sheetFace} ${styles.sheetFront}`}>
                <div ref={imageGrowRef} className={styles.imageFrame}>
                  <img
                    src={introContent.image.src}
                    alt={introContent.image.alt}
                    className={styles.introImage}
                    loading="lazy"
                    onLoad={refreshOnLoad}
                  />
                  <div ref={imageVeilRef} className={styles.imageVeil} aria-hidden="true" />
                  <div ref={paperLayerRef} className={styles.paperLayer} aria-hidden="true">
                    <span className={styles.paperTag}>Capa — calco</span>
                    <span className={`${styles.paperGridline} ${styles.glH}`} />
                    <span className={`${styles.paperGridline} ${styles.glV1}`} />
                    <span className={`${styles.paperGridline} ${styles.glV2}`} />
                  </div>
                </div>
                <div ref={spreadShadeRef} className={styles.sheetShade} aria-hidden="true" />
                <div ref={spreadLightRef} className={styles.sheetLight} aria-hidden="true" />
              </div>
              <div className={`${styles.sheetFace} ${styles.sheetBack}`} aria-hidden="true">
                <span className={`${styles.paperGridline} ${styles.glH}`} />
                <span className={`${styles.paperGridline} ${styles.glV1}`} />
                <span className={`${styles.paperGridline} ${styles.glV2}`} />
              </div>
            </div>
          </div>

          {/* Capa superior — portada */}
          <div ref={coverRef} className={`${styles.layer} ${styles.coverLayer}`}>
            <div className={`${styles.pageHalf} ${styles.pageLeft}`}>
              <TechnicalFrame
                pageLabel={coverContent.pageLabel}
                pageRef={coverContent.pageRef}
                pageCount={coverContent.pageCount}
              />

              <h1 className={styles.coverTitle}>
                {coverContent.name.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className={styles.coverDescriptor}>{coverContent.descriptor}</p>
              <p className={styles.coverEdition}>
                <span className={styles.coverEditionBar} aria-hidden="true" />
                {coverContent.edition}
              </p>

              <div ref={scrollHintRef} className={styles.scrollHint}>
                <span>{coverContent.scrollHint}</span>
                <span className={styles.scrollArrow} aria-hidden="true" />
              </div>
            </div>

            <div ref={coverSheetRef} className={styles.sheet}>
              <div className={`${styles.sheetFace} ${styles.sheetFront}`}>
                <TechnicalFrame pageRef="REV. 2026.01" pageCount="SA / 26" />
                <div className={styles.coverSheetContent}>
                  <div className={styles.arcMask}>
                    <img
                      src={coverContent.image.src}
                      alt={coverContent.image.alt}
                      className={styles.arcImage}
                      loading="eager"
                      fetchpriority="high"
                      onLoad={refreshOnLoad}
                    />
                  </div>
                  <div className={styles.indexRow} aria-hidden="true">
                    {coverContent.indexMarks.map((mark) => (
                      <span key={mark}>{mark}</span>
                    ))}
                  </div>
                </div>
                <div ref={coverShadeRef} className={styles.sheetShade} aria-hidden="true" />
                <div ref={coverLightRef} className={styles.sheetLight} aria-hidden="true" />
              </div>
              <div className={`${styles.sheetFace} ${styles.sheetBack}`} aria-hidden="true">
                <span className={`${styles.paperGridline} ${styles.glH}`} />
                <span className={`${styles.paperGridline} ${styles.glV1}`} />
                <span className={`${styles.paperGridline} ${styles.glV2}`} />
              </div>
            </div>
          </div>

          {/* Pliegue central persistente */}
          <div ref={foldShadowRef} className={styles.foldShadow} aria-hidden="true" />
          <div className={styles.fold} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
