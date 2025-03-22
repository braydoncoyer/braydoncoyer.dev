"use server";

import { createSupabaseAdminClient } from "../lib/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import { type CurrentlyPlaying, getCurrentlyPlaying as getSpotifyCurrentlyPlaying } from "./spotify";

type ReactionType = "like" | "heart" | "celebrate" | "insightful";
const VALID_REACTIONS: ReactionType[] = [
  "like",
  "heart",
  "celebrate",
  "insightful",
];

type CreateContactResponse = {
  success: boolean;
  error?: string;
};

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

// Get all reaction counts for an article
export async function getArticleReactions(slug: string) {
  const supabase = await createSupabaseAdminClient();
  
  try {
    const { data } = await supabase
      .from('article_reactions')
      .select('reaction_type, count')
      .eq('article_slug', slug);
    
    // Transform into a more usable format
    const reactionCounts: Record<string, number> = {};
    
    // Initialize with all reaction types at 0
    VALID_REACTIONS.forEach(type => {
      reactionCounts[type] = 0;
    });
    
    // Update with actual counts
    data?.forEach(row => {
      reactionCounts[row.reaction_type] = row.count;
    });
    
    return reactionCounts;
  } catch (error) {
    console.error('Error fetching article reactions:', error);
    return {};
  }
}

// Get user's reactions for an article from cookie
export async function getUserReactions(slug: string) {
  const cookieStore = await cookies();
  const reactionsJson = cookieStore.get(`article_reactions_${slug}`)?.value;
  
  if (!reactionsJson) return [];
  
  try {
    return JSON.parse(reactionsJson) as string[];
  } catch {
    return [];
  }
}

// Toggle reaction (add or remove)
export async function toggleReaction(slug: string, reactionType: ReactionType) {
  const supabase = await createSupabaseAdminClient();
  const cookieStore = await cookies();
  
  try {
    let visitorId = cookieStore.get('visitor_id')?.value;
    if (!visitorId) {
      visitorId = uuidv4();
      cookieStore.set('visitor_id', visitorId, { 
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
        path: '/',
        httpOnly: true,
        sameSite: 'strict'
      });
    }
    
    // Get user's current reactions for this article
    const cookieKey = `article_reactions_${slug}`;
    const existingReactionsJson = cookieStore.get(cookieKey)?.value;
    let userReactions: string[] = [];
    
    if (existingReactionsJson) {
      try {
        userReactions = JSON.parse(existingReactionsJson);
      } catch {
        userReactions = [];
      }
    }
    
    // Check if user has already reacted with this type
    const hasReacted = userReactions.includes(reactionType);
    
    if (hasReacted) {
      // Remove reaction
      userReactions = userReactions.filter(r => r !== reactionType);
      
      // Decrement count in database
      const { data: reaction } = await supabase
        .from('article_reactions')
        .select('count')
        .eq('article_slug', slug)
        .eq('reaction_type', reactionType)
        .single();
      
      if (reaction && reaction.count > 1) {
        await supabase
          .from('article_reactions')
          .update({ 
            count: reaction.count - 1,
            updated_at: new Date().toISOString()
          })
          .eq('article_slug', slug)
          .eq('reaction_type', reactionType);
      } else {
        // If count would be 0, remove the record
        await supabase
          .from('article_reactions')
          .delete()
          .eq('article_slug', slug)
          .eq('reaction_type', reactionType);
      }
    } else {
      // Add reaction
      userReactions.push(reactionType);
      
      // Check if article reaction exists
      const { data: existingReaction } = await supabase
        .from('article_reactions')
        .select('count')
        .eq('article_slug', slug)
        .eq('reaction_type', reactionType)
        .single();
      
      if (existingReaction) {
        // Increment existing count
        await supabase
          .from('article_reactions')
          .update({ 
            count: existingReaction.count + 1,
            updated_at: new Date().toISOString()
          })
          .eq('article_slug', slug)
          .eq('reaction_type', reactionType);
      } else {
        // Create new reaction record
        await supabase
          .from('article_reactions')
          .insert({
            article_slug: slug,
            reaction_type: reactionType,
            count: 1
          });
      }
    }
    
    // Update cookie with new reactions
    cookieStore.set(cookieKey, JSON.stringify(userReactions), { 
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      path: '/',
      httpOnly: true,
      sameSite: 'lax'
    });
    
    revalidatePath(`/blog/${slug}`);
    
    return { 
      success: true, 
      added: !hasReacted, 
      removed: hasReacted,
      userReactions
    };
  } catch (error) {
    console.error('Error toggling reaction:', error);
    return { 
      success: false, 
      message: 'Error processing reaction' 
    };
  }
}

export async function createContact(email: string): Promise<CreateContactResponse> {
  try {
    const response = await fetch(
      "https://app.loops.so/api/v1/contacts/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
        },
        body: JSON.stringify({ email, userGroup: "Blogfolio" }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to create contact");
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to create contact" };
  }
}

export async function getCurrentlyPlaying(): Promise<CurrentlyPlaying | null> {
  try {
    const result = await getSpotifyCurrentlyPlaying();
    return result || null;
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return null;
  }
} 