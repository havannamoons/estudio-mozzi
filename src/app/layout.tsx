import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Estudio · Psicoanálisis Mozzi",
  description:
    "Teoría + quiz + simulacro de parcial. Cátedra Pino (ex Mozzi) UBA · Prácticos 1 a 9.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${lora.variable} h-full dark`}>
      <body className="min-h-full">{children}</body>
    </html>
  )
}
