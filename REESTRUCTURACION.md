# REESTRUCTURACIÓN — Plan para dejar funcionando las opciones

> Estado: **EN CURSO** — archivo de plan + checklist de avance.
> Actualizado: 2026-09-05

---

## 1) Objetivo

Que **Fuchibolparatodos** tenga **TODOS los canales de
`https://canalesonline.netlify.app/`, funcionando con TODAS las opciones**
(igual que la original), con el **diseño propio** (logo Fuchibolparatodos +
botón "optimizar" que quita animaciones) y **100% gratis** (sin modal de pago,
sin donaciones, sin analytics). Que el clon sea la réplica funcional íntegra:
todos los canales y todas las opciones por canal.

### Reglas de trabajo (permanentes)

- [x] **Mantener SIEMPRE actualizado**: `node scripts/check-updates.js` debe
      correrse en modo normal ante cualquier novedad remota; el sitio debe
      quedar en paridad con `canalesonline.netlify.app` (salvo lo gratuito).
- [x] Ante un cambio remoto: sincronizar, validar (sintaxis + TNT=3 +
      servidores existentes + hashes) y aplicar. Nunca dejar el sitio con
      archivos viejos por conveniencia.
- [x] Lo gratuito (modal/donaciones/analytics) NO se sincroniza y se verifica
      con `grep` periódicamente.
- [x] Commit único SIN PUSH hasta que el usuario pruebe el cambio.

Metas concretas de aceptación:

- [ ] **TODOS los canales** del remoto visibles en el clon (igual lista
      `script-ch.js`: la grilla muestra los mismos canales).
- [ ] **Cada canal** ofrece las mismas opciones/servidores que la original.
- [ ] TNT Sports muestra **las 3 opciones** en el clon (igual que la original).
- [ ] **Opción 1** (`cvattpro_token.html`) reproduce.
- [ ] **Opción 2** (`canalesparatodos_ext.html`) reproduce.
- [ ] **Opción 3** (`ciades.html`) sigue reproduciendo (ya funciona, no regresión).
- [ ] El sitio NO muestra el modal de pago al abrir por primera vez.
- [ ] El sitio NO tiene sección donaciones/ranking ni analytics.
- [ ] El índice mantiene el diseño propio: **logo Fuchibolparatodos** y
      **botón optimizar** (quita animaciones).
- [ ] `node scripts/check-updates.js` corre sin cambios después del sync
      (paridad con el remoto).

---

## 2) Diagnóstico (por qué fallaron las opciones 1 y 2)

### 2.1 No era falta de código: era desvío de paridad

El clon sincroniza desde el remoto, pero tenía **parches propios** que la
original ya no tiene:

| Archivo | Estado remoto (original HOY) | Estado local (clon) | Consecuencia |
|---|---|---|---|
| `servidores/asd.js` | **404** (la original ya no lo sirve) | Parcheado "token por canal" (`1b2c744d`→`74ce0435`) | La opción 2 se quedó cargando un script muerto/parchado |
| `servidores/canalesparatodos_ext.html` | Carga `cHV0byBlbCBxdWUgcm9iYQ.js`, REtry=`initializePlayer()`, SIN guard | Carga `asd.js`, guard `MAX_PAGE_RELOADS` + contador `sessionStorage` | Loop de redisgos / contador pegado (`reinicio 4/3`) |
| `servidores/cvattpro_token.html` | Base nueva `89b0c068`→`96f04d41` (misma lógica de token) | Base vieja + guard propio | Arma URL `servidores/null/live/...` → **404** cuando el token falla |
| `js/script-ch.js` | Se sincroniza por marcadores | Idem (4 secciones) | OK (TNT = 3 enlaces) |

### 2.2 El fallo de token (CDN)

- El probe de token da **403 "Token required"** en sesión fría:
  - `chromecast.cvattv.com.ar/.../*.m3u8` → 403.
  - `cdn.cvattv.com.ar/.../*.mpd` → en navegador 403; con cliente sin cookies 200 pero sin redirect (no se extrae token).
- `getURLwithToken()` devuelve `null` → el código arma `servidores/null/live/<id>...` → 404 → "MPD token caido".
- La **original funciona** porque el navegador ya tiene **cookies de dominio
  `*.cvattv.com.ar`** (las cookies son por dominio, se comparten entre
  orígenes) y/o token cacheado en `sessionStorage` de su propio origen.
