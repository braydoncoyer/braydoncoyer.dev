"use server";

import { createSupabaseAdminClient } from "../lib/supabase/server";

export async function incrementViewCount(slug: string) {
  const supabase = await createSupabaseAdminClient();

  try {
    const { data: existingArticle } = await supabase
      .from("article_views")
      .select("*")
      .eq("slug", slug)
      .single();

    if (existingArticle) {
      // If it exists, increment the count
      const { error } = await supabase
        .from("article_views")
        .update({
          view_count: existingArticle.view_count + 1,
          last_viewed_at: new Date().toISOString(),
        })
        .eq("slug", slug);

      if (error) throw error;

      return existingArticle.view_count + 1;
    } else {
      // If it doesn't exist, create a new record
      const { error } = await supabase
        .from("article_views")
        .insert({ slug, view_count: 1 });

      if (error) throw error;

      return 1;
    }
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return 0;
  }
}
