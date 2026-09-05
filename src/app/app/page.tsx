import { redirect } from "next/navigation"
import { MATERIA_DEFAULT } from "@/lib/materias"

/**
 * `/app` era EL link de la app cuando había una sola materia — es el que
 * tienen guardado las que ya compraron. Lo mantenemos vivo mandándolo a la
 * materia por defecto en vez de romperlo.
 */
export default function AppPage() {
  redirect(`/app/${MATERIA_DEFAULT}`)
}
