import { MDXContent } from "@/app/components/mdx";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { fetchAndSortChangelogPosts } from "@/app/lib/utils";
import { GridWrapper } from "@/app/components/GridWrapper";

export default async function ChangelogPage() {
  const allChangelogItems = await fetchAndSortChangelogPosts();

  return (
    <div className="w-full space-y-16">
      <title>Changelog | Braydon Coyer</title>
      <div className="mx-auto text-balance pt-14 md:pt-16">
        <GridWrapper>
          <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            Here&apos;s what&apos;s new && exciting on my site.
          </h1>
        </GridWrapper>
      </div>

      <ul className="flex flex-col">
        {allChangelogItems.length > 0 ? (
          <>
            {allChangelogItems.map((post) => {
              return (
                <li key={post.slug}>
                  <div
                    key={post.slug}
                    className="grid h-full grid-cols-1 rounded-2xl md:grid-cols-12"
                  >
                    <div className="col-span-2 col-start-1 hidden space-y-2 p-4 md:block">
                      <div className="font-mono text-sm leading-none text-text-secondary">
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </time>
                      </div>
                    </div>
                    <div className="col-start-3 col-end-4 hidden h-full border-x border-dashed border-border-primary md:block"></div>
                    <div className="col-span-9 col-start-4 flex w-full flex-grow flex-col p-4">
                      <div className="mb-3 font-mono text-sm leading-none text-text-secondary md:hidden">
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </time>
                      </div>
                      <h2 className="mb-8 text-balance text-2xl font-medium leading-none tracking-tight text-text-primary">
                        {post.title}
                      </h2>
                      {post.imageName ? (
                        <img
                          className="drama-shadow mb-12 aspect-video rounded-xl object-cover"
                          src={`/${post.imageName}`}
                          alt=""
                        />
                      ) : null}
                      <MDXContent code={post.code} />
                    </div>
                  </div>
                  <div className="h-0 w-full border-t border-dashed border-border-primary" />
                </li>
              );
            })}
          </>
        ) : (
          <p>Nothing to see here yet...</p>
        )}
      </ul>

      <NewsletterSignUp />
    </div>
  );
}
