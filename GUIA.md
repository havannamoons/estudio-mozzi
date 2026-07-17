# 📚 Guía de Estudio Mozzi — cómo funciona y cómo venderlo

Guía práctica para vos (Ro). Todo lo importante en un solo lugar.
Última actualización: 2026-07-17.

---

## 🔗 Enlaces importantes

| Qué | Link |
|---|---|
| **La app** (lo que usan tus compradoras) | https://estudio-mozzi-i3ao.vercel.app |
| **Tu panel** (para activar compradoras) | https://estudio-mozzi-i3ao.vercel.app/panel |
| Panel de Supabase (base de datos) | https://supabase.com/dashboard/project/esbrpjlwavnwdykygcxk |
| Google Cloud (login) | https://console.cloud.google.com |
| Código en GitHub | https://github.com/havannamoons/estudio-mozzi |

Tu cuenta de administradora: **havannamoons@gmail.com** (es la única que puede activar gente).

---

## 🛒 Cómo se vende (el flujo completo)

1. Le pasás el link de **la app** a una compradora.
2. Ella entra → toca **"Continuar con Google"** → se loguea con su Gmail.
3. Ve la pantalla **"Cuenta pendiente"** (todavía no la activaste).
4. Te paga (transferencia, MercadoPago manual, lo que arreglen).
5. **Vos la activás** desde tu panel (ver abajo). ✅
6. Ella toca **"Ya me activaron"** y entra a estudiar.

---

## ✅ Cómo activar una compradora (lo más común)

### Opción A — Panel (recomendado, desde compu o celu)
1. Entrá a **tu panel**: https://estudio-mozzi-i3ao.vercel.app/panel
2. Logueate con **havannamoons@gmail.com**.
3. En **"Esperando aprobación"** vas a ver a quien se registró.
   - Si no aparece, tocá **"Actualizar"**.
4. Tocá **"Activar"** al lado de su email. ¡Listo! 🎉

> El panel también te deja **quitar acceso** (por si alguien pidió reembolso).

### Opción B — SQL (respaldo, por si el panel falla)
En Supabase → **SQL Editor** → pegá esto (cambiando el mail) y "Run":
```sql
update public.perfiles set habilitado = true where email = 'MAILDEELLA@gmail.com';
```

---

## 🔀 Los interruptores (en `src/lib/constants.ts`)

La app tiene 3 "perillas". Para cambiarlas hay que editar el código y volver a publicar (ver "Cómo publicar cambios").

| Interruptor | Qué hace |
|---|---|
| `APP_PAUSADA` | `true` = el link online muestra "No disponible por ahora" (nadie entra). `false` = la app funciona. **En tu compu nunca se pausa**, siempre podés trabajar. |
| `ACCESO_ABIERTO` | `true` = app gratis para todos, sin login. `false` = login con Google + aprobación (modo venta, **estado actual**). |
| `ADMIN_EMAIL` | Tu email. Es quien puede entrar al panel. |

**Estado actual (modo venta):** `APP_PAUSADA = false`, `ACCESO_ABIERTO = false`.

### Recetas rápidas
- **Cerrar la app para todos un rato:** `APP_PAUSADA = true`.
- **Volver a abrirla:** `APP_PAUSADA = false`.
- **Volver a regalarla gratis (sin login):** `ACCESO_ABIERTO = true`.

---

## 🚀 Cómo publicar cambios (que se vean en el link online)

Pensá que hay **dos copias**: la de tu compu 💻 y la de internet 🌐.

- **Commit** = guardar una foto de los cambios.
- **Push** = mandar esa foto a internet (Vercel actualiza el link solo en ~1-2 min).

Si estás con Claude, le decís *"hacé commit y push"* y listo.

### Ver la app en tu compu (sin tocar el link online)
- Se levanta el servidor local con `pnpm dev` y se abre **http://localhost:3000**.
- Ahí ves tus cambios al instante, sin afectar a nadie.

---

## 🎨 Colores (decisión de diseño)

La app usa **solo dos colores** con significado:
- 🟢 **Verde** (`emerald` / `teal`) = todo lo bueno y la marca.
- 🔴 **Rojo** = todo lo de error (respuestas mal, "para recordar", etc.).

Sin naranjas, amarillos, violetas ni azules.

---

## 🔒 Seguridad

- La **clave secreta** de Supabase que se había filtrado ya está **anulada** (17/7). ✔️
- El código solo usa la **clave pública** (inofensiva, protegida por RLS).
- Solo **havannamoons@gmail.com** puede activar gente (lo garantizan las políticas RLS de la base, no solo la pantalla).

---

## 🧩 Cómo está armado (técnico, por si hace falta)

- **App:** Next.js (React) + Tailwind. Deploy en Vercel (automático al hacer push).
- **Login:** Supabase Auth + Google OAuth (app de Google **publicada / en producción**).
- **Base de datos:** Supabase, tabla `perfiles` (columnas: `id`, `email`, `habilitado`, `creado_en`).
  - Al registrarse, cada persona entra con `habilitado = false` (pendiente).
  - Activar = poner `habilitado = true` (lo hace el panel o el SQL).
- **Archivos clave:**
  - `src/lib/constants.ts` — los interruptores.
  - `src/components/estudio/AdminPanel.tsx` + `src/app/panel/page.tsx` — el panel.
  - `src/lib/hooks/useAuth.ts` + `src/lib/supabase.ts` — el login.

---

## 💡 Ideas para más adelante (cuando quieras)

- **Cobro automático con Mercado Pago:** la compradora paga y se activa sola ("cobrar dormida").
- **Código de un solo uso:** le mandás un código al pagar y se activa sola.

Cuando quieras alguna de estas, se la pedís a Claude y la armamos. 😉
