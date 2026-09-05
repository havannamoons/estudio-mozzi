"use client"

import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Escucha el micrófono para SABER SI ESTÁS HABLANDO, nada más.
 *
 * No graba, no transcribe y no manda nada a ningún servidor: el audio se
 * analiza en el navegador y se descarta cuadro a cuadro. Lo único que sale de
 * acá son dos números, el nivel de sonido y cuántos segundos hablaste.
 *
 * Por qué existe: explicar en voz alta contra una pantalla muda se siente
 * absurdo, y a los treinta segundos uno baja la voz o se pasa a "pensarlo".
 * Ver las ondas moverse es la señal de que del otro lado hay algo escuchando, y
 * si te callás se aplanan, lo cual es el recordatorio más honesto posible.
 *
 * El nivel vive en una `ref` a propósito: se actualiza sesenta veces por
 * segundo y meterlo en el estado de React haría re-renderizar toda la pantalla
 * sesenta veces por segundo para animar unas barritas.
 */

export type EstadoMic =
  | "inactivo"
  | "pidiendo"
  | "activo"
  | "denegado"
  | "no-soportado"
  | "error"

/** Por debajo de esto es ruido de ambiente, no voz. */
const UMBRAL_VOZ = 0.025

export function useMicrofono() {
  const [estado, setEstado] = useState<EstadoMic>("inactivo")
  /** Segundos en los que efectivamente se detectó voz. */
  const [segundosHablados, setSegundosHablados] = useState(0)
  /** Para el cartelito de "no te escucho". Se actualiza pocas veces por segundo. */
  const [hablando, setHablando] = useState(false)

  /** Nivel 0..1, para dibujar. Ref para no re-renderizar por cuadro. */
  const nivelRef = useRef(0)
  /* Espectro crudo, para las barras. El parámetro `<ArrayBuffer>` no es
     decorativo: sin él TypeScript infiere `ArrayBufferLike`, que incluye
     SharedArrayBuffer, y la Web Audio API no lo acepta. */
  const espectroRef = useRef<Uint8Array<ArrayBuffer> | null>(null)

  const streamRef = useRef<MediaStream | null>(null)
  const ctxRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const rafRef = useRef<number | null>(null)
  /** Milisegundos acumulados con voz, sin pasar por el estado. */
  const msHabladosRef = useRef(0)
  const ultimoRef = useRef(0)

  const apagar = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    rafRef.current = null
    streamRef.current?.getTracks().forEach((t) => t.stop())
    streamRef.current = null
    void ctxRef.current?.close()
    ctxRef.current = null
    analyserRef.current = null
    nivelRef.current = 0
    setHablando(false)
    setEstado((e) => (e === "activo" ? "inactivo" : e))
  }, [])

  const activar = useCallback(async () => {
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setEstado("no-soportado")
      return
    }
    setEstado("pidiendo")
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream

      const Ctx =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      const ctx = new Ctx()
      ctxRef.current = ctx
      const fuente = ctx.createMediaStreamSource(stream)
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 512
      /* Suavizado alto: sin esto las barras tiemblan como estática y se lee
         como un error de la página en vez de como una voz. */
      analyser.smoothingTimeConstant = 0.75
      fuente.connect(analyser)
      analyserRef.current = analyser
      espectroRef.current = new Uint8Array(analyser.frequencyBinCount)

      msHabladosRef.current = 0
      ultimoRef.current = performance.now()
      setSegundosHablados(0)
      setEstado("activo")

      const onda = new Uint8Array(analyser.fftSize)
      let ultimoAvisoHablando = 0
      let ultimoVolcadoSegundos = 0

      const tick = () => {
        const ahora = performance.now()
        const delta = ahora - ultimoRef.current
        ultimoRef.current = ahora

        analyser.getByteTimeDomainData(onda)
        // RMS de la onda, centrada en 128.
        let suma = 0
        for (let i = 0; i < onda.length; i++) {
          const v = (onda[i] - 128) / 128
          suma += v * v
        }
        const rms = Math.sqrt(suma / onda.length)
        nivelRef.current = Math.min(1, rms * 3.2)

        if (espectroRef.current) analyser.getByteFrequencyData(espectroRef.current)

        const hayVoz = rms > UMBRAL_VOZ
        if (hayVoz) msHabladosRef.current += delta

        // El cartel y el contador no necesitan 60 Hz.
        if (ahora - ultimoAvisoHablando > 250) {
          ultimoAvisoHablando = ahora
          setHablando(hayVoz)
        }
        if (ahora - ultimoVolcadoSegundos > 500) {
          ultimoVolcadoSegundos = ahora
          setSegundosHablados(Math.round(msHabladosRef.current / 1000))
        }

        rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    } catch (err) {
      const nombre = (err as DOMException)?.name
      setEstado(
        nombre === "NotAllowedError" || nombre === "SecurityError"
          ? "denegado"
          : nombre === "NotFoundError"
            ? "no-soportado"
            : "error",
      )
    }
  }, [])

  // Si la pantalla se desmonta a mitad de camino, el micrófono se libera.
  useEffect(() => () => apagar(), [apagar])

  return {
    estado,
    activar,
    apagar,
    nivelRef,
    espectroRef,
    analyserRef,
    hablando,
    segundosHablados,
  }
}

export type MicApi = ReturnType<typeof useMicrofono>
