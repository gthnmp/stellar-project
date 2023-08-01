import { createClient } from "@supabase/supabase-js";

const supabase_url:string = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabase_key:string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient(supabase_url, supabase_key)