- Al dejar los archivos de reproducción **byte-idénticos** al remoto, el clon
  usará las mismas cookies → reproduce igual que la original. ✅ (hipótesis
  principal, se confirma en la prueba manual)

### 2.3 El paywall/modal vive SOLO en el remoto

| Archivo remoto | Qué contiene | Estado local |
|---|---|---|
| `js/script-config.js` (26 KB) | `bloqueoUS`, `bloquearDominio`, validación de clave de acceso (`FECHA_VALIDACION`), bloqueo por IP (incluso por uso de TNT), alert de dominio | **151 B limpio** (sin gate) ✅ |
| `js/script-canalespro.js` (66 KB) | Modal "Bienvenido a Canales Online… código de colaboración" | **58 KB sin modal** ✅ |
| `index.html` | Sección donaciones + ranking + Firebase + Statcounter | Rediseño propio **sin nada de eso** ✅ |

> Ninguno de esos dos JS se sincroniza (no están en `FILES`/`AUX_FILES`).
> El clon ya está libre de pago. Solo hay que **verificar** que no reaparezca.

---

## 3) Decisiones de diseño (aprobadas)

- [x] Mantener `index.html` rediseñado (logo Fuchibolparatodos, botón
      "optimizar"/`sin-animaciones`, guía, cineplay).
- [x] Archivos de **reproducción** (`servidores/*`, `js/script-ch.js`, CSS):
      **byte-idénticos** al remoto actual, sin parches de comportamiento.
- [x] "Gratis": sin modal, sin donaciones/ranking, sin analytics.
- [x] `servidores/asd.js`: remoto 404 → se convierte en **copia byte-a-byte de
      `cHV0byBlbCBxdWUgcm9iYQ.js`** (así cualquier referencia vieja sigue
      funcionando con el mismo código que usa la original).
- [x] Commit único **SIN PUSH** hasta que el usuario pruebe.

---

## 4) Fases de implementación

### FASE 1 — Desactivar parches de comportamiento (`scripts/check-updates.js`)

- [x] Eliminar de `PATCHES` los parches de comportamiento:
  - [x] `'asd.js'` (token-por-canal).
  - [x] `'cvattpro_token.html'` (guard v2).
  - [x] `'canalesparatodos_ext.html'` (guard v2).
  - [x] `'canalesparatodos.html'` (guard v2).
- [x] Regla para `servidores/asd.js`: si el remoto no lo sirve (404), y el
      archivo local no es idéntico a `cHV0byBlbCBxdWUgcm9iYQ.js`, reemplazarlo
      por una copia byte-a-byte (con backup `.backup`). Implementado como
      PASO 2.5 en `check-updates.js`.
- [x] `node --check scripts/check-updates.js` OK.

### FASE 2 — Sync total a la original

- [x] `node scripts/check-updates.js --dry-run` (ver lista de cambios).
- [x] `node scripts/check-updates.js` (aplicar):
  - [x] `servidores/cvattpro_token.html` → idéntico remoto (base `96f04d41`).
  - [x] `servidores/canalesparatodos_ext.html` → idéntico remoto (carga `cHV0by...js`, retry `initializePlayer()`, sin guard).
  - [x] `servidores/canalesparatodos.html` → idéntico remoto.
  - [x] `servidores/asd.js` → copia de `cHV0byBlbCBxdWUgcm9iYQ.js`.
  - [x] `js/script-ch.js` → 4 secciones (canales, filtro, enlaces, mapeo) con
        validación (sintaxis + `TNT Sports` = 3 enlaces + servidores existentes).
  - [x] Resto de `servidores/*` y CSS (según lista del remoto).
  - [x] Se agregaron `canalesparatodos_ext.html` y `canalesparatodos.html` a
        `SERVERS_ADICIONALES` para que queden byte-idénticos pese a que la
        original ya no los lista en `script-ch.js`.

### FASE 3 — Verificación "gratis" (sin paywall)

- [x] `grep` local sin rastros de: "Bienvenido a Canales", "8.000",
      "Pega el código", "FECHA_VALIDACION", "bloqueoUS", "canalesonline24@",
      "Alias para donaciones", Firebase/Statcounter.
