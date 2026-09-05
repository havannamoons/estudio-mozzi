import { Bienvenida } from "@/components/landing/Bienvenida"
import { LandingLunar } from "@/components/landing/LandingLunar"

/**
 * Home de Estudio Lunar: la hoja de bienvenida por encima y la landing debajo.
 *
 * OJO: las dos van adentro de `.lunar`. Ahí viven las variables de color de la
 * marca (--lila, --crema, --noche…). Si la bienvenida queda afuera, sus colores
 * no resuelven y la pantalla se dibuja transparente.
 */
export default function Home() {
  return (
    <div className="lunar">
      <Bienvenida />
      <LandingLunar />
    </div>
  )
}
