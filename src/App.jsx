import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Posicionamiento from './components/Posicionamiento/Posicionamiento'
import Proyectos from './components/Proyectos/Proyectos'
import Servicios from './components/Servicios/Servicios'
import Proceso from './components/Proceso/Proceso'
import PorQueConmigo from './components/PorQueConmigo/PorQueConmigo'
import CtaFooter from './components/CtaFooter/CtaFooter'

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function App() {
  // Lenis smooth scroll + GSAP ScrollTrigger integration
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const rafCallback = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    // Recalculate all ScrollTrigger positions after content renders
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
      gsap.ticker.remove(rafCallback)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Posicionamiento />
        <Proyectos />
        <Servicios />
        <Proceso />
        <PorQueConmigo />
        <CtaFooter />
      </main>
    </>
  )
}
