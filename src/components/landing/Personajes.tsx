/**
 * Los muñequitos de Estudio Lunar.
 *
 * Lenguaje de forma: cuerpo redondo chico + extremidades LARGAS Y FINAS.
 * Las versiones anteriores eran cuerpos gordos (pastilla, piedra, gota) y se
 * leían como íconos; los bracitos y piernas de fideo hacen que se lean
 * dibujados y permiten poses — que es lo que les da vida.
 *
 * Reglas:
 *   · Un color plano por muñequito, sin contorno y sin degradé.
 *   · Extremidades como trazo con punta redonda, bastante más finas que el
 *     cuerpo (esa diferencia de grosor es todo el truco).
 *   · Ojos CERRADOS — dos arquitos. Nada de boca.
 *   · Cachetitos coral: la firma de la familia.
 *   · Van GRANDES y cortados por el borde.
 */

interface PersonajeProps {
  className?: string
  size?: number
  color?: string
  giro?: number
  ojos?: boolean
}

/** Ojitos cerrados + cachetes. */
function CaraZen({
  cx,
  cy,
  sep = 13,
  escala = 1,
}: {
  cx: number
  cy: number
  sep?: number
  escala?: number
}) {
  const r = 7 * escala
  const arco = (x: number) => `M ${x - r} ${cy} q ${r} ${5.5 * escala} ${r * 2} 0`
  return (
    <g>
      <g fill="none" stroke="#2C2440" strokeWidth={3 * escala} strokeLinecap="round">
        <path d={arco(cx - sep)} />
        <path d={arco(cx + sep)} />
      </g>
      <ellipse
        cx={cx - sep - r * 0.8}
        cy={cy + 9 * escala}
        rx={5 * escala}
        ry={3.2 * escala}
        fill="#FF5C3D"
        opacity={0.5}
      />
      <ellipse
        cx={cx + sep + r * 0.8}
        cy={cy + 9 * escala}
        rx={5 * escala}
        ry={3.2 * escala}
        fill="#FF5C3D"
        opacity={0.5}
      />
    </g>
  )
}

/**
 * ANTEOJOS DE SOL. Reemplazan a los ojitos: tapan la cara entera, que es
 * justamente el chiste. Van con dos patillas cortas para que se lean como
 * anteojos y no como una venda.
 */
function AnteojosDeSol({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {/* Patillas */}
      <g stroke="#2C2440" strokeWidth={3} strokeLinecap="round">
        <path d={`M ${cx - 22} ${cy - 3} l -7 -3`} />
        <path d={`M ${cx + 22} ${cy - 3} l 7 -3`} />
      </g>
      {/* Cristales redonditos */}
      <circle cx={cx - 12} cy={cy} r={10.5} fill="#2C2440" />
      <circle cx={cx + 12} cy={cy} r={10.5} fill="#2C2440" />
      {/* Puente */}
      <path
        d={`M ${cx - 2} ${cy - 2} q 2 -2.5 4 0`}
        fill="none"
        stroke="#2C2440"
        strokeWidth={3}
        strokeLinecap="round"
      />
      {/* Un brillito en cada cristal: sin esto se ven dos manchas negras */}
      <g stroke="#FBF6EF" strokeWidth={2.2} strokeLinecap="round" opacity={0.5}>
        <path d={`M ${cx - 16} ${cy + 2} l 4 -5`} />
        <path d={`M ${cx + 8} ${cy + 2} l 4 -5`} />
      </g>
      {/* Cachetitos, que siguen siendo la firma */}
      <ellipse cx={cx - 26} cy={cy + 14} rx={5} ry={3.2} fill="#FF5C3D" opacity={0.5} />
      <ellipse cx={cx + 26} cy={cy + 14} rx={5} ry={3.2} fill="#FF5C3D" opacity={0.5} />
    </g>
  )
}

/** Grosor de las extremidades, en proporción al cuerpo. */
const FIDEO = { strokeWidth: 8, strokeLinecap: "round", fill: "none" } as const

/**
 * ESTIRÁNDOSE — brazos arriba, cuerpo largo. El de más energía.
 */
