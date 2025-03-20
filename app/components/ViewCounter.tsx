import clsx from "clsx";
import { incrementViewCount } from "../db/actions";
import { createSupabaseAdminClient } from "../lib/supabase/server";

export async function ViewCounter({
  slug,
  increment = true,
  className = "text-xs text-slate-200",
}: {
  slug: string;
  increment?: boolean;
  className?: string;
}) {
  const viewCount = increment
    ? await incrementViewCount(slug)
    : await getViewCount(slug);

  return (
    <span className={clsx(className)}>
      {viewCount} {viewCount === 1 ? "read" : "reads"}
    </span>
  );
}

// Helper function to just get the count without incrementing
async function getViewCount(slug: string) {
  const supabase = await createSupabaseAdminClient();
  try {
    const { data } = await supabase
      .from("article_views")
      .select("view_count")
      .eq("slug", slug)
      .single();

    return data?.view_count || 0;
  } catch {
    return 0;
  }
}
