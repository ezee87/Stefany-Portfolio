# Prompt 01 — prototipo de interacción crítica

Leé `AGENTS.md`, `README.md` y todos los archivos de `instructions/` antes de actuar. Revisá también las skills locales indicadas en `AGENTS.md`.

Implementá solamente una prueba funcional de la experiencia principal en `/portfolio-2026`:

1. portada cerrada;
2. apertura del libro controlada por scroll;
3. aparición de la primera doble página;
4. hoja de calco que se desplaza o levanta y revela el render;
5. transición de salida hacia el siguiente proyecto.

Usá el contenido y los assets reales del proyecto. La referencia visual principal es `references/mockups/01-portada.png` y `references/mockups/02-proyecto.png`.

Requisitos:

- React y GSAP ScrollTrigger;
- CSS 3D, máscaras o `clip-path` cuando sea necesario;
- sin Three.js en esta prueba;
- scroll nativo;
- animación reversible al subir;
- `prefers-reduced-motion` funcional;
- responsive básico desktop/mobile;
- cleanup completo de timelines y triggers;
- sin cambios en la landing actual.

La curvatura del papel puede simularse con capas, transformaciones, sombras y máscaras. Priorizá fluidez y credibilidad sobre una simulación física perfecta.

Al finalizar:

- ejecutá build y lint;
- informá archivos creados/modificados;
- explicá brevemente qué animación se implementó;
- señalá limitaciones visuales o de rendimiento;
- no continúes con el resto de la página hasta que este prototipo sea revisado.