export function Estirandose({
  className,
  size = 200,
  color = "#7B9CFF",
  giro = 0,
  ojos = true,
  festeja = false,
  lentes = false,
}: PersonajeProps & { festeja?: boolean; lentes?: boolean }) {
  return (
    <svg
      viewBox="0 0 130 170"
      width={size}
      height={(size * 170) / 130}
      className={className}
      style={giro ? { transform: `rotate(${giro}deg)` } : undefined}
      aria-hidden="true"
    >
      {/* Cada brazo en su grupo: así pueden agitarse por separado y en
          contratiempo, que es lo que hace que se lea como festejo y no como
          un muñeco rígido moviéndose entero. */}
      <g
        className={festeja ? "brazo-festejo brazo-festejo-izq" : undefined}
        stroke={color}
        {...FIDEO}
      >
        <path d="M 42 66 C 26 52, 20 34, 26 18" />
      </g>
      <g
        className={festeja ? "brazo-festejo brazo-festejo-der" : undefined}
        stroke={color}
        {...FIDEO}
      >
        <path d="M 88 66 C 104 52, 110 34, 104 18" />
      </g>
      <g stroke={color} {...FIDEO}>
        {/* Piernas largas */}
        <path d="M 54 104 C 50 124, 52 142, 46 156" />
        <path d="M 76 104 C 80 124, 78 142, 84 156" />
      </g>
      {/* Cuerpo y cara van en el MISMO grupo: si la panza se mueve y la cara
          no, la cara se despega y se rompe la ilusión. */}
      <g className={festeja ? "panza-baila" : undefined}>
        <path
          d="M 65 26
             C 45 26, 33 44, 33 68
             C 33 92, 46 108, 65 108
             C 84 108, 97 92, 97 68
             C 97 44, 85 26, 65 26 Z"
          fill={color}
        />
        {ojos && !lentes && <CaraZen cx={65} cy={64} sep={12} />}
        {lentes && <AnteojosDeSol cx={65} cy={62} />}
      </g>
    </svg>
  )
}

/**
 * SENTADA — piernas colgando, bracitos apoyados. La más tranquila.
 */
export function Sentada({
  className,
  size = 200,
  color = "#4ECDA4",
  giro = 0,
  ojos = true,
}: PersonajeProps) {
  return (
    <svg
      viewBox="0 0 130 170"
      width={size}
      height={(size * 170) / 130}
      className={className}
      style={giro ? { transform: `rotate(${giro}deg)` } : undefined}
      aria-hidden="true"
    >
      <g stroke={color} {...FIDEO}>
        {/* Bracitos caídos a los costados */}
        <path d="M 38 72 C 24 82, 20 96, 26 108" />
        <path d="M 92 72 C 106 82, 110 96, 104 108" />
        {/* Piernas colgando, apenas cruzadas */}
        <path d="M 55 110 C 50 128, 56 142, 48 154" />
        <path d="M 75 110 C 82 128, 74 142, 86 152" />
      </g>
      <path
        d="M 65 30
           C 46 30, 35 47, 35 70
           C 35 94, 47 112, 65 112
           C 83 112, 95 94, 95 70
           C 95 47, 84 30, 65 30 Z"
        fill={color}
      />
      {ojos && <CaraZen cx={65} cy={66} sep={12} />}
    </svg>
  )
}

/**
 * ESTUDIANDO — con anteojitos y un libro en las manos. Es el de la pantalla
 * de bienvenida: cuando deslizás, `saludando` lo hace levantar el brazo.
 */
