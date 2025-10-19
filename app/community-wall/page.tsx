import Link from "next/link";
import { CommunityWallModal } from "@/app/components/CommunityWallModal";
import createSupabaseServerClient from "@/app/lib/supabase/server";
import { InfiniteCanvas } from "@/app/components/InfiniteCanvas";
import { CommunityWallCard } from "@/app/components/CommunityWallCard";
import { GridWrapper } from "../components/GridWrapper";
import { Button } from "../components/Button";

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

      {/* Page Header */}
      <div className="mt-14 pb-8 md:mt-16">
        <GridWrapper>
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
                Community Wall
              </h1>
              <p className="mx-auto max-w-2xl text-center text-lg text-text-secondary">
                Leave a message, share your thoughts, or just say hello.
              </p>
              <p className="mx-auto hidden max-w-2xl text-center text-lg text-text-secondary md:block">
                Click and drag to explore all the messages scattered across the
                canvas.
              </p>
            </div>
            {/* Desktop Add Button */}
            <div className="hidden pb-2 text-center md:block">
              <Button variant="primary" href="/community-wall?show=true">
                Leave a note
              </Button>
            </div>
          </div>
        </GridWrapper>
      </div>

      {/* Mobile: Original Grid Layout with sticky button */}
      <div className="block min-h-screen md:hidden">
        {/* Messages Grid with extra bottom padding */}
        <div className="flex flex-wrap justify-center gap-12 p-6 pb-40">
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

        {/* Sticky button container */}
        <div className="pointer-events-none sticky bottom-0 -mt-40 mb-8 flex h-32 items-end justify-center bg-gradient-to-b from-transparent to-zinc-300 pb-8">
          <Link href="/community-wall?show=true">
            <button
              className="group pointer-events-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-dark-primary shadow-lg transition-transform hover:scale-110"
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
      </div>

      {/* Desktop: Infinite Canvas */}
      <GridWrapper className="hidden md:block">
        <InfiniteCanvas messages={messages || []} />
      </GridWrapper>
    </>
  );
}
