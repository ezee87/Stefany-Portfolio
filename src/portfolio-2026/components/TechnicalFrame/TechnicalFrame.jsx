import styles from './TechnicalFrame.module.css'

// Marcas técnicas editoriales (esquinas, etiquetas y numeración) reutilizadas
// en la portada y en las páginas del libro. Puramente decorativo.
export default function TechnicalFrame({ pageLabel, pageRef, pageCount, indexMarks, activeIndex, className }) {
  return (
    <div className={`${styles.frame} ${className || ''}`} aria-hidden="true">
      <span className={`${styles.corner} ${styles.cornerTl}`} />
      <span className={`${styles.corner} ${styles.cornerTr}`} />
      <span className={`${styles.corner} ${styles.cornerBl}`} />
      <span className={`${styles.corner} ${styles.cornerBr}`} />

      {pageLabel && <span className={styles.labelTl}>{pageLabel}</span>}
      {pageRef && <span className={styles.labelTc}>{pageRef}</span>}
      {pageCount && <span className={styles.labelTr}>{pageCount}</span>}

      {indexMarks && (
        <div className={styles.indexRow}>
          {indexMarks.map((mark, i) => (
            <span key={mark} className={i === activeIndex ? styles.indexActive : undefined}>
              {mark}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
