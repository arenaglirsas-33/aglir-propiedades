# PromtsOperativos.md - Protocolo operativo vigente

## 1. Proposito

Este archivo define como deben operar GPT OE Maker y Claude/Codex en el proyecto Aglir Propiedades. Su objetivo es mantener continuidad operativa, limitar riesgos y evitar que el trabajo dependa de conversaciones anteriores.

## 2. Regla base

- Toda modificacion relevante debe ejecutarse mediante OE.
- Toda OE debe tener alcance limitado.
- No abrir refactors laterales.
- No inventar datos comerciales.
- No mezclar este proyecto con AISync.
- La cuenta GitHub del proyecto es `arenaglirsas@gmail.com`.

## 3. Estructura obligatoria de OE

Toda OE debe incluir:

- Ejecutor
- Modelo recomendado
- Tipo
- Area
- Ruta local obligatoria
- Objetivo
- Verificacion inicial
- Lectura obligatoria
- Archivos autorizados
- Cambios concretos
- Restricciones
- Validacion
- Actualizacion documental
- Commit
- Reporte final
- Cierre exacto

## 4. Verificacion inicial obligatoria

Toda OE debe comenzar con:

```bash
pwd
git status --short
git branch --show-current
git config user.name
git config user.email
git remote -v
```

Y confirmar:

- Ruta correcta.
- Repo correcto.
- Cuenta Git correcta.
- Ausencia de remoto AISync.

Si el email Git local no es `arenaglirsas@gmail.com`, corregir localmente:

```bash
git config user.name "Aglir Propiedades"
git config user.email "arenaglirsas@gmail.com"
```

## 5. Regla documental

Al cerrar una OE:

- `handoff.md` se actualiza siempre.
- `PRODUCT_STATUS.md` se actualiza si afecta features.
- `AISyncPlans.md` se actualiza si cambia arquitectura, estructura, DB, API, rutas o patrones.
- `CodingWorkshop.md` se actualiza si se resuelve bug no trivial.
- `PromtsOperativos.md` se actualiza solo si cambia el proceso.
- `DECISIONS.md` se crea/actualiza solo si hay decision relevante de producto o arquitectura.

## 6. Frase obligatoria de cierre de toda OE

Toda OE debe terminar con:

```text
Ejecutar solo este bloque. No abrir refactors laterales.
```
