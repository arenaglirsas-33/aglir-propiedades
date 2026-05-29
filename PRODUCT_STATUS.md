# PRODUCT_STATUS.md - Estado real de features

Estados permitidos: Closed / Partial / UI-only / Deferred / Broken / Needs Review

| Area | Feature | Estado | Evidencia | Pendiente |
| --- | --- | --- | --- | --- |
| Proyecto base | Next.js + TypeScript + Tailwind + App Router | Closed | Next.js + build OK + commit inicial `44be750` | Push a GitHub y deploy Vercel |
| Pagina publica `/` | Experiencia publica de terrenos | Partial | Ruta existente y funcional | Plano real, poligonos reales, precios reales |
| Plano interactivo | Plano con poligonos clickeables | Partial | Componente `InteractivePlan` + datos mock | Colocar plano real y trazar terrenos definitivos |
| Ficha de terreno mobile | Bottom sheet de lote seleccionado | Partial | `LotBottomSheet` existente | Prueba visual real en smartphone |
| Formulario de visita | Solicitud de visita por lote | Partial | Formulario con validacion mock/local | Persistencia real |
| Admin `/admin` | Panel operativo de visitas | Partial | Ruta admin + visitas mock | Autenticacion, persistencia real, calendario real o integracion posterior |
| WhatsApp human-in-the-loop | Mensaje preparado para aceptar visita | Partial | Helper `buildWhatsAppUrl` y boton aceptar | Prueba con numero real y flujo operativo real |
| Google Calendar | Integracion de calendario | Deferred | No implementado por decision de fase | OE especifica futura |
| Supabase / backend | Persistencia y backend | Deferred | No implementado por decision de fase | OE especifica futura |
| Login admin | Acceso protegido al admin | Deferred | No implementado por decision de fase | OE especifica futura |
| GitHub remoto | Repo remoto del proyecto | Needs Review | Git local inicializado, sin remoto confirmado | Crear repo en cuenta `arenaglirsas@gmail.com` y push |
| Vercel deploy | Deploy productivo | Deferred | Build-ready local | Conectar repo GitHub a Vercel |
