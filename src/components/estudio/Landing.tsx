"use client"

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Check,
  FileCheck,
  Moon,
  Puzzle,
  Save,
  Smartphone,
  Type,
} from "lucide-react"
import { WHATSAPP_NUMERO } from "@/lib/constants"
import { BlobsBackground } from "./BlobsBackground"

/** Logo oficial de WhatsApp (monocromo, hereda el color del texto). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24.044 12.045.044 5.463.044.126 5.383.126 11.983c0 2.096.549 4.14 1.595 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.585 0 11.946-5.34 11.949-11.939a11.821 11.821 0 00-3.481-8.408z"/>
    </svg>
  )
}

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
              <WhatsAppIcon className="h-5 w-5" />
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
          <WhatsAppIcon className="h-6 w-6" />
          <span className="hidden pr-1 font-semibold sm:inline">Comprar</span>
        </a>
      )}
    </>
  )
}
