import { notFound } from "next/navigation"
import { EstudioApp } from "@/components/estudio/EstudioApp"
import { esJugable, getMateria, materiasDisponibles } from "@/lib/materias"

/** Pre-genera una página por materia disponible. */
export function generateStaticParams() {
  return materiasDisponibles().map((m) => ({ materia: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ materia: string }>
}) {
  const { materia: slug } = await params
  const materia = getMateria(slug)
  if (!materia) return {}
  return {
    title: `Estudio Lunar · ${materia.nombre}`,
    description: materia.descripcion,
  }
}

export default async function MateriaPage({
  params,
}: {
  params: Promise<{ materia: string }>
}) {
  const { materia } = await params
  if (!esJugable(materia)) notFound()
  // key = slug: al cambiar de materia se remonta la app, así no queda estado
  // (tema activo, simulacro a medio hacer) de la materia anterior.
  return <EstudioApp key={materia} slug={materia} />
}
