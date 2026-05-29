# PRODUCT_STATUS.md - Estado real de features

Estados permitidos: Closed / Partial / UI-only / Deferred / Broken / Needs Review

| Area | Feature | Estado | Evidencia | Pendiente |
| --- | --- | --- | --- | --- |
| Proyecto base | Next.js + TypeScript + Tailwind + App Router | Closed | Next.js + build OK + commit inicial `44be750` | Mantener build antes de cada push |
| Deploy | Vercel production deployment | Closed | https://aglir-propiedades.vercel.app | Colocar plano real y conectar futuras features |
| Pagina publica `/` | Experiencia publica de terrenos | Partial | Ruta existente y funcional | Plano real, poligonos reales, precios reales |
| Plano interactivo | Plano con poligonos clickeables | Partial | Componente `InteractivePlan` + datos mock | Colocar plano real y trazar terrenos definitivos |
| Plano interactivo | Visualizacion por estado comercial | Partial | Poligonos reflejan disponible/reservado/vendido | Plano real, trazado definitivo y persistencia |
| Ficha de terreno mobile | Bottom sheet de lote seleccionado | Partial | `LotBottomSheet` existente | Prueba visual real en smartphone |
| Formulario de visita | Solicitud de visita por lote | Partial | Formulario con validacion mock/local | Persistencia real |
| Admin `/admin` | Panel operativo de visitas | Partial | Ruta admin + visitas mock | Autenticacion, persistencia real, calendario real o integracion posterior |
| Admin | Gestion mobile de estados comerciales de terrenos | Partial | UI admin permite cambiar estado local/mock | Persistencia real en base de datos y control de acceso admin |
| WhatsApp human-in-the-loop | Mensaje preparado para aceptar visita | Partial | Helper `buildWhatsAppUrl` y boton aceptar | Prueba con numero real y flujo operativo real |
| Google Calendar | Integracion de calendario | Deferred | No implementado por decision de fase | OE especifica futura |
| Supabase / backend | Persistencia y backend | Deferred | No implementado por decision de fase | OE especifica futura |
| Login admin | Acceso protegido al admin | Deferred | No implementado por decision de fase | OE especifica futura |
| GitHub remoto | Repo remoto del proyecto | Closed | `origin` apunta a `https://github.com/arenaglirsas-33/aglir-propiedades.git` | Mantener uso exclusivo de cuenta Aglir |
