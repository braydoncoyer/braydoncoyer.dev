import { redirect } from "next/navigation";
import getUserSession from "../lib/supabase/getUserSession";
import createSupabaseServerClient from "../lib/supabase/server";

export default async function Page() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  console.log(user);
  return <div>Protected!</div>;
}
