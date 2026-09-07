# 03 — Storyboard de animaciones

Todas las escenas deben responder al scroll y ser reversibles. Las distancias son iniciales y deben ajustarse por pruebas reales.

## Escena 01 — Portada

- El libro aparece centrado sobre un fondo oscuro o neutro.
- Movimiento inicial muy sutil de escala `0.96 → 1` y enfoque.
- La imagen se revela mediante una máscara de arco.
- Líneas técnicas se dibujan con `stroke-dashoffset` o máscaras.
- “Scroll to open” pulsa de manera mínima.

## Escena 02 — Apertura

- La portada rota desde el lomo con perspectiva 3D.
- La sombra cambia según el ángulo.
- Debajo aparece la primera doble página.
- El movimiento debe sentirse pesado y editorial, no como una tarjeta girando.

## Escena 03 — Presentación

- Libro abierto y fijado temporalmente.
- El texto entra por recorte/máscara.
- Una hoja de calco atraviesa el pliegue y revela un plano.
- Pequeños datos técnicos aparecen por grupos.

## Escena 04 — Índice

- Tres títulos ordenados verticalmente.
- Hover o foco desplaza una previsualización sin cambiar el layout.
- El índice activo se marca con terracota y número.
- Click permite saltar al proyecto correspondiente.

## Escena 05 — Proyecto 01: Spa Wellness

- Primera hoja con concepto y materiales.
- El render aparece bajo una máscara arquitectónica.
- Tres muestras de materiales se separan ligeramente con el scroll.
- La imagen puede expandirse a casi full viewport antes de volver al libro.

## Escena 06 — Proyecto 02: Vivienda HM

- Fachada o render principal en la página derecha.
- Plano/elevación en la izquierda.
- Una hoja de calco se levanta diagonalmente y revela el render.
- Un detalle circular amplía materialidad o encuentro arquitectónico.

## Escena 07 — Proyecto 03: Departamento

- Capas de planta, mobiliario y render se presentan como láminas superpuestas.
- Al hacer scroll, las capas se alinean hasta formar la composición final.
- Transición final mediante página que pasa, no fade completo.

## Escena 08 — Servicios y proceso

- Tratamiento de ficha técnica.
- El proceso avanza con una regla, numeración o línea de tiempo horizontal.
- Mantener esta escena breve.

## Escena 09 — Calculadora

- La calculadora se integra a una doble página.
- Cada elección desplaza una capa de calco hacia la previsualización.
- El rango numérico cambia con transición corta, sin contador exagerado.
- El CTA se activa visualmente cuando la configuración mínima está completa.

## Escena 10 — Contacto y cierre

- Formulario breve en una página y datos de contacto en la otra.
- Al final, el libro se aleja o se cierra parcialmente.
- El usuario conserva acceso al CTA; no ocultarlo detrás de una animación final.

## Principios de movimiento

- Un movimiento principal por escena.
- Usar parallax como apoyo, no como protagonista.
- Evitar rebotes elásticos en el libro.
- Easing sugerido: `power2.inOut`, `power3.inOut`, `expo.inOut` con moderación.
- Usar scrub suave; evitar valores que produzcan retraso molesto.
- No fijar todo el sitio: alternar escenas pinned con descansos de scroll natural.
- Las transiciones deben conservar dirección y continuidad espacial.

## Responsive

En mobile, transformar la doble página en una única hoja vertical. Simular el cambio mediante capas y deslizamientos; no reducir dos páginas hasta volverlas ilegibles.

