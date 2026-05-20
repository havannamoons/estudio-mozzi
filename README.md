# Estudio · Psicoanálisis Mozzi

App de estudio para el primer parcial de **Psicoanálisis Freud · Cátedra Pino (ex Mozzi) · UBA** — Prácticos 1 a 9.

Tres modos:

- **Teoría** — bloques didácticos por tema con referentes clínicos, tip de parcial y bibliografía.
- **Quiz** — preguntas multiple-choice con explicación al responder. Progreso guardado en `localStorage`.
- **Simulacro de parcial** — preguntas mezcladas al azar de todos los temas, score final con desglose por tema y revisión de errores.

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS 4 + shadcn/ui (neutral) + glassmorphism dark mode
- Inter (sans) + Lora (serif) vía `next/font`
- Persistencia en `localStorage` (sin backend)

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
pnpm build
pnpm start
```

## Deploy

Pensado para desplegarse en Vercel — `git push` a `main` dispara redeploy automático.

## Estructura

```
src/
├── app/                       Layout, page, globals.css
├── components/estudio/        Componentes de la app (Header, Sidebar, Quiz, SimulacroMode, etc.)
├── components/ui/             Primitivos shadcn (button, card, input)
└── lib/
    ├── data/temas.ts          8 temas con teoría + quiz (~60 preguntas)
    ├── types.ts, constants.ts, helpers.ts
    └── hooks/                 useEstudio, useTheme, useToast
```
