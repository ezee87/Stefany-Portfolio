import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { NAV_LINKS, WORKANA_URL } from '../../constants'
import styles from './Navbar.module.css'

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Entrance animation
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -24,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.6,
    })
  }, { scope: navRef })

  const handleNavClick = (href) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Navegación principal"
    >
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.logoMain}>Stefany Aguiar</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Links de navegación">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.label}
                className={styles.navLink}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <a
          href={WORKANA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          Contratar por Workana
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Menú mobile">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.label}
                className={styles.mobileLink}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            )
          )}
          <a
            href={WORKANA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.mobileLink} ${styles.mobileCta}`}
          >
            Contratar por Workana
          </a>
        </nav>
      </div>
    </header>
  )
}
