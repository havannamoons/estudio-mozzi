import type { Metadata, Viewport } from "next"
import { Fraunces, Inter, Lora, Nunito } from "next/font/google"
import "./globals.css"
// El sistema visual de Estudio Lunar. Va acá y no en la home porque ahora lo
// usan también las pantallas de la app (login, acceso pendiente, etc.).
import "./landing.css"

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

// Tipografías de la marca Estudio Lunar (landing y catálogo).
// Fraunces para títulos: serif con carácter, "opsz" la hace más expresiva
// en tamaños grandes. Nunito para texto: redondeada y cálida.
// Sin `weight`: Fraunces es variable, así tenemos todo el rango de peso.
// Los ejes SOFT (redondez) y WONK (cursiva rara) son los que le dan el
// carácter — se ajustan por CSS en landing.css.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://estudio-next-swart.vercel.app"),
  title: "Estudio Lunar · Psicoanálisis Freud (Parcial + Final)",
  description:
    "Teoría, quiz, simulacro y examen oral para Psicoanálisis Freud (Psicología, UBA). 19 temas y +120 preguntas, del parcial al final, con el progreso guardado.",
  applicationName: "Estudio Lunar",
  authors: [{ name: "Estudio Lunar" }],
  keywords: [
    "Psicoanálisis",
    "Freud",
    "UBA",
    "Psicología",
    "parcial",
    "final",
    "resumen",
    "Estudio Lunar",
  ],
  openGraph: {
    title: "Estudio Lunar · Psicoanálisis Freud",
    description:
      "Teoría, quiz, simulacro y oral. 19 temas y +120 preguntas, del parcial al final. Psicología, UBA.",
    type: "website",
    locale: "es_AR",
    siteName: "Estudio Lunar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Lunar · Psicoanálisis Freud",
    description:
      "Teoría, quiz, simulacro y oral. 19 temas y +120 preguntas, del parcial al final.",
  },
}

// Viewport: width=device-width + zoom permitido hasta 5x (accesibilidad).
// NO usar maximumScale: 1 — bloquea zoom de usuarios con baja visión.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${lora.variable} ${fraunces.variable} ${nunito.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  )
}
