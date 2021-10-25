import { SupabaseAdmin } from "../../../lib/supabase";

export default async (req, res) => {
  if (req.method === "POST") {
      const body = JSON.parse(req.body);
    // Call our stored procedure with the page_slug set by the request params slug
    const { reaction, type } = body;
    if(reaction === "like_count") {
        if(type === "increment") {
            await SupabaseAdmin.rpc("increment_like_count", {
              page_slug: req.query.slug,
            });
        } else if (type === "decrement") {
            await SupabaseAdmin.rpc("decrement_like_count", {
              page_slug: req.query.slug,
            });
        }
    }

    if (reaction === "love_count") {
      if (type === "increment") {
        await SupabaseAdmin.rpc("increment_love_count", {
          page_slug: req.query.slug,
        });
      } else if (type === "decrement") {
        await SupabaseAdmin.rpc("decrement_love_count", {
          page_slug: req.query.slug,
        });
      }
    }

    if (reaction === "clap_count") {
      if (type === "increment") {
        await SupabaseAdmin.rpc("increment_clap_count", {
          page_slug: req.query.slug,
        });
      } else if (type === "decrement") {
        await SupabaseAdmin.rpc("decrement_clap_count", {
          page_slug: req.query.slug,
        });
      }
    }

    if (reaction === "party_count") {
      if (type === "increment") {
        await SupabaseAdmin.rpc("increment_party_count", {
          page_slug: req.query.slug,
        });
      } else if (type === "decrement") {
        await SupabaseAdmin.rpc("decrement_party_count", {
          page_slug: req.query.slug,
        });
      }
    }
    
    return res.status(200).json({
      message: `Successfully performed reaction for: ${req.query.slug}`,
    });
  }

  if (req.method === "GET") {
    // Query the pages table in the database where slug equals the request params slug.
    const { data } = await SupabaseAdmin.from("reactions")
      .select("like_count, love_count, clap_count, party_count")
      .filter("slug", "eq", req.query.slug);

    if (data) {
      return res.status(200).json({
        like_count: data[0]?.like_count || 0,
        love_count: data[0]?.love_count || 0,
        clap_count: data[0]?.clap_count || 0,
        party_count: data[0]?.party_count || 0,
      });
    }
  }

  return res.status(400).json({
    message: "Unsupported Request",
  });
};
