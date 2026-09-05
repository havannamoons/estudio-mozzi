"use client"

import { createContext, useContext } from "react"
import type { MateriaCargada } from "./tipos"

const MateriaContext = createContext<MateriaCargada | null>(null)

/**
 * Envuelve la app de estudio y le dice a todos los modos (teoría, quiz, match,
 * cloze, simulacro) con qué materia están trabajando. Sin esto, cada componente
 * importaba el contenido de Freud directo y la app solo servía para una materia.
 */
export function MateriaProvider({
  valor,
  children,
}: {
  valor: MateriaCargada
  children: React.ReactNode
}) {
  return <MateriaContext.Provider value={valor}>{children}</MateriaContext.Provider>
}

export function useMateria(): MateriaCargada {
  const ctx = useContext(MateriaContext)
  if (!ctx) {
    throw new Error("useMateria() se usó fuera de <MateriaProvider>")
  }
  return ctx
}

/** Atajo: el contenido de la materia activa. */
export function useContenido() {
  return useMateria().contenido
}
