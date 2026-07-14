/**
 * Control de acceso por código (client-side).
 *
 * Guardamos SOLO los hashes SHA-256 de los códigos válidos — nunca los códigos
 * en texto plano. Alguien que mire el bundle ve hashes, no claves.
 *
 * Limitaciones honestas (gate client-side):
 *  - No es DRM: un comprador puede pasarle su código a otra persona.
 *  - El contenido de estudio viaja en el bundle una vez desbloqueado.
 * Sirve para frenar el reenvío casual del link, no a un atacante decidido.
 *
 * Para revocar un código filtrado: sacá su hash de la lista y re-deployá.
 * Para agregar códigos nuevos: agregá su hash (script en scratchpad/gen-codes.mjs).
 */

// Hashes SHA-256 (hex) de los códigos válidos, normalizados (trim + uppercase + sin espacios).
const HASHES_VALIDOS = new Set<string>([
  "b87003899481424ff305f782a880386664b3c2a8c04ae6865e1a071116eb563c",
  "1513ba47db63b4de05221771b7ef03e298cb6b7d60604c43751307633b289875",
  "c9a34c4a5586ba83134640d86d23f24edd2710cbe6e2a2cbc20a0f6fd952136f",
  "e039f623acd4ea2404f427885c2d22daac6de1700457294553824672649a7d02",
  "ddc0610f58c7b3326fc577b848a6ae1ceb5cd426d62e60c0b56654113b196cc2",
  "39a9731ee965f7d561b1fb9e081e1b73eaaaf5e5ead6944850e9f62950f3d133",
  "538f46afd1804772af019fb4c95b0535466aeb080d4fc49c93951830a7e9afb0",
  "db525c7f576a67ae3502acd208cc3fbf0ef3adcef6a159a10a7bb51d7df3f231",
  "2bf89e4286e6c207a0b40c975efe955c7b1a3682119529d9aec7e994d3fa16b5",
  "49e5a5082b4da48532d47d591b338eb0d01b467e81a22fcd4df000f8fc6bc347",
  "46bcf0332ec9fe43269ee7f90b556ef29a7eaddaf3a831583b0ccde6dcab2a60",
  "fa509f297a08469e746668fb377d102d51359846dcb29a9b50633fb4c089b01f",
  "5a3f7e3a17bb25fcb1c4439be8775f999091e1ab04417684c678fff6921a40a3",
  "e3ee2fa5ed14e633db3f39279e57cc8c1996b491fac15026a65fd1b781a27196",
  "547eff07c0770dc77218b78968ac5ed9b68496cecb0ebbbf6abb55965bb75a1c",
  "490373f8bd3a78e3c49c87ce5841aa1d6f1644d220fbd503a658c5835c6b9734",
  "44f557f1f8bd012a7b27783f2dfb2b1c389a0c2d48c847e33a8b677dfe39eadd",
  "16e670d422a50cc953aaa0526432a9fb1db989e6ae983b086e9b17dcfdbdf7ef",
  "92c066476a2a82fdf00ff243600aa45495443f453305c2129aed02539e948b70",
  "76aa6162a6d0f5458f31c343bcb0a25a010f94837e560d3943b0faea0fa61420",
  "20c37a69f5a42a39b8e708a329f5f756199d8fd4a08de134fa531dd8a3ddc1e1",
  "6bf785eaf426bed3d522428b60861e3f1cc1a0d79b374c355262cb26ff73bdc3",
  "2861ba9640001fc10b96b853022f0bb1d91c94c26574b9d0f9f681b2468b05ed",
  "1bb333d7f29f16188fe2a60646fa3c259fb6e5d8c1a022f9028ce845fe400401",
  "f6c7719898f02a6ebc74fc12b0e690ec138687f49ff49c80a09f7227ef003412",
  "d4909d6cb6197fafd9bdd7cf1a1a7ad1740dbef726ec66b43f0e57d54237e081",
  "44c79ff8b1b6c0d19c38e0d23d0a92c40440a1d66e77e9114746e714f0af960c",
  "5076a05f907ce6161e874d542c616381f318784c31d293e7b7ba2c76fa43b31b",
  "4b8c74fc2f5abe74060eed4692687b5b70ed9675ceced718f6d9bba94c1e8c78",
  "e82181189c669b64b07b12329a216346f8893bcb983adfda71b3bbe85caa1ce5",
  "3418ce115cf6ad10448c7aef7c9f8260930b41152172e5a68d35796b9d16291e",
])

/** Normaliza el código: sin espacios, mayúsculas. Debe coincidir con gen-codes.mjs. */
export function normalizarCodigo(s: string): string {
  return s.trim().toUpperCase().replace(/\s+/g, "")
}

function bufferAHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

/** Devuelve true si el código ingresado es válido (compara su hash SHA-256). */
export async function codigoValido(codigo: string): Promise<boolean> {
  const norm = normalizarCodigo(codigo)
  if (!norm) return false
  try {
    const data = new TextEncoder().encode(norm)
    const digest = await crypto.subtle.digest("SHA-256", data)
    return HASHES_VALIDOS.has(bufferAHex(digest))
  } catch {
    return false
  }
}
