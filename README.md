# Estudio Lunar

App de estudio para rendir finales y parciales. Seis modos de práctica, progreso
que se guarda, y acceso pago con activación automática.

**En vivo:** [estudio-next-swart.vercel.app](https://estudio-next-swart.vercel.app)

## Qué hace

Cargás una materia y la app te la hace practicar de seis maneras distintas,
porque leer apuntes no es lo mismo que poder recuperarlos de memoria:

| modo | qué hace |
|------|----------|
| **Teoría** | Bloques por tema, con bibliografía y puntos clave |
| **Quiz** | Multiple choice con explicación al responder |
| **Simulacro** | Preguntas mezcladas de todos los temas, con score y revisión de errores |
| **Cloze** | Completar el hueco en una definición |
| **Match** | Emparejar conceptos con sus definiciones |
| **Oral** | Responder hablando, con detección de voz |

Además: **racha** diaria para sostener el hábito, y **calibración**, que compara
lo seguro que estabas de una respuesta con si acertaste.

## Arquitectura

Las materias están separadas del motor de estudio (`src/lib/materias/`), así que
agregar una materia nueva es agregar datos, no tocar código.

```
src/
├── app/
│   ├── api/pago/crear      Crea la preferencia de pago en Mercado Pago
│   ├── api/pago/webhook    Recibe el aviso de pago y activa el acceso solo
│   ├── panel/              Panel de administración
│   └── page.tsx
├── components/estudio/     Los seis modos + login, paywall, racha, panel
├── lib/
│   ├── materias/           Contenido, separado del motor
│   ├── access.ts           Quién puede entrar y hasta cuándo
│   ├── plan.ts  racha.ts   Plan de estudio y seguimiento de días
│   ├── supabase.ts         Cliente del navegador
│   └── server/             Mercado Pago y Supabase con permisos de servidor
└── sql/ventas.sql          Tabla de ventas y sus políticas de acceso
```

## Stack

- **Next.js 16** (App Router, Turbopack) · React 19 · TypeScript
- **Supabase** — login con Google y base de datos, con RLS
- **Mercado Pago** (Checkout Pro) — el webhook valida la firma `x-signature`
  antes de dar acceso, así nadie se activa la cuenta mandando un pedido falso
- Tailwind CSS 4 + shadcn/ui · Inter + Lora vía `next/font`
- Deploy en Vercel

## Correrlo local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

Las claves van en `.env.local`, que no se sube (está en el `.gitignore`):

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
MP_ACCESS_TOKEN=
MP_WEBHOOK_SECRET=
```
