import Link from "next/link";
import { CommunityWallModal } from "@/app/components/CommunityWallModal";
import createSupabaseServerClient from "@/app/lib/supabase/server";
import { CommunityWallCard } from "@/app/components/CommunityWallCard";

type SearchParamProps = {
  searchParams: Promise<{ show: string }>;
};

export default async function Page({ searchParams }: SearchParamProps) {
  const supabase = await createSupabaseServerClient();

  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  console.log(messages);

  const show = (await searchParams).show === "true";

  return (
    <>
      <title>Community Wall | Braydon Coyer</title>
      {show ? <CommunityWallModal /> : null}
      <div className="absolute inset-0 top-0 bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px]"></div>
      <div className="flex flex-wrap justify-center gap-24 p-12">
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-full flex-col items-center justify-end bg-gradient-to-b from-transparent to-zinc-300 pb-8">
        <Link href="/community-wall?show=true">
          <button
            className="group pointer-events-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-dark-primary"
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
    </>
  );
}
