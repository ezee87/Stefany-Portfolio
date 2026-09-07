import BookStage from './components/BookStage/BookStage'
import styles from './Portfolio2026Page.module.css'

// Prototipo funcional: portada, apertura del libro, primera doble página y
// transición de salida hacia el siguiente proyecto. No incluye el resto del portfolio.
export default function Portfolio2026Page() {
  return (
    <main className={styles.page}>
      <BookStage />
    </main>
  )
}
