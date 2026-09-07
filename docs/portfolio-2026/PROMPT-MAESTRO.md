# Prompt maestro — Stefany Portfolio 2026

Quiero implementar una nueva experiencia en la ruta `/portfolio-2026` dentro de este proyecto existente.

## Lectura obligatoria

Antes de editar cualquier archivo:

1. Leé `AGENTS.md`.
2. Leé `README.md`.
3. Leé completamente todos los documentos de `instructions/` en orden numérico.
4. Revisá los tres mockups de `references/mockups/` y el storyboard HTML incluido.
5. Inspeccioná el repositorio: framework, router, dependencias, estructura de estilos, componentes y assets disponibles.
6. Buscá y leé las skills locales de frontend y GSAP indicadas en `AGENTS.md`. Aplicá sus recomendaciones cuando no contradigan este brief.

No empieces a programar hasta terminar esa revisión.

## Objetivo

Construir un portfolio de arquitectura premium que se perciba como un libro físico editorial. El scroll debe abrir el libro, revelar hojas, planos y renders, cambiar de proyecto y conducir hacia una calculadora y un contacto final.

El resultado no debe ser una landing convencional con secciones apiladas. Debe conservar claridad, accesibilidad, responsive y buen rendimiento.

## Alcance

- Portada.
- Presentación breve.
- Índice visual.
- Tres proyectos: Spa Wellness, Vivienda unifamiliar HM y Diseño interior de departamento.
- Servicios/proceso resumidos.
- Calculadora orientativa configurable.
- Contacto final.
- Navegación básica y progreso.
- Responsive y fallback de movimiento reducido.

## Tecnología esperada

- Mantener React + Vite y el sistema CSS/Tailwind ya instalado.
- GSAP + ScrollTrigger para secuencias y sincronización con scroll.
- CSS 3D, pseudo-elementos, SVG y `clip-path` para papel, pliegues y máscaras.
- Scroll nativo en la primera versión.
- No agregar Three.js salvo bloqueo técnico demostrado y autorización expresa.

## Método

1. Realizá una auditoría breve del proyecto y describí el plan de integración.
2. Comprobá que la ruta actual no será afectada.
3. Implementá primero el shell visual y los tokens.
4. Implementá portada y sistema de libro.
5. Construí las escenas en el orden definido por el storyboard.
6. Conectá la calculadora a configuración editable, no a valores dispersos en componentes.
7. Implementá el contacto usando únicamente datos/enlaces existentes confirmados.
8. Ajustá responsive, accesibilidad y rendimiento.
9. Ejecutá build, lint y pruebas existentes.

## Calidad requerida

- La dirección visual debe seguir los mockups, corrigiendo el titular “STEFANY AGUIAR” con una fuente menos alta y más sobria: `Inter Tight` 500/600.
- Las animaciones deben responder al scroll, ser reversibles y tener continuidad espacial.
- No usar animaciones genéricas de fade-up como recurso principal.
- No abusar de cards redondeadas, blur, glassmorphism, gradientes o neón.
- No sacrificar legibilidad por el efecto del libro.
- Las imágenes deben conservar proporción y calidad.
- No dejar listeners, contexts GSAP o ScrollTriggers activos después del desmontaje.

## Entrega

Al finalizar, informá:

- resumen de la implementación;
- archivos principales creados/modificados;
- decisiones técnicas relevantes;
- cómo editar contenido, proyectos y precios;
- pruebas ejecutadas y resultados;
- limitaciones pendientes reales.

No declares terminado si no se cumplen los criterios de `instructions/08-CRITERIOS-DE-ACEPTACION.md`.

