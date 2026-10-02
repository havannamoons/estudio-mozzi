import Link from "next/link"
import { MATERIAS } from "@/lib/materias"
import { WHATSAPP_NUMERO } from "@/lib/constants"
import { Carrusel } from "./Carrusel"
import { PreguntaJugable } from "./PreguntaJugable"
import { Revelar } from "./Revelar"
import {
  Estirandose,
  Estrellita,
  Flotando,
  Luna,
  LunaProta,
  Mancha,
  Saludando,
  Sentada,
} from "./Personajes"

const WA = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  "Hola Ro, quiero la app de Psicoanálisis 🌙",
)}`

/**
 * Estrellitas sueltas. Posiciones fijas (nunca al azar) para que el servidor
 * y el navegador dibujen lo mismo y no se rompa la hidratación.
 */
function Estrellas({
  puntos,
}: {
  puntos: { top: string; left: string; size: number; color: string; delay: string }[]
}) {
  return (
    <>
      {puntos.map((p, i) => (
        <span
          key={i}
          className="titila pointer-events-none absolute"
          style={{ top: p.top, left: p.left, animationDelay: p.delay }}
          aria-hidden="true"
        >
          <Estrellita size={p.size} color={p.color} />
        </span>
      ))}
    </>
  )
}

const MODOS = [
  {
    nombre: "Teoría",
    desc: "El tema explicado en bloques cortos, con los referentes clínicos al lado.",
    panel: "panel-cielo",
    dibujo: "sentada",
    color: "#2F5BD4",
  },
  {
    nombre: "Quiz",
    desc: "Múltiple opción, de las de definición a las de articulación.",
    panel: "panel-coral",
    dibujo: "estirandose",
    color: "#C93A1E",
  },
  {
    nombre: "Match",
    desc: "Unir cada concepto con su referente. Rápido y adictivo.",
    panel: "panel-menta",
    dibujo: "flotando",
    color: "#0E8F6E",
  },
  {
    nombre: "Cloze",
    desc: "Frases a las que les falta el término exacto. Te obliga a producirlo.",
    panel: "panel-dorado",
    dibujo: "saludando",
    color: "#C97F0D",
  },
  {
    nombre: "Simulacro",
    desc: "Todo mezclado, sin decirte de qué tema viene cada pregunta.",
    panel: "panel-lila",
    dibujo: "luna",
    color: "#5A2FD6",
  },
] as const

function DibujoDeTarjeta({ cual, color }: { cual: string; color: string }) {
  if (cual === "sentada") return <Sentada size={230} color={color} />
  if (cual === "estirandose") return <Estirandose size={225} color={color} />
  if (cual === "flotando") return <Flotando size={240} color={color} />
  if (cual === "saludando") return <Saludando size={225} color={color} />
  return <Luna size={210} color={color} />
}

export function LandingLunar() {
  const disponibles = MATERIAS.filter((m) => m.estado === "disponible")
  const proximas = MATERIAS.filter((m) => m.estado === "proximamente")

  return (
    <div className="lunar">
      {/* ============================================================
          NAV
          ============================================================ */}
      <header className="relative z-30 mx-auto flex max-w-[64rem] items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Luna size={40} />
          <span className="serif text-[17px] font-semibold">Estudio Lunar</span>
        </Link>
        <nav className="flex items-center gap-5">
          <a
            href="#materias"
            className="hidden text-[15px] font-bold hover:text-[var(--lila)] sm:block"
          >
            Materias
          </a>
          <Link
            href="/app/psicoanalisis"
            className="btn-lunar btn-noche !px-5 !py-2.5 text-[15px]"
          >
            Entrar
          </Link>
        </nav>
      </header>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden px-6 pt-6 pb-24">
        <div className="pointer-events-none absolute -top-28 -right-36 hidden lg:block">
          <Mancha size={430} color="#ECE5FA" />
        </div>
        <Estrellas
          puntos={[
            { top: "14%", left: "5%", size: 24, color: "#FFAE24", delay: "0s" },
            { top: "36%", left: "42%", size: 14, color: "#7A4DFF", delay: "1.1s" },
            { top: "68%", left: "8%", size: 18, color: "#FF5C3D", delay: "2.1s" },
            { top: "8%", left: "62%", size: 16, color: "#17C79A", delay: "0.6s" },
            { top: "52%", left: "36%", size: 11, color: "#FFAE24", delay: "1.7s" },
            { top: "84%", left: "54%", size: 15, color: "#7A4DFF", delay: "0.35s" },
            { top: "22%", left: "76%", size: 13, color: "#FF5C3D", delay: "2.6s" },
            { top: "58%", left: "88%", size: 20, color: "#17C79A", delay: "1.35s" },
          ]}
        />

        <div className="contenido relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="t-gigante mb-7">Freud, pero jugando.</h1>
            <p className="mb-9 max-w-lg text-[19px] leading-relaxed text-[var(--noche)]/70">
              Preparate el final de Psicoanálisis contestando, no releyendo.
              Psicología · UBA.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/app/psicoanalisis" className="btn-lunar btn-dorado">
                Entrar
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lunar btn-fantasma !px-0"
              >
                Comprarla
              </a>
            </div>
          </div>

          {/* La Luna sola: el que saluda se fue abajo a la izquierda, lejos */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="flota">
              <LunaProta size={330} className="max-w-full" />
            </div>
          </div>
        </div>

        {/* Se asoma desde el borde izquierdo, a la altura de los botones */}
        <div className="asoma asoma-izq bottom-0">
          <Saludando size={290} color="#4C7DFF" />
        </div>
      </section>

      {/* ============================================================
          CARRUSEL DE MODOS
          ============================================================ */}
      <section className="relative px-6 pb-24">
        <Estrellas
          puntos={[
            { top: "6%", left: "34%", size: 15, color: "#FFAE24", delay: "0.4s" },
            { top: "12%", left: "88%", size: 19, color: "#7A4DFF", delay: "1.9s" },
            { top: "92%", left: "16%", size: 13, color: "#FF5C3D", delay: "1.2s" },
          ]}
        />
        <div className="contenido">
          <Revelar>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <h2 className="t-grande max-w-md">
                Cinco maneras de meterse en el mismo tema
              </h2>
              <span className="pb-2 text-[14px] font-bold text-[var(--noche)]/40">
                deslizá →
              </span>
            </div>
          </Revelar>

          <Carrusel cantidad={MODOS.length + 1}>
            {MODOS.map((m) => (
              <article
                key={m.nombre}
                className={`panel ${m.panel} relative flex min-h-[24rem] w-[clamp(15.5rem,74vw,19rem)] flex-col overflow-hidden !p-7`}
              >
                <h3 className="serif mb-3 text-[2.1rem]">{m.nombre}</h3>
                <p className="max-w-[13.5rem] text-[15px] leading-relaxed font-semibold opacity-75">
                  {m.desc}
                </p>
                {/* El muñequito se sale de la tarjeta: por eso se lee dibujado */}
                <div className="pointer-events-none absolute -right-10 -bottom-12">
                  <DibujoDeTarjeta cual={m.dibujo} color={m.color} />
                </div>
              </article>
            ))}

            <article className="panel panel-palido flex min-h-[24rem] w-[clamp(15.5rem,74vw,19rem)] flex-col justify-center !p-7">
              <h3 className="serif mb-5 text-[1.9rem] leading-tight">
                Los cinco, con el mismo contenido.
              </h3>
              <Link href="/app/psicoanalisis" className="btn-lunar btn-noche w-fit">
                Probarlos
              </Link>
            </article>
          </Carrusel>
        </div>
      </section>

      {/* ============================================================
          PROBALA — mini-partida de 3 preguntas
          ============================================================ */}
      <section className="relative px-6 pb-24">
        <div className="contenido">
          <div className="panel panel-palido relative overflow-hidden">
            <Estrellas
              puntos={[
                { top: "10%", left: "40%", size: 15, color: "#7A4DFF", delay: "0.3s" },
                { top: "78%", left: "6%", size: 20, color: "#FFAE24", delay: "1.6s" },
                { top: "30%", left: "92%", size: 13, color: "#FF5C3D", delay: "2.4s" },
                { top: "60%", left: "50%", size: 11, color: "#17C79A", delay: "0.9s" },
                { top: "4%", left: "8%", size: 17, color: "#FFAE24", delay: "1.4s" },
              ]}
            />
            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <Revelar>
                <h2 className="t-grande mb-6">No te lo cuento. Probalo.</h2>
                <p className="max-w-sm text-[18px] leading-relaxed text-[var(--noche)]/70">
                  Tres preguntas reales del banco de la materia. Aciertes o no, vas
                  a ver la explicación — que es lo que de verdad estás comprando.
                </p>
              </Revelar>
              <Revelar delay={120}>
                <PreguntaJugable />
              </Revelar>
            </div>
          </div>
        </div>

        {/* Se asoman desde los dos márgenes, fuera del panel */}
        <div className="asoma asoma-izq top-24">
          <div className="flota" style={{ animationDelay: "0.8s" }}>
            <Sentada size={300} color="#C3B0EA" />
          </div>
        </div>
        <div className="asoma asoma-der -bottom-4">
          <Saludando size={250} color="#FF5C3D" />
        </div>
      </section>

      {/* ============================================================
          POR QUÉ
          ============================================================ */}
      <section className="px-6 pb-24">
        <div className="contenido">
          <div className="panel panel-noche relative overflow-hidden">
            <Estrellas
              puntos={[
                { top: "12%", left: "8%", size: 17, color: "#FFAE24", delay: "0s" },
                { top: "84%", left: "88%", size: 13, color: "#17C79A", delay: "1.2s" },
                { top: "26%", left: "62%", size: 12, color: "#FFAE24", delay: "2.2s" },
                { top: "58%", left: "30%", size: 15, color: "#C3B0EA", delay: "0.7s" },
                { top: "6%", left: "44%", size: 10, color: "#FF5C3D", delay: "1.8s" },
              ]}
            />
            <div className="pointer-events-none absolute -bottom-16 -left-20 hidden md:block">
              <div className="flota" style={{ animationDelay: "1.5s" }}>
                <Flotando size={390} color="#17C79A" />
              </div>
            </div>

            <div className="relative md:pl-[40%]">
              <Revelar>
                <h2 className="t-grande mb-8">Por qué las preguntas son así</h2>
                <div className="max-w-xl space-y-5 text-[18px] leading-relaxed text-[var(--crema)]/80">
                  <p>
                    Las opciones incorrectas no son relleno. Cada una es una
                    confusión que de verdad se tiene con ese tema, así que
                    equivocarte te dice cuál tenés.
                  </p>
                  <p>
                    Y son preguntas, no fichas para leer. Releer el apunte se siente
                    productivo y no lo es; sacar la respuesta de tu cabeza sí deja
                    huella.
                  </p>
                  <p className="text-[var(--crema)]">
                    Estudio Psicología en la UBA. Todo esto salió del programa de la
                    cátedra, no de un resumen de internet.
                  </p>
                </div>
              </Revelar>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MATERIAS — los números viven acá, que es donde son ciertos
          ============================================================ */}
      <section id="materias" className="relative px-6 pb-24">
        <div className="contenido relative">
          <Estrellas
            puntos={[
              { top: "2%", left: "56%", size: 16, color: "#FF5C3D", delay: "0.9s" },
            { top: "34%", left: "94%", size: 13, color: "#FFAE24", delay: "2.0s" },
            { top: "70%", left: "2%", size: 18, color: "#7A4DFF", delay: "1.1s" },
            { top: "96%", left: "70%", size: 11, color: "#17C79A", delay: "0.5s" },
            ]}
          />
          <Revelar>
            <h2 className="t-grande mb-10">Las materias</h2>
          </Revelar>

          {disponibles.map((m) => (
            <Revelar key={m.slug}>
              <div className="fila flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 py-7">
                <div className="min-w-0">
                  <h3 className="serif text-[clamp(1.6rem,3.4vw,2.4rem)]">
                    {m.nombreLargo}
                  </h3>
                  <p className="mt-1.5 text-[15px] font-semibold text-[var(--noche)]/55">
                    {m.carrera}
                    {m.catedra ? ` · ${m.catedra}` : ""}
                  </p>
                  {m.datos && (
                    <p className="mt-1 text-[14px] font-semibold text-[var(--noche)]/38">
                      {m.datos}
                    </p>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <Link href={`/app/${m.slug}`} className="btn-lunar btn-noche">
                    Entrar
                  </Link>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lunar btn-fantasma !px-0"
                  >
                    Comprarla
                  </a>
                </div>
              </div>
            </Revelar>
          ))}

          <Revelar delay={100}>
            <div className="mt-12">
              <p className="mb-5 text-[15px] font-bold tracking-wide text-[var(--noche)]/45">
                En camino
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {proximas.map((m) => (
                  <span
                    key={m.slug}
                    className="serif text-[clamp(1.3rem,2.6vw,1.8rem)] text-[var(--noche)]/30"
                  >
                    {m.nombre}
                  </span>
                ))}
              </div>
              <p className="mt-7 max-w-md text-[16px] leading-relaxed text-[var(--noche)]/65">
                Si falta la tuya, escribime. La próxima la elige quien la pide.
              </p>
            </div>
          </Revelar>
        </div>

        <div className="asoma asoma-der -bottom-10">
          <Saludando size={240} color="#17C79A" />
        </div>
      </section>

      {/* ============================================================
          CIERRE
          ============================================================ */}
      <section className="px-6 pb-8">
        <div className="contenido">
          <div className="panel panel-lila relative overflow-hidden text-center">
            <Estrellas
              puntos={[
                { top: "14%", left: "10%", size: 20, color: "#FBF6EF", delay: "0s" },
                { top: "72%", left: "86%", size: 16, color: "#FBF6EF", delay: "1.4s" },
                { top: "30%", left: "80%", size: 12, color: "#FBF6EF", delay: "2.1s" },
                { top: "84%", left: "22%", size: 14, color: "#FBF6EF", delay: "0.8s" },
                { top: "8%", left: "48%", size: 10, color: "#FBF6EF", delay: "1.6s" },
              ]}
            />
            <div className="respira mx-auto mb-8 w-fit">
              <LunaProta size={210} color="#FBF6EF" />
            </div>
            <h2 className="t-grande mb-9">Entrá y jugá una ronda.</h2>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/app/psicoanalisis" className="btn-lunar btn-noche">
                Entrar
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lunar btn-crema"
              >
                Escribirme
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8">
        <div className="contenido flex flex-col items-center justify-between gap-3 text-[14px] font-semibold text-[var(--noche)]/40 sm:flex-row">
          <span>Estudio Lunar</span>
          <span>Buenos Aires</span>
        </div>
      </footer>
    </div>
  )
}
