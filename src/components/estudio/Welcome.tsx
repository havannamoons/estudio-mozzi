"use client"

import {
  ArrowRight,
  BookOpen,
  FileCheck,
  GraduationCap,
  ListChecks,
  Puzzle,
  Type,
} from "lucide-react"

interface Props {
  onEmpezar: () => void
}

const MODOS = [
  {
    Icon: BookOpen,
    titulo: "Estudiar por tema",
    desc: "Teoría clara, con tips de parcial y bibliografía de cada práctico.",
  },
  {
    Icon: ListChecks,
    titulo: "Quiz",
    desc: "Preguntas con explicación y dificultad progresiva. Tu progreso se guarda.",
  },
  {
    Icon: Puzzle,
    titulo: "Match",
    desc: "Emparejá cada concepto con su caso o referente clínico.",
  },
  {
    Icon: Type,
    titulo: "Cloze",
    desc: "Completá las frases clave con el término que falta.",
  },
  {
    Icon: FileCheck,
    titulo: "Simulacro",
    desc: "Examen mezclado de todos los temas, con puntaje y desglose final.",
  },
]

const STATS = [
  { n: "19", label: "temas" },
  { n: "128", label: "preguntas" },
  { n: "5", label: "formas de estudiar" },
]

export function Welcome({ onEmpezar }: Props) {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-center px-4 py-8 sm:py-12">
      <div className="glass-strong animate-scale-in rounded-3xl p-6 sm:p-10">
        {/* Etiqueta */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/12 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
          <GraduationCap className="h-3.5 w-3.5" />
          Psicoanálisis · Freud · UBA
        </div>

        {/* Título + bajada */}
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Estudio Mozzi
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
          Todo lo que necesitás para rendir <strong>Psicoanálisis (Freud)</strong> de la
          Cát. Pino (ex Mozzi): teoría resumida, práctica y simulacro de examen — del
          parcial al final, en un solo lugar.
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-3 py-4 text-center"
            >
              <div className="font-serif text-3xl font-semibold text-emerald-600 tabular-nums dark:text-emerald-400">
                {s.n}
              </div>
              <div className="mt-0.5 text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Modos */}
        <div className="mt-6 space-y-2">
          {MODOS.map(({ Icon, titulo, desc }) => (
            <div
              key={titulo}
              className="glass-subtle flex items-start gap-3 rounded-2xl p-3"
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                  {titulo}
                </div>
                <div className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onEmpezar}
          className="btn-press mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:from-emerald-400 hover:to-emerald-500 sm:w-auto"
        >
          Empezar a estudiar
          <ArrowRight className="h-5 w-5" />
        </button>

        {/* Pie */}
        <p className="mt-5 text-[11px] leading-relaxed text-zinc-400 dark:text-zinc-500">
          Tu progreso se guarda solo en este dispositivo — no necesitás cuenta.
        </p>
      </div>
    </main>
  )
}
