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
  metadataBase: new URL("https://estudio-mozzi-i3ao.vercel.app"),
  title: "Estudio Mozzi · Psicoanálisis Freud (Parcial + Final)",
  description:
    "Teoría, quiz y simulacro para Psicoanálisis Freud · Cát. Pino (ex Mozzi) UBA. 19 temas y +120 preguntas: del parcial (prácticos 1 a 9) al final. Con dark mode y progreso guardado.",
  applicationName: "Estudio Mozzi",
  authors: [{ name: "Estudio Mozzi" }],
  keywords: [
    "Psicoanálisis",
    "Freud",
    "UBA",
    "Psicología",
    "Cátedra Pino",
    "Mozzi",
    "parcial",
    "final",
    "resumen",
  ],
  openGraph: {
    title: "Estudio Mozzi · Psicoanálisis Freud",
    description:
      "Teoría + Quiz + Simulacro. 19 temas y +120 preguntas, del parcial al final. Cát. Pino (ex Mozzi) UBA.",
    type: "website",
    locale: "es_AR",
    siteName: "Estudio Mozzi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Mozzi · Psicoanálisis Freud",
    description:
      "Teoría + Quiz + Simulacro. 19 temas y +120 preguntas, del parcial al final.",
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
