"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Aparece cuando entra en pantalla. Se usa con cuentagotas — si TODO aparece
 * al scrollear, la página se siente de plantilla. Va solo en los bloques que
 * ganan algo con el suspenso.
 */
export function Revelar({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  /** Milisegundos de retraso, para escalonar hermanos. */
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Sin IntersectionObserver (navegador viejo) mostramos todo de una:
    // más vale sin animación que invisible.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`revela ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
