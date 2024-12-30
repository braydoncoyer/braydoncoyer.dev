import Link from "next/link";
import CommunityWallLayout from "./layout";
import { CommunityWallModal } from "../components/CommunityWallModal";
import createSupabaseServerClient from "../lib/supabase/server";
import { CommunityWallCard } from "../components/CommunityWallCard";

type SearchParamProps = {
  searchParams: Promise<{ show: string }>;
};

export default async function Page({ searchParams }: SearchParamProps) {
  const supabase = await createSupabaseServerClient();

  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  const show = (await searchParams).show === "true";

  return (
    <CommunityWallLayout>
      {show ? <CommunityWallModal /> : null}
      <div className="absolute top-0 inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px]"></div>
      <div className="p-12 flex flex-wrap gap-24 justify-center">
        {messages?.map((message) => (
          <CommunityWallCard
            key={message.id}
            message={message.message}
            patternIndex={message.patternindex}
            author={message.creator_name}
            profilePicture={message.creator_avatar_url}
            rotation={message.rotation}
            className="h-[300px] w-[250px] shadow-[12px_12px_0px_0px_rgba(214,218,222,0.3)]"
          />
        ))}
      </div>

      <div className="sticky bottom-0 left-0 right-0 h-[150px] bg-gradient-to-b from-transparent to-zinc-300 pointer-events-none flex items-center justify-center">
        <Link href="/community-wall?show=true">
          <button
            className="h-[60px] w-[60px] rounded-full bg-dark-primary flex items-center justify-center pointer-events-auto group"
            aria-label="Add new item"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-400 group-hover:text-gray-200"
            >
              <path
                d="M12 4V20M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </CommunityWallLayout>
  );
}
