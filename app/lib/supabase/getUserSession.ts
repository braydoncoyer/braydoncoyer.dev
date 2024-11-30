"use server";

import createSupabaseServerClient from "./server";

export default async function getUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}