- [x] Confirmar que `js/script-config.js` y `js/script-canalespro.js` quedan
      FUERA del sync (no en `FILES`/`AUX_FILES`/servidores). `git status`
      los muestra intactos.
- [ ] Abrir el clon local: NO aparece el modal, NO hay sección donaciones.
      (verificación en navegador → FASE 5)

### FASE 4 — Validación automatizada

- [x] `node -e` con `vm.Script` sobre `script-ch.js` resultante (parsea OK).
- [x] `testCanal('TNT Sports')` devuelve 3 enlaces **idénticos** al remoto
      (`cvattpro_token.html?get=…`, `canalesparatodos_ext.html?get=…`,
      `ciades.html?id=TNT_SPORTS`); 390 canales totales.
- [x] Comparación de hashes: cada archivo de reproducción servido por el remoto
      → `hash local == hash remoto`.
- [x] `node scripts/check-updates.js --dry-run` → **Sin cambios, sin warnings**
      (idempotente, 2 corridas consecutivas).

### FASE 5 — Prueba manual (usuario)

- [ ] Índice: logo propio + botón "optimizar" (quita animaciones) ok.
- [ ] TNT: las 3 opciones visibles.
- [ ] Opción 1 (`cvattpro_token`) reproduce.
- [ ] Opción 2 (`canalesparatodos_ext`) reproduce.
- [ ] Opción 3 (`ciades`) reproduce (sin regresión).
- [ ] Sin modal al primer acceso.
- [ ] Si 1/2 fallan SOLO en incógnito: comparar con la original en incógnito
      (si ambas fallan → es el CDN, no el clon; se documenta).

### FASE 6 — Commit

- [x] `git status` limpio de archivos ajenos (queda solo lo del plan; `NOTAS.md`
      y `*.backup` están gitignoreados).
- [x] Commit único (mensaje tipo
      `"refactor: replica playback byte-idéntica + gratis, sin guards propios"`).
      Hecho en la rama `reestructuracion` (`7b49a48`).
- [x] **NO PUSH** (hasta confirmación del usuario). `main` y `origin/main`
      intactos.

---

## 5) Ruta alternativa analizada: "ver de dónde saca los links CanalesOnline"

- Los **enlaces** ya salen del `js/script-ch.js` remoto (secciones
  canales/enlaces/mapeo) que **YA se sincronizan**: TNT resuelve a
  `cvatt.html→cvattpro_token.html?get=TNT_Sports_HD` (opción 1),
  `canalesparatodos_ext.html?stream=TNT...` (opción 2), `ciades` (opción 3).
- Los **tokens** los emite el CDN (`cdn.cvattv.com.ar` / `chromecast...`) vía
  redirección y se cachean en `sessionStorage` (`token` / `cvatt_token_*`).
- Conclusión: **no hay una fuente de links distinta**; la réplica byte-a-byte
  ya es "sacar los links de donde los saca CanalesOnline". La alternativa no
  aporta una bóveda nueva → se descarta.

---

## 6) Riesgos / supuestos

- **Cookies de dominio `*.cvattv.com.ar`**: se asume que el usuario prueba
  desde el mismo navegador/perfil que usa la original. En incógnito también
  puede fallar la original (confirma que es del CDN, no del clon).
- **Cambios futuros del CDN**: si el token cambia, afecta a ambos sitios por
  igual (mismo código). El sync mantendrá la paridad automáticamente.
- **`asd.js` como copia de `cHV0by...js`**: cualquier página vieja que lo
  referencie sigue con el mismo comportamiento de la original (aunque la
  original ya no lo sirve).
- La original puede reintroducir un modal/paywall que el clon **no debe**
  traer: mitigación = verificación periódica con `grep` (Fase 3) y mantener
  `script-config.js`/`script-canalespro.js` fuera del sync.

---

## 7) Checklist general de avance

- [x] Diagnóstico de paridad completado (desvíos identificados).
- [x] Paywall ubicado en el remoto y confirmada su ausencia en el clon.
- [x] Plan aprobado por el usuario (alcance, gratis, diseño propio).
- [x] FASE 1 — Limpiar `PATCHES` + regla asd.js.
- [x] FASE 2 — Sync byte-idéntico al remoto.
- [x] FASE 3 — Verificación gratis (automatizada; la comprobación en navegador
      queda para FASE 5).
