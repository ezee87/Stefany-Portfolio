import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './BookStage.module.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const BREAKPOINT = 700

function PageArtwork() {
  return (
    <>
      <span className={styles.innerKicker}>Lámina 01 / Archivo</span>
      <span className={styles.innerNumber} aria-hidden="true">01</span>
      <div className={styles.innerDrawing} aria-hidden="true">
        <span className={styles.planLineOne} />
        <span className={styles.planLineTwo} />
        <span className={styles.planLineThree} />
        <span className={styles.planPoint} />
      </div>
      <span className={styles.innerFolio}>P. 02 / 26</span>
    </>
  )
}

export default function BookStage() {
  const wrapperRef = useRef(null)
  const stageRef = useRef(null)
  const ambientRef = useRef(null)
  const bookRef = useRef(null)
  const coverRef = useRef(null)
  const coverFrontRef = useRef(null)
  const coverBackRef = useRef(null)
  const coverShadeRef = useRef(null)
  const innerPageRef = useRef(null)
  const backCoverRef = useRef(null)
  const pageBlockRef = useRef(null)
  const spineEdgeRef = useRef(null)
  const objectShadowRef = useRef(null)
  const pageViewportRef = useRef(null)
  const pageViewportContentRef = useRef(null)
  const sceneMetaRef = useRef(null)
  const registrationRef = useRef(null)
  const hintRef = useRef(null)
  const progressTrackRef = useRef(null)
  const progressRef = useRef(null)

  useGSAP((context, contextSafe) => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        isMobile: `(max-width: ${BREAKPOINT}px)`,
        isDesktop: `(min-width: ${BREAKPOINT + 1}px)`,
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (mediaContext) => {
        const { isMobile, reduceMotion } = mediaContext.conditions
        const closedScale = isMobile ? 0.9 : 0.86
        const approachScale = isMobile ? 0.96 : 0.94
        const openScale = isMobile ? 0.56 : 0.78
        const openAngle = isMobile ? -132 : -168
        let cleanupPointer = () => {}

        gsap.set(bookRef.current, {
          x: 0,
          xPercent: -closedScale * 50,
          yPercent: -50,
          scale: closedScale,
          rotation: isMobile ? -1.75 : -5.25,
          rotationX: isMobile ? 1.5 : 4,
          rotationY: isMobile ? -1 : -5,
          transformOrigin: 'left center',
        })
        gsap.set(coverRef.current, { rotationY: 0, transformOrigin: 'left center' })
        gsap.set(coverFrontRef.current, { autoAlpha: 1 })
        gsap.set(coverBackRef.current, { autoAlpha: 0 })
        gsap.set(innerPageRef.current, { autoAlpha: 1, x: 0, scale: 1, transformOrigin: 'center center' })
        gsap.set(pageViewportRef.current, { autoAlpha: 0, scale: 1, transformOrigin: 'center center' })
        gsap.set(pageViewportContentRef.current, { autoAlpha: 0 })
        gsap.set(progressRef.current, { scaleX: 0, transformOrigin: 'left center' })

        const timeline = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            id: 'portfolio-cover-opening',
            trigger: wrapperRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: reduceMotion ? 0.15 : 0.75,
            invalidateOnRefresh: true,
          },
        })

        timeline.addLabel('closed', 0)
        timeline.to({}, { duration: 5 }, 'closed')
        timeline.addLabel('approach', 5)
        timeline.to(bookRef.current, {
          xPercent: -approachScale * 50,
          scale: approachScale,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 15,
        }, 'approach')
        timeline.to(objectShadowRef.current, {
          xPercent: 0,
          scaleX: 1.04,
          opacity: 0.8,
          duration: 15,
        }, 'approach')
        timeline.to(hintRef.current, { autoAlpha: 0, duration: 8, ease: 'power1.out' }, 'approach+=1')
        timeline.addLabel('open', 23)

        if (reduceMotion) {
          timeline.to(bookRef.current, { xPercent: isMobile ? -4 : 0, scale: openScale, duration: 32 }, 'open')
          timeline.to(coverRef.current, { xPercent: -96, autoAlpha: 0.22, duration: 32 }, 'open')
        } else {
          timeline.to(bookRef.current, { xPercent: isMobile ? -4 : 0, scale: openScale, duration: 32 }, 'open')
          timeline.to(coverRef.current, {
            rotationY: openAngle,
            duration: 32,
            ease: 'power1.inOut',
          }, 'open')
          timeline.set(coverFrontRef.current, { autoAlpha: 0 }, 'open+=16')
          timeline.set(coverBackRef.current, { autoAlpha: 1 }, 'open+=16')
          timeline.to(coverShadeRef.current, { opacity: 0.44, duration: 12, ease: 'power1.in' }, 'open')
          timeline.to(coverShadeRef.current, { opacity: 0.08, duration: 16, ease: 'power1.out' }, 'open+=12')
        }

        timeline.to(objectShadowRef.current, {
          xPercent: isMobile ? -8 : -50,
          scaleX: isMobile ? 1.32 : 1.82,
          opacity: 0.62,
          duration: 32,
        }, 'open')
        timeline.to(progressRef.current, { scaleX: 1, duration: 55, ease: 'none' }, 0)
        timeline.addLabel('opened', 55)
        timeline.to({}, { duration: 5 }, 'opened')
        timeline.addLabel('handoff', 60)

        if (reduceMotion) {
          timeline.to(bookRef.current, { autoAlpha: 0, duration: 20, ease: 'power1.inOut' }, 'handoff')
          timeline.to(pageViewportRef.current, {
            autoAlpha: 1,
            duration: 20,
            ease: 'power1.inOut',
          }, 'handoff')
          timeline.to(pageViewportContentRef.current, {
            autoAlpha: 1,
            duration: 20,
            ease: 'power1.inOut',
          }, 'handoff')
          timeline.to({}, { duration: 20 }, 'handoff+=20')
        } else {
          const getPageScale = () => {
            const pageWidth = innerPageRef.current.offsetWidth * openScale
            const pageHeight = innerPageRef.current.offsetHeight * openScale
            return Math.max(window.innerWidth / pageWidth, window.innerHeight / pageHeight) * 1.08
          }
          timeline.to([
            coverRef.current,
            backCoverRef.current,
            pageBlockRef.current,
            spineEdgeRef.current,
            objectShadowRef.current,
          ], {
            autoAlpha: 0,
            duration: 7,
            ease: 'power2.inOut',
          }, 'handoff')
          timeline.to([
            sceneMetaRef.current,
            registrationRef.current,
            progressTrackRef.current,
          ], {
            autoAlpha: 0,
            duration: 7,
            ease: 'power1.in',
          }, 'handoff')
          timeline.to(innerPageRef.current, {
            x: () => -innerPageRef.current.offsetWidth / 2,
            duration: 8,
            ease: 'power2.inOut',
          }, 'handoff')
          timeline.to(innerPageRef.current, {
            scale: getPageScale,
            duration: 22,
            ease: 'power3.inOut',
          }, 'handoff+=8')
          timeline.to(pageViewportRef.current, {
            autoAlpha: 1,
            duration: 5,
            ease: 'power2.inOut',
          }, 'handoff+=30')
          timeline.to(innerPageRef.current, {
            autoAlpha: 0,
            duration: 4,
            ease: 'power1.inOut',
          }, 'handoff+=31')
          timeline.to(pageViewportContentRef.current, {
            autoAlpha: 1,
            duration: 5,
            ease: 'power1.inOut',
          }, 'handoff+=35')
          timeline.set(bookRef.current, { autoAlpha: 0 }, 'handoff+=35')
        }

        timeline.addLabel('fullscreen', 100)

        if (!reduceMotion) {
          const moveX = gsap.quickTo(ambientRef.current, 'x', { duration: 0.7, ease: 'power3.out' })
          const moveY = gsap.quickTo(ambientRef.current, 'y', { duration: 0.7, ease: 'power3.out' })
          const tiltX = gsap.quickTo(ambientRef.current, 'rotationX', { duration: 0.9, ease: 'power3.out' })
          const tiltY = gsap.quickTo(ambientRef.current, 'rotationY', { duration: 0.9, ease: 'power3.out' })

          const onPointerMove = contextSafe((event) => {
            const x = event.clientX / window.innerWidth - 0.5
            const y = event.clientY / window.innerHeight - 0.5
            moveX(x * (isMobile ? 2 : 5))
            moveY(y * (isMobile ? 1.5 : 3))
            tiltX(y * -0.7)
            tiltY(x * 0.9)
          })
          const onPointerLeave = contextSafe(() => {
            moveX(0)
            moveY(0)
            tiltX(0)
            tiltY(0)
          })

          stageRef.current.addEventListener('pointermove', onPointerMove, { passive: true })
          stageRef.current.addEventListener('pointerleave', onPointerLeave)

          cleanupPointer = () => {
            stageRef.current?.removeEventListener('pointermove', onPointerMove)
            stageRef.current?.removeEventListener('pointerleave', onPointerLeave)
          }
        }

        if (import.meta.env.DEV) window.__bookTimeline = timeline
        return () => {
          cleanupPointer()
          if (import.meta.env.DEV && window.__bookTimeline === timeline) delete window.__bookTimeline
        }
      },
    )

    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => mm.revert()
  }, { scope: wrapperRef, dependencies: [] })

  return (
    <section ref={wrapperRef} className={styles.stageWrapper} aria-label="Portada y apertura del portfolio interactivo">
      <div ref={stageRef} className={styles.stage}>
        <div className={styles.backgroundGrain} aria-hidden="true" />
        <div ref={sceneMetaRef} className={styles.sceneMeta} aria-hidden="true">
          <span>ARCH. / PORTFOLIO 26</span>
          <span>25°56′13.1″S · 48°00′39.5″W</span>
        </div>
        <div ref={registrationRef} className={styles.registrationMark} aria-hidden="true"><span /></div>

        <div className={styles.sceneClip}>
          <div ref={ambientRef} className={styles.ambientRig}>
            <div ref={bookRef} className={styles.book}>
              <div ref={objectShadowRef} className={styles.objectShadow} aria-hidden="true" />
              <div ref={backCoverRef} className={styles.backCover} aria-hidden="true" />
              <div ref={pageBlockRef} className={styles.pageBlock} aria-hidden="true">
                {Array.from({ length: 6 }, (_, index) => <span key={index} />)}
              </div>

              <article ref={innerPageRef} className={styles.innerPage} aria-label="Primera hoja interior">
                <PageArtwork />
              </article>

              <div ref={coverRef} className={styles.frontCover}>
                <div ref={coverFrontRef} className={`${styles.coverFace} ${styles.coverFront}`}>
                  <div ref={coverShadeRef} className={styles.coverShade} aria-hidden="true" />
                </div>

                <div ref={coverBackRef} className={`${styles.coverFace} ${styles.coverBack}`} aria-hidden="true" />
              </div>

              <div ref={spineEdgeRef} className={styles.spineEdge} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div ref={pageViewportRef} className={styles.pageViewport} aria-label="Página del portfolio en pantalla completa">
          <div ref={pageViewportContentRef} className={styles.pageViewportContent}>
            <PageArtwork />
          </div>
        </div>

        <div ref={hintRef} className={styles.scrollHint} aria-hidden="true">
          <span>Scroll para abrir</span><span className={styles.hintLine} />
        </div>
        <div ref={progressTrackRef} className={styles.progressTrack} aria-hidden="true"><span ref={progressRef} /></div>
      </div>
    </section>
  )
}
