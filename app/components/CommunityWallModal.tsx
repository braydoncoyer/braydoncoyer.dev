"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export function CommunityWallModal() {
  const router = useRouter();

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

  return <div className="fixed inset-0 bg-black/50 z-50"></div>;
}
