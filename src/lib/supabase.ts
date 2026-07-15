import { createClient } from "@supabase/supabase-js"

/**
 * Cliente de Supabase (browser).
 *
 * La URL y la publishable key son PÚBLICAS por diseño (viajan en el navegador
 * de todos modos y están protegidas por Row Level Security), por eso pueden ir
 * acá directamente sin variables de entorno. La que NUNCA va acá es la
 * `service_role` / `sb_secret_...`.
 */
const SUPABASE_URL = "https://esbrpjlwavnwdykygcxk.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WgL4D7anL87AyXmR9GAeqA_azUCuKaK"

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: "pkce",
  },
})
