"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useSupabaseClient from "../lib/supabase/client";

export function CommunityWallModal() {
  const router = useRouter();
  const supabase = useSupabaseClient();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.push("/community-wall");
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [router]);

  const handleLoginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <form action={handleLoginWithGoogle}>
        <button>Login with google</button>
      </form>
    </div>
  );
}
