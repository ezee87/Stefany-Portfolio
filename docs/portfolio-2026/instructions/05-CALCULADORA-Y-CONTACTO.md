# 05 — Calculadora y contacto

## Objetivo

Entregar un rango inicial y convertir la configuración en una consulta. No debe presentarse como cotización definitiva.

## Campos mínimos

1. Tipo de proyecto:
   - residencial;
   - interiorismo;
   - visualización 3D.
2. Superficie aproximada en m².
3. Alcance:
   - concepto;
   - proyecto completo;
   - renders.
4. Extras configurables:
   - cantidad de ambientes;
   - cantidad de renders;
   - urgencia;
   - visita/relevamiento, solo si aplica.

## Configuración

Las tarifas deben vivir en un único objeto editable. No usar números dispersos en JSX.

Modelo sugerido:

```ts
type CalculatorConfig = {
  currency: string
  baseByProjectType: Record<string, number | null>
  pricePerSquareMeter: Record<string, number | null>
  scopeMultiplier: Record<string, number>
  extras: Record<string, number>
  uncertaintyPercent: number
  minimumProjectValue: number | null
}
```

Los valores deben comenzar como `null` o modo demostración hasta que Stefany confirme sus tarifas. El rango `USD 2.800 — 3.600` del mockup es solamente visual y no constituye precio real.

## Resultado

- Rango estimado.
- Plazo orientativo, únicamente si existe configuración confirmada.
- Resumen de selecciones.
- Aviso: “Esta estimación es orientativa y puede variar según el alcance final.”
- CTA: “Solicitar propuesta”.

## Envío

El CTA debe transferir la configuración a uno de estos destinos, respetando lo que ya exista en el proyecto:

1. formulario conectado;
2. WhatsApp con mensaje prearmado;
3. email;
4. endpoint propio.

No incorporar servicios externos nuevos sin necesidad.

## Contacto

Formulario breve:

- Nombre.
- Email o WhatsApp.
- Tipo de proyecto.
- Mensaje.
- Resumen automático de la calculadora, si fue utilizada.

Incluir estados de enviando, éxito y error. Validar campos y evitar exponer secretos en frontend.

