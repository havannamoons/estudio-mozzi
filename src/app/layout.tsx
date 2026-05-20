import type { Metadata, Viewport } from "next"
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

// Script anti-flicker para el tema:
// Corre ANTES de hidratación de React, lee localStorage,
// y setea la clase `dark` en <html> de entrada.
// Evita el flash light→dark al cargar.
const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('tema_estudio');
    var d = t ? t === 'dark' : true;
    document.documentElement.classList.toggle('dark', d);
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${lora.variable} h-full dark`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  )
}
