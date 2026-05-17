"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import type { ToastMsg } from "@/lib/types"
import { uid } from "@/lib/helpers"

interface ToastCtx {
  toasts: ToastMsg[]
  push: (texto: string, tipo?: ToastMsg["tipo"]) => void
}

const Ctx = createContext<ToastCtx | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMsg[]>([])

  const push = useCallback((texto: string, tipo: ToastMsg["tipo"] = "success") => {
    const id = uid()
    setToasts((prev) => [...prev, { id, texto, tipo }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 2400)
  }, [])

  return <Ctx.Provider value={{ toasts, push }}>{children}</Ctx.Provider>
}

export function useToast() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>")
  return ctx
}
