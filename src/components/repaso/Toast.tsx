"use client"

import { useToast } from "@/lib/hooks/useToast"
import { cn } from "@/lib/utils"

export function ToastViewport() {
  const { toasts } = useToast()
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "animate-toast pointer-events-auto rounded-xl px-4 py-2.5 text-sm font-medium shadow-2xl backdrop-blur-xl",
            t.tipo === "error"
              ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
              : "border border-white/10 bg-gradient-to-r from-zinc-800 to-zinc-900 text-white",
          )}
        >
          {t.texto}
        </div>
      ))}
    </div>
  )
}