export function Estudiando({
  className,
  size = 240,
  color = "#FFAE24",
  giro = 0,
  saludando = false,
}: PersonajeProps & { saludando?: boolean }) {
  return (
    <svg
      viewBox="0 0 170 180"
      width={size}
      height={(size * 180) / 170}
      className={className}
      style={giro ? { transform: `rotate(${giro}deg)` } : undefined}
      aria-hidden="true"
    >
      {/* Extremidades un poco más gruesas: con un cuerpo gordito, los fideos
          finos de los otros muñequitos quedaban de arañita. */}
      <g stroke={color} fill="none" strokeWidth={11} strokeLinecap="round">
        {/* Piernas cruzadas, sentado */}
        <path d="M 66 128 C 56 146, 64 158, 48 162" />
        <path d="M 104 128 C 114 146, 106 158, 122 162" />
        {/* Brazo izquierdo */}
        <path d="M 38 104 C 28 116, 30 130, 42 136" />
      </g>

      {/* Brazo derecho: sostiene el libro, o saluda */}
      <g
        className={saludando ? "mano-saluda" : undefined}
        stroke={color}
        fill="none"
        strokeWidth={11}
        strokeLinecap="round"
      >
        {saludando ? (
          <path d="M 132 88 C 148 72, 152 50, 146 34" />
        ) : (
          <path d="M 132 104 C 142 116, 140 130, 128 136" />
        )}
      </g>

      {/* Cuerpo gordito: casi tan ancho como alto */}
      <path
        d="M 85 24
           C 55 24, 32 46, 32 78
           C 32 110, 54 132, 85 132
           C 116 132, 138 110, 138 78
           C 138 46, 115 24, 85 24 Z"
        fill={color}
      />

      {/* Ojos cerrados detrás de los anteojos */}
      <g fill="none" stroke="#2C2440" strokeWidth={2.8} strokeLinecap="round">
        <path d="M 62 74 q 8 5 16 0" />
        <path d="M 92 74 q 8 5 16 0" />
      </g>
      {/* Anteojitos */}
      <g fill="none" stroke="#2C2440" strokeWidth={3.2} opacity={0.9}>
        <circle cx={70} cy={73} r={14} />
        <circle cx={100} cy={73} r={14} />
        <path d="M 84 72 h 2" strokeWidth={3.6} strokeLinecap="round" />
        <path d="M 56 70 l -8 -4" strokeLinecap="round" />
        <path d="M 114 70 l 8 -4" strokeLinecap="round" />
      </g>
      {/* Cachetitos */}
      <ellipse cx={50} cy={92} rx={6} ry={3.8} fill="#FF5C3D" opacity={0.5} />
      <ellipse cx={120} cy={92} rx={6} ry={3.8} fill="#FF5C3D" opacity={0.5} />

      {/* El libro, adelante */}
      {!saludando && (
        <g>
          <rect
            x={48}
            y={128}
            width={74}
            height={42}
            rx={6}
            fill="#FBF6EF"
            stroke="#2C2440"
            strokeWidth={2.8}
          />
          <path
            d="M 85 130 v 38"
            stroke="#2C2440"
            strokeWidth={2.8}
            opacity={0.5}
          />
        </g>
      )}
    </svg>
  )
}

/**
 * SALUDANDO — un brazo levantado que se mueve. El brazo va en su propio
 * grupo para poder rotarlo desde el hombro; la animación vive en landing.css
 * y se acelera cuando le pasás el mouse por encima.
 */
export function Saludando({
  className,
  size = 200,
  color = "#FFAE24",
  giro = 0,
  ojos = true,
}: PersonajeProps) {
  return (
    <svg
      viewBox="0 0 130 170"
      width={size}
      height={(size * 170) / 130}
      className={className}
      style={giro ? { transform: `rotate(${giro}deg)` } : undefined}
      aria-hidden="true"
    >
      <g stroke={color} {...FIDEO}>
        {/* Brazo quieto */}
        <path d="M 38 74 C 24 84, 20 98, 26 110" />
        {/* Piernas */}
        <path d="M 54 108 C 50 128, 52 144, 46 158" />
        <path d="M 76 108 C 80 128, 78 144, 84 158" />
      </g>
      {/* Brazo que saluda — pivota desde el hombro */}
      <g className="mano-saluda" stroke={color} {...FIDEO}>
        <path d="M 92 70 C 106 58, 110 42, 104 28" />
      </g>
      <path
        d="M 65 28
           C 45 28, 33 46, 33 70
           C 33 94, 46 110, 65 110
           C 84 110, 97 94, 97 70
           C 97 46, 85 28, 65 28 Z"
        fill={color}
      />
      {ojos && <CaraZen cx={65} cy={66} sep={12} />}
    </svg>
  )
}

/**
 * FLOTANDO — de costado, extremidades sueltas. Se usa recostada, entrando
 * por el borde de un panel.
 */
export function Flotando({
  className,
  size = 200,
  color = "#FF7A5C",
  giro = -12,
  ojos = true,
}: PersonajeProps) {
  return (
    <svg
      viewBox="0 0 180 130"
      width={size}
      height={(size * 130) / 180}
      className={className}
      style={{ transform: `rotate(${giro}deg)` }}
      aria-hidden="true"
    >
      <g stroke={color} {...FIDEO}>
        {/* Brazos hacia atrás, como flotando en el agua */}
        <path d="M 62 44 C 42 32, 26 32, 14 40" />
        <path d="M 66 78 C 48 86, 32 88, 20 82" />
        {/* Piernas estiradas hacia la derecha */}
        <path d="M 118 52 C 140 46, 156 50, 166 60" />
        <path d="M 118 74 C 140 80, 154 80, 164 74" />
      </g>
      <path
        d="M 90 22
           C 68 22, 55 40, 55 62
           C 55 86, 69 102, 90 102
           C 112 102, 126 86, 126 62
           C 126 40, 112 22, 90 22 Z"
        fill={color}
      />
      {ojos && <CaraZen cx={90} cy={58} sep={12} />}
    </svg>
  )
}

/**
 * LUNA — el símbolo de la marca. Es la única forma sin extremidades:
 * conviene que el logo se lea igual a 30 px que a 300.
 */
