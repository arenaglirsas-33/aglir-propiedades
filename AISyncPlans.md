# AISyncPlans.md - Planos tecnicos del proyecto Aglir Propiedades

Nota de protocolo: el nombre `AISyncPlans.md` se conserva como archivo tecnico estandar heredado del protocolo operativo. Este documento corresponde exclusivamente al proyecto Aglir Propiedades.

## 1. Identidad del proyecto

- Nombre: Aglir Propiedades
- Proposito: web inmobiliaria mobile-first para venta de terrenos.
- Funcion central: plano interactivo + ficha de terreno + agenda de visitas + admin operativo.
- Canal principal de contacto: WhatsApp.
- Human-in-the-loop: el sistema prepara mensajes, pero no los envia automaticamente.

## 2. Stack real

- Next.js: 14.2.35
- React: 18.3.1
- React DOM: 18.3.1
- TypeScript: 5.7.2
- Tailwind CSS: 3.4.17
- App Router: usado en `src/app`
- Git: repo local inicializado
- Preparado para Vercel: estructura Next.js estandar y `next build` funcional
- Sin backend real todavia
- Sin Supabase todavia
- Sin Google Calendar todavia

## 3. Estructura de carpetas

`src/app`
- `layout.tsx`: layout raiz y metadata.
- `globals.css`: Tailwind y estilos globales.
- `page.tsx`: pagina publica `/`.
- `admin/page.tsx`: panel admin `/admin`.

`src/components`
- `plan/InteractivePlan.tsx`
- `plan/LotPolygon.tsx`
- `plan/LotBottomSheet.tsx`
- `visits/VisitRequestForm.tsx`
- `admin/AdminVisitList.tsx`
- `admin/AdminCalendarView.tsx`
- `admin/WhatsAppAcceptButton.tsx`

`src/data`
- `lots.ts`: terrenos mock.
- `visitRequests.ts`: solicitudes de visita mock.

`src/lib`
- `whatsapp.ts`: helper para construir URLs de WhatsApp.

`src/types`
- `index.ts`: tipos compartidos del MVP.

`public`
- `plan/`: carpeta esperada para `plano-11223.png`.

## 4. Rutas existentes

`/`
- Funcion: pagina publica mobile-first para seleccionar terrenos y solicitar visitas.
- Componentes principales: `InteractivePlan`, `LotBottomSheet`, `LotPolygon`, `VisitRequestForm`.
- Estado actual: funcional con datos mock y placeholder si no existe `public/plan/plano-11223.png`.

`/admin`
- Funcion: panel operativo basico para revisar solicitudes de visita mock.
- Componentes principales: `AdminCalendarView`, `AdminVisitList`, `WhatsAppAcceptButton`.
- Estado actual: funcional con datos mock, sin login y sin persistencia real.

## 5. Componentes existentes

`src/components/plan/InteractivePlan.tsx`
- Funcion: renderiza el plano, detecta si existe la imagen real, muestra placeholder si falta, superpone SVG y coordina seleccion de lotes.
- Datos que recibe: `lots`, `selectedLot`, `onSelectLot`, `onSchedule`.
- Responsabilidad: experiencia principal del plano interactivo.

`src/components/plan/LotPolygon.tsx`
- Funcion: renderiza cada terreno como poligono SVG clickeable y accesible por teclado.
- Datos que recibe: `lot`, `selected`, `onSelect`.
- Responsabilidad: area tactil/visual de cada lote.

`src/components/plan/LotBottomSheet.tsx`
- Funcion: muestra ficha del terreno seleccionado con estado, metros, precios, observaciones y boton de agenda.
- Datos que recibe: `lot`, `onClose`, `onSchedule`.
- Responsabilidad: ficha inferior en mobile y panel lateral en desktop.

`src/components/visits/VisitRequestForm.tsx`
- Funcion: formulario de solicitud de visita.
- Datos que recibe: `selectedLot`, `onCreateRequest`.
- Responsabilidad: validar campos obligatorios y crear una solicitud local/mock.

`src/components/admin/AdminVisitList.tsx`
- Funcion: lista solicitudes de visita mock con datos del cliente, terreno, fecha, hora, comentario y estado.
- Datos que recibe: `initialRequests`, `lots`.
- Responsabilidad: administrar estado local de solicitudes y exponer la accion de aceptar visita.

