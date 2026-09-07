# 06 — Responsive, accesibilidad y rendimiento

## Desktop

- El libro puede mostrarse como doble página.
- Mantener márgenes suficientes respecto del viewport.
- Limitar escalas para pantallas muy anchas.
- Probar especialmente alrededor de 1440×900 y 1980×1020.

## Tablet

- Mantener doble página solo si el texto conserva tamaño legible.
- Reducir profundidad 3D y cantidad de elementos secundarios.
- Controles táctiles con área mínima adecuada.

## Mobile

- Una hoja por vez.
- Proyectos en secuencia vertical con capas.
- Sin pliegue central falso que robe espacio.
- Tipografía mínima legible y CTA visible.
- No bloquear el scroll nativo.

## Accesibilidad

- Orden DOM coherente aunque haya composición absoluta.
- Navegación por teclado.
- Foco visible.
- Botones reales para acciones.
- `alt` descriptivo en imágenes.
- `aria-current` en navegación/progreso cuando corresponda.
- No depender solamente del color terracota para indicar selección.
- Contraste WCAG AA en textos funcionales.

## Movimiento reducido

Con `prefers-reduced-motion: reduce`:

- eliminar scrub y rotaciones 3D fuertes;
- mostrar todas las escenas en orden natural;
- reemplazar cambios de página por transiciones instantáneas o cortas;
- conservar contenido y acciones completas.

## Rendimiento

- Usar WebP/AVIF cuando el pipeline existente lo permita.
- Definir `width`, `height` y `aspect-ratio`.
- Precargar únicamente el asset crítico de portada.
- Lazy-load de imágenes posteriores sin provocar saltos.
- Evitar filtros y blur animados grandes.
- Animar `transform` y `opacity` preferentemente.
- Reducir densidad de textura/grillas en mobile.
- Dividir código si la ruta puede cargarse de forma lazy.

## Metas orientativas

- Sin errores de consola.
- Sin layout shift evidente.
- Interacción fluida en equipo medio.
- LCP razonable para una página visual.
- Bundle de la nueva ruta aislado cuando el router lo permita.

