# Stefany Portfolio 2026 — paquete de implementación

Este paquete define el rediseño de `/portfolio-2026` como un portfolio arquitectónico editorial e interactivo. Está preparado para pegarse completo dentro de la carpeta de trabajo de la nueva ruta.

## Cómo usarlo

1. Pegá esta carpeta dentro de `portfolio-2026`.
2. Abrí el proyecto completo en VS Code, no solamente esta carpeta.
3. Pedile a Codex que lea `PROMPT-MAESTRO.md` y ejecute sus instrucciones.
4. Para validar primero la interacción crítica, usá `PROMPT-01-PROTOTIPO.md`.

## Orden de lectura obligatorio

1. `AGENTS.md`
2. `instructions/00-BRIEF.md`
3. `instructions/01-DIRECCION-VISUAL.md`
4. `instructions/02-CONTENIDO.md`
5. `instructions/03-STORYBOARD-ANIMACIONES.md`
6. `instructions/04-ARQUITECTURA-TECNICA.md`
7. `instructions/05-CALCULADORA-Y-CONTACTO.md`
8. `instructions/06-RESPONSIVE-ACCESIBILIDAD-PERFORMANCE.md`
9. `instructions/07-ASSETS-Y-REFERENCIAS.md`
10. `instructions/08-CRITERIOS-DE-ACEPTACION.md`

## Referencias incluidas

- `references/mockups/01-portada.png`
- `references/mockups/02-proyecto.png`
- `references/mockups/03-calculadora.png`
- `references/storyboard/storyboard.html`

Los mockups fijan el lenguaje visual, pero no deben copiarse ciegamente. La implementación debe respetar el contenido real, la legibilidad, el responsive y el rendimiento.

## Decisiones cerradas

- Nueva experiencia en `/portfolio-2026`.
- No modificar ni reemplazar la landing actual.
- Tres proyectos como máximo.
- React + Vite + CSS/Tailwind existente + GSAP/ScrollTrigger.
- Sin Three.js en la primera versión.
- Titular principal más sobrio y menos alto que el mockup: `Inter Tight` 500/600.
- El libro es el sistema de navegación visual, no un efecto decorativo aislado.

