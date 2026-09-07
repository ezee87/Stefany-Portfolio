// Contenido real del portfolio 2026 (fuente: docs/portfolio-2026/instructions/02-CONTENIDO.md).
// Centralizado para no repetir copy dentro de los componentes de escena.

export const coverContent = {
  pageLabel: '01 / Portada',
  pageRef: 'REV. 2026.01',
  pageCount: 'P. 01',
  name: ['Stefany', 'Aguiar'],
  descriptor: 'Arquitectura · Interiorismo · Visualización 2D y 3D',
  edition: 'Portfolio 2026',
  scrollHint: 'Scroll para abrir',
  image: {
    src: '/images/hero.png',
    alt: 'Render interior arquitectónico con materiales cálidos, luz natural y mobiliario contemporáneo',
  },
  indexMarks: ['A — 01', 'B — 02', 'C — 03'],
}

export const introContent = {
  pageLabel: '02 / Presentación',
  pageRef: 'REV. 2026.01',
  pageCount: 'P. 02',
  // El título se revela por líneas enmascaradas durante la apertura.
  titleLines: ['Del concepto al espacio,', 'visualmente claro.'],
  text:
    'Trabajo cada proyecto combinando criterio arquitectónico, sensibilidad estética y visualización 3D para transformar ideas, planos o referencias en imágenes que comuniquen con claridad el potencial del espacio.',
  axes: ['Criterio espacial', 'Materialidad', 'Atmósfera'],
  image: {
    src: '/images/render1.png',
    alt: 'Render arquitectónico utilizado como referencia de criterio espacial y materialidad',
  },
}

// Adelanto del primer proyecto real, usado solo como destino de la transición de salida del prototipo.
export const nextProjectTeaser = {
  index: '01',
  indexMarks: ['01', '02', '03'],
  label: 'Siguiente — Proyecto 01',
  title: 'Spa Wellness',
  category: 'Interiorismo comercial · Wellness · Visualización 3D',
  // Detalles técnicos reales tomados de la descripción del proyecto (02-CONTENIDO.md).
  details: ['Piedra natural', 'Tonos arena', 'Iluminación indirecta'],
  image: {
    src: '/images/spa-1.png',
    alt: 'Render de spa wellness con tonos arena, piedra natural e iluminación indirecta',
  },
}
