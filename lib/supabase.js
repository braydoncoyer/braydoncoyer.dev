import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServerKey = process.env.SUPABASE_SERVICE_KEY || "";

const SupabaseAdmin = createClient(supabaseUrl, supabaseServerKey);

export { SupabaseAdmin };