- [x] FASE 4 — Validación automatizada.
- [x] FASE 5 — Prueba manual (usuario): las 3 opciones de TNT reproducen.
- [x] FASE 6 — Commit único + PR #1 mergeado + producción Netlify verificada
      (rama `reestructuracion` como respaldo).

---

## 8) Estado operativo (06/09/2026)

- **Producción publicada**: `https://fuchibolparatodos.netlify.app` — `main` ==
  `origin/main` (merge de PR #1). Verificado: index con marca propia, opciones
  de TNT 200, sin modal, sin bloqueo.
- **Netlify duplicado a eliminar**: `fuchibolparatodos1.netlify.app` (mismo
  repo, contenido idéntico). Se conserva `fuchibolparatodos`. El borrado se
  hace desde el dashboard (Danger Zone) con la cuenta del usuario.
- **Rama `reestructuracion`** (`55100ff`) conservada como respaldo/rollback;
  local de trabajo actual: `main`.
- Observación: un dry-run detectó una variación transitoria de un archivo en el
  remoto (CDN/edge); las corridas posteriores fueron idempotentes ("Sin
  cambios"). Si reaparece, el sync es idempotente y no rompe nada, solo podría
  alternar un archivo si el remoto fluctúa (mitigado por "commit solo si
  cambió").

---

## 9) Autosustentabilidad (06/09/2026)

Objetivo: el clon debe **"sustentarse solo"**: si la original agrega o quita
opciones/canales/servidores, se replica automáticamente, sin intervención.

### Reglas del sync (seguir al remoto)

- La validación de TNT **ya no exige exactamente 3 opciones**. Nueva regla
  (`validarTntRelativo` en `scripts/check-updates.js`): pipeline resuelve OK +
  **al menos 1 opción** + todos los servidores referenciados existen localmente.
  Si la original pasa de 3→2 o 3→4, se copia el estado remoto (y se avisa).
  Si quedara 0 opciones o un server sin archivo, se descarta (safe).
- Se conservan 3 validaciones que evitan "copiar algo roto": sintaxis JS,
  pipeline, servidores presentes. Salidas `exit != 0` → no se commitea.

### Workflow `sync-con-original` (`.github/workflows/sync.yml`)

- [x] Cron **cada 6 horas** (`'23 */6 * * *'`) + disparo manual
      (`workflow_dispatch`), con `concurrency`.
- [x] Corre `node scripts/check-updates.js` contra el remoto.
- [x] **Commitea/pushea a `main` solo si hubo cambios reales** → Netlify
      buildea únicamente cuando hay novedades (no se gastan builds por correr
      seguido). Cambiar frecuencia editando el cron (documentado en el archivo).
- [x] Identidad de commit: `github-actions[bot]`.
- [x] Si el remoto falla / warnings / validaciones → sale != 0, NO commitea.

### Workflow `vigia-gratis` (`.github/workflows/gratis-verification.yml`)

- [x] Cron **diario** + manual. **No commitea ni pushea** → no consume builds.
- [x] Controla en `fuchibolparatodos.netlify.app`: ausencia de marcadores de
      paywall/donaciones/guardas (`Bienvenido a Canales`, `8.000`,
      `FECHA_VALIDACION`, `bloqueoUS`, `canalesonline24@`, `MAX_PAGE_RELOADS`,
      etc.), opciones TNT 200 y que la opción 2 cargue el player `cHV0by` +
      `initializePlayer()`.
- [x] Si algo aparece → la corrida **falla en rojo** (alerta en GitHub).

### Poda de huérfanos (NO en v1)

- Si la original elimina una opción, el `.html` viejo queda en `servidores/`
  (inofensivo, ya no se sirve). No se borran automáticamente para no romper
  referencias de otras páginas. Podría agregarse una poda conservadora a futuro.

### Riesgo conocido

- Si la original inventara un mecanismo nuevo que exige código en
  `script-canalespro.js` (que NO se sincroniza por el paywall), habría que
  portar esa lógica a mano. Se detecta revisando los commits `auto:`.