`src/components/admin/AdminCalendarView.tsx`
- Funcion: agrupa solicitudes por fecha y muestra una vista simple por dia.
- Datos que recibe: `requests`, `lots`.
- Responsabilidad: lectura rapida de agenda mock.

`src/components/admin/WhatsAppAcceptButton.tsx`
- Funcion: acepta una visita en estado local y abre WhatsApp con mensaje preparado.
- Datos que recibe: `request`, `lot`, `onAccept`.
- Responsabilidad: mantener el flujo human-in-the-loop sin envio automatico.

## 6. Modelo de datos actual

`PolygonPoint`
- `x: number`
- `y: number`

`LotStatus`
- `disponible`
- `reservado`
- `vendido`

`Lot`
- `id`
- `manzana`
- `solar`
- `area_m2`
- `precio_contado`
- `precio_financiado`
- `estado`
- `observaciones`
- `polygon`

`VisitStatus`
- `pendiente`
- `aceptada`
- `rechazada`
- `realizada`

`VisitRequest`
- `id`
- `nombre`
- `whatsapp`
- `lotId`
- `fecha`
- `hora`
- `comentario`
- `estado`

## 7. Datos mock

`src/data/lots.ts`
- Contiene 6 terrenos iniciales de ejemplo.
- Son datos de prueba.
- No son precios definitivos.
- No representan todavia todos los terrenos.
- Los poligonos son trazado inicial/manual sobre un `viewBox` SVG `0 0 100 100`.

`src/data/visitRequests.ts`
- Contiene 4 solicitudes mock.
- Sirve para probar el panel admin.
- No existe persistencia real.

## 8. Plano interactivo

- Imagen esperada: `public/plan/plano-11223.png`.
- Si la imagen no existe, `InteractivePlan` muestra un placeholder visual.
- La imagen se renderiza como fondo mediante `next/image`.
- Encima se superpone un SVG responsive.
- Cada lote se renderiza como poligono clickeable.
- La seleccion de terreno actualiza `selectedLot`.
- En mobile, la ficha aparece como bottom sheet.
- El sistema esta preparado para agregar mas lotes editando `src/data/lots.ts`.

## 9. Agenda de visitas

- Formulario actual: `VisitRequestForm`.
- Campos: nombre, WhatsApp, dia, hora y comentario opcional.
- Validaciones: nombre, WhatsApp, dia y hora son obligatorios.
- Comportamiento actual: al enviar, crea una solicitud en estado local/mock y muestra confirmacion visual.
- Persistencia: no hay base de datos ni backend todavia.

## 10. Admin

- Ruta: `/admin`.
- Muestra solicitudes mock.
- Incluye agrupacion por fecha/calendario simple.
- Estados soportados: pendiente, aceptada, rechazada, realizada.
- Boton aceptar: cambia estado local a `aceptada`.
- WhatsApp: abre una nueva pestaña con mensaje preparado, sin envio automatico.

## 11. WhatsApp helper

Archivo: `src/lib/whatsapp.ts`

Funcion: `buildWhatsAppUrl`
- Recibe telefono, nombre, terreno, fecha y hora.
- Limpia el telefono dejando solo digitos.
- Construye una URL `https://wa.me/[telefono]?text=[mensaje_codificado]`.
- Mensaje base: confirmacion de visita con manzana, solar, metros, dia y hora.
- Regla: el sistema solo abre WhatsApp con el mensaje preparado. Nunca debe enviar automaticamente.

## 12. Zonas sensibles

- No mezclar con AISync.
- No usar cuenta GitHub de AISync.
- No enviar WhatsApp automaticamente.
- No cargar precios inventados.
- No convertir el plano en georreferenciacion real todavia.
- No introducir backend sin OE especifica.
- No introducir Google Calendar sin OE especifica.
- No introducir login sin OE especifica.

## 13. Pendientes tecnicos

- Exportar/colocar plano real `plano-11223.png`.
- Trazar terrenos reales.
- Cargar precios reales.
- Conectar GitHub.
- Desplegar en Vercel.
- Evaluar Supabase.
- Evaluar login admin.
- Evaluar Google Calendar.
