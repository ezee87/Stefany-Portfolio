# 04 — Arquitectura técnica

La estructura exacta debe adaptarse al repositorio después de inspeccionarlo. No imponer rutas que contradigan el proyecto.

## Módulos conceptuales

- `Portfolio2026Page`: composición general.
- `BookStage`: viewport, perspectiva, escala y estado del libro.
- `BookSpread`: doble página reutilizable.
- `PaperLayer`: hoja opaca o calco.
- `TechnicalGrid`: grilla, marcas y coordenadas.
- `CoverScene`.
- `IntroScene`.
- `ProjectIndexScene`.
- `ProjectScene` configurado por datos.
- `ServicesScene`.
- `CalculatorScene`.
- `ContactScene`.
- `ProgressNav`.

No crear un archivo por elemento puramente decorativo si puede resolverse con CSS o pseudo-elementos.

## Datos

Centralizar en módulos equivalentes a:

- `portfolioContent`.
- `projects`.
- `calculatorConfig`.
- `contactConfig`.

Esto permite conectar un CMS en el futuro sin reconstruir las animaciones.

## GSAP

- Registrar plugins una sola vez.
- Usar `gsap.context()` o `useGSAP()` según las dependencias existentes.
- Crear una timeline por escena y una timeline coordinadora solo cuando aporte claridad.
- Limpiar context, ScrollTriggers, observers y listeners.
- Calcular medidas después de cargar imágenes y fuentes.
- Refrescar ScrollTrigger de forma controlada.
- Usar `matchMedia()` para variantes desktop/mobile/reduced-motion.
- No animar propiedades que disparen layout cuando pueda usarse `transform` u `opacity`.

## Papel y cambio de página

Primera implementación:

- `perspective` en el stage;
- `transform-origin` en el lomo;
- capas front/back;
- `backface-visibility`;
- sombras dinámicas;
- pseudo-elemento para curvatura;
- `clip-path` o SVG mask para el borde que se levanta.

No intentar simulación física perfecta. El objetivo es credibilidad visual a 60 fps.

## Routing

- Registrar `/portfolio-2026` según el router real.
- La URL debe funcionar al recargar directamente en Vercel.
- No reutilizar selectores globales que alteren la landing actual.
- Usar namespace de clases, CSS Modules o alcance equivalente.

## Fases

1. Auditoría e integración de ruta.
2. Tokens y shell.
3. Prototipo de portada/apertura/proyecto.
4. Escenas restantes.
5. Calculadora/contacto.
6. Responsive, accesibilidad y rendimiento.
7. QA final.