const LUNA_SILUETA = `M 74 8
   C 40 10, 14 36, 14 62
   C 14 90, 38 112, 70 112
   C 80 112, 90 109, 97 104
   C 74 101, 55 84, 55 61
   C 55 38, 71 17, 95 12
   C 88 9, 81 8, 74 8 Z`

export function Luna({
  className,
  size = 160,
  color = "#FFAE24",
  giro = 0,
  ojos = true,
}: PersonajeProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      style={giro ? { transform: `rotate(${giro}deg)` } : undefined}
      role="img"
      aria-label="Luna, la mascota de Estudio Lunar"
    >
      <defs>
        {/* La cara se recorta contra la silueta: por más que se corra, ni un
            cachete puede quedar flotando fuera de la luna. */}
        <clipPath id="luna-silueta">
          <path d={LUNA_SILUETA} />
        </clipPath>
      </defs>
      <path d={LUNA_SILUETA} fill={color} />
      {ojos && (
        <g clipPath="url(#luna-silueta)">
          <CaraZen cx={34} cy={62} sep={10} escala={0.85} />
        </g>
      )}
    </svg>
  )
}

/**
 * LUNA PROTAGONISTA — la misma lunita, pero con bracitos y patitas para que
 * juegue de igual a igual con los bichitos.
 *
 * Va aparte de `Luna` a propósito: el logo tiene que leerse a 40 px, y a ese
 * tamaño los fideos se convierten en pelusa. Entonces `Luna` queda como
 * símbolo limpio y esta versión se usa grande, donde es personaje.
 */
export function LunaProta({
  className,
  size = 260,
  color = "#FFAE24",
  giro = 0,
  saludando = true,
}: PersonajeProps & { saludando?: boolean }) {
  return (
    <svg
      /* Lienzo con aire a la izquierda y arriba: el brazo que saluda rota y
         se salía del cuadro, y el SVG lo recortaba. */
      viewBox="-22 -18 132 176"
      width={size}
      height={(size * 176) / 132}
      className={className}
      style={giro ? { transform: `rotate(${giro}deg)` } : undefined}
      role="img"
      aria-label="Luna, la mascota de Estudio Lunar, saludando"
    >
      <defs>
        <clipPath id="lunaprota-silueta">
          <path d={LUNA_SILUETA} />
        </clipPath>
      </defs>

      {/* Patitas cortas y ESPEJADAS respecto del centro del cuerpo (x=55).
          Antes había además un brazo apoyado que terminaba justo encima de la
          patita derecha: al ser del mismo color se fundían y ese costado se
          veía más gordo. Lo saqué — con un solo brazo saludando alcanza. */}
      <g stroke={color} {...FIDEO}>
        <path d="M 46 106 C 44 120, 46 132, 40 140" />
        <path d="M 64 106 C 66 120, 64 132, 70 140" />
      </g>

      {/* Brazo que saluda, saliendo del lomo. Pivota desde el hombro. */}
      <g
        className={saludando ? "saludo-energico" : undefined}
        stroke={color}
        {...FIDEO}
      >
        <path d="M 20 62 C 6 48, 4 28, 12 14" />
      </g>

      <path d={LUNA_SILUETA} fill={color} />
      <g clipPath="url(#lunaprota-silueta)">
        <CaraZen cx={34} cy={62} sep={10} escala={0.85} />
      </g>
    </svg>
  )
}

/**
 * MANCHA — canto rodado sin cara. Es uno de los pops de color que sostienen
 * la composición sin llamar la atención.
 */
export function Mancha({
  className,
  size = 260,
  color = "#ECE5FA",
  giro = 0,
}: PersonajeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={giro ? { transform: `rotate(${giro}deg)` } : undefined}
      aria-hidden="true"
    >
      <path
        d="M 53 2
           C 80 2, 98 22, 97 51
           C 96 78, 77 98, 48 98
           C 21 98, 3 79, 2 51
           C 1 23, 26 2, 53 2 Z"
        fill={color}
      />
    </svg>
  )
}

/** ESTRELLITA — cuatro puntas redondeadas. Adorno y confeti. */
export function Estrellita({
  className,
  size = 28,
  color = "#FFAE24",
  giro = 0,
}: PersonajeProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      style={giro ? { transform: `rotate(${giro}deg)` } : undefined}
      aria-hidden="true"
    >
      <path
        d="M 20 1
           C 22 13, 27 18, 39 20
           C 27 22, 22 27, 20 39
           C 18 27, 13 22, 1 20
           C 13 18, 18 13, 20 1 Z"
        fill={color}
      />
    </svg>
  )
}
