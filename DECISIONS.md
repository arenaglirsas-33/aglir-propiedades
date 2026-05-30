# DECISIONS.md - Decisiones de producto y arquitectura

## 2026-05-29 - Admin mobile-first operativo

### Decision

El Admin de Aglir Propiedades sera una app mobile-first operativa, no un panel de escritorio.

### Motivo

El uso real sera desde telefono y debe permitir gestionar estados comerciales en campo o durante atencion comercial.

### Alternativas descartadas

- Admin de escritorio con tablas anchas.
- Gestion de estados solo editando codigo.
- Persistencia backend en esta fase.

### Consecuencia

Las operaciones de estado se resuelven con cards, botones grandes y acciones rapidas. La persistencia real queda diferida para Supabase u otra base de datos.

## 2026-05-29 - Estados visuales del plano

### Decision

Los estados visuales del plano son:

- disponible: sin relleno fuerte
- reservado: amarillo claro
- vendido: amarillo

### Motivo

Permite lectura comercial rapida sin sobrecargar el plano.

## 2026-05-30 - Metadata estructurada por lote

### Decision

La metadata Manzana / Solar / Area m2 se gestiona como datos estructurados por lote, no como texto leido desde la imagen del plano.

### Motivo

El usuario accede desde smartphone y al tocar un lote debe recibir informacion confiable sin depender de la legibilidad visual del plano.

### Consecuencia

Cada poligono del plano debera vincularse a un id de lote estable. La ficha publica y el Admin consumen metadata desde `src/data/lots.ts` y, en el futuro, desde base de datos.
