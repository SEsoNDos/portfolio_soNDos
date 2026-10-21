import { createClient } from "@supabase/supabase-js"

const supabaseUrl = (import.meta as ImportMeta & {
  env: Record<string, string | undefined>
}).env.VITE_SUPABASE_URL
const supabaseKey = (import.meta as ImportMeta & {
  env: Record<string, string | undefined>
}).env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)