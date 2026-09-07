# Reglas de trabajo — Portfolio 2026

Estas reglas aplican a todo archivo dentro de esta carpeta.

## Antes de modificar código

1. Leer completamente `README.md`, `PROMPT-MAESTRO.md` y todos los documentos de `instructions/` en orden numérico.
2. Inspeccionar la arquitectura real del repositorio, router, dependencias, estilos y assets. No asumir rutas ni versiones.
3. Buscar y leer las skills disponibles del proyecto, especialmente las relacionadas con:
   - diseño frontend distintivo;
   - GSAP core;
   - GSAP React;
   - ScrollTrigger;
   - timelines;
   - rendimiento y utilidades GSAP.
4. Si existen tanto `.claude/skills` como `.codex/skills`, usar las instrucciones compatibles con el agente actual. No copiar el contenido de las skills al código.

## Límites

- Trabajar exclusivamente sobre la nueva experiencia `/portfolio-2026` y componentes compartidos solo cuando sea seguro.
- No romper ni rediseñar la página actual.
- No reemplazar imágenes existentes sin autorización.
- No inventar datos de contacto, tarifas definitivas, testimonios, premios, clientes ni métricas.
- No agregar Three.js, WebGL, Lenis u otra dependencia pesada salvo que una prueba concreta demuestre que es necesaria.
- No convertir cada sección en una card. Mantener composición editorial.

## Forma de implementación

- Construir componentes pequeños y reutilizables, pero evitar fragmentación artificial.
- Mantener contenido, configuración de proyectos y precios fuera del JSX estructural.
- Encapsular todas las animaciones GSAP con cleanup correcto.
- Implementar fallback sin animaciones para `prefers-reduced-motion`.
- Probar desktop y mobile reales.
- Ejecutar build, lint y las pruebas disponibles antes de declarar finalizado.

## Criterio visual prioritario

Debe sentirse como hojear un portfolio físico de arquitectura: papel, pliegue central, planos, calcos, imágenes editoriales y movimientos precisos. Debe seguir siendo una web clara, rápida y utilizable.

