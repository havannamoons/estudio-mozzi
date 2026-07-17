"use client"

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Check,
  FileCheck,
  MessageCircle,
  Moon,
  Puzzle,
  Save,
  Smartphone,
  Type,
} from "lucide-react"
import { WHATSAPP_NUMERO } from "@/lib/constants"
import { BlobsBackground } from "./BlobsBackground"

const MENSAJE_WA = "¡Hola! Quiero comprar Estudio Mozzi 📚"
const LINK_WA = WHATSAPP_NUMERO
  ? `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(MENSAJE_WA)}`
  : ""

const MODOS = [
  {
    Icon: BookOpen,
    titulo: "Teoría por tema",
    desc: "Resúmenes claros de cada práctico, con los referentes clínicos y los tips de parcial.",
  },
  {
    Icon: Check,
    titulo: "Quiz con explicaciones",
    desc: "Ponés a prueba lo que sabés y cada respuesta te explica por qué.",
  },
  {
    Icon: FileCheck,
    titulo: "Simulacro de examen",
    desc: "Preguntas mezcladas de todos los temas, con puntaje y desglose al final.",
  },
  {
    Icon: Type,
    titulo: "Cloze (completar)",
    desc: "Completás la palabra clave de cada frase para fijar el vocabulario.",
  },
  {
    Icon: Puzzle,
    titulo: "Match (unir)",
    desc: "Unís conceptos con sus definiciones, jugando.",
  },
]

const EXTRAS = [
  { Icon: Moon, texto: "Modo oscuro" },
  { Icon: Save, texto: "Guarda tu progreso" },
  { Icon: Smartphone, texto: "Funciona en el celu" },
]

export function Landing() {
  return (
    <>
      <BlobsBackground />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:py-16">
        {/* HERO */}
        <section className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/12 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-emerald-700 uppercase dark:text-emerald-300">
              Psicoanálisis · Freud
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
            Estudio Mozzi
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            Teoría, quiz y simulacro para <strong>Psicoanálisis Freud</strong> ·
            Cát. Pino (ex Mozzi), UBA. Del parcial al final, todo en un solo lugar.
          </p>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {["19 temas", "+120 preguntas", "Parcial + Final"].map((s) => (
              <span
                key={s}
                className="glass rounded-full px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={LINK_WA || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!LINK_WA}
              className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-900/25 transition-all hover:from-emerald-400 hover:to-emerald-500 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              {LINK_WA ? "Comprar por WhatsApp" : "Comprar (falta cargar el número)"}
            </a>
            <Link
              href="/app"
              className="btn-press glass inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-base font-medium text-zinc-700 transition-all hover:bg-white/10 sm:w-auto dark:text-zinc-200"
            >
              Ya la compré · Entrar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="mt-16">
          <h2 className="mb-6 text-center font-serif text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Qué incluye
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {MODOS.map(({ Icon, titulo, desc }, i) => (
              <div
                key={titulo}
                className={`glass-strong rounded-2xl p-5${
                  i === MODOS.length - 1 && MODOS.length % 2 === 1
                    ? " sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.375rem)]"
                    : ""
                }`}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {titulo}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Extras */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {EXTRAS.map(({ Icon, texto }) => (
              <div
                key={texto}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"
              >
                <Icon className="h-4 w-4 text-emerald-500" /> {texto}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-zinc-400 dark:text-zinc-500">
          Estudio Mozzi · Psicoanálisis Freud · Cát. Pino (ex Mozzi) · UBA
        </footer>
      </main>

      {/* Botón flotante de WhatsApp (siempre visible) */}
      {LINK_WA && (
        <a
          href={LINK_WA}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Comprar por WhatsApp"
          className="btn-press fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 px-4 py-4 text-white shadow-xl shadow-emerald-900/30 transition-all hover:from-emerald-400 hover:to-emerald-500 sm:right-6 sm:bottom-6"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="hidden pr-1 font-semibold sm:inline">Comprar</span>
        </a>
      )}
    </>
  )
}
