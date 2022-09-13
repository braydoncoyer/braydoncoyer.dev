import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import { StickyColumn } from 'layouts/StickyColumn';
import { getChangelogData } from '@/lib/notion';
import siteMetadata from '@/data/siteMetadata';

export default function Toolbox({ completedItems, activeItems, backlogItems }) {
  return (
    <Container>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Changelog
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          What's new and upcoming
        </span>
      </h1>
      <StickyColumn>
        <div className="flow-root">
          <div role="list" className="-mb-8 list-none">
            {completedItems.map((completedItem, completedItemIndex) => (
              <li key={completedItemIndex}>
                <div className="relative pb-8">
                  {completedItems !== completedItems.length - 1 ? (
                    <span
                      className="absolute w-1 h-full -ml-px bg-gray-200 top-5 left-5 dark:bg-midnight"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    <>
                      <div>
                        <div className="relative px-1">
                          <div
                            className={`h-6 w-6 ml-[5px] mt-1 border-4 bg-white dark:bg-dark rounded-full ring-4 ${
                              completedItemIndex === 0
                                ? 'border-teal-400'
                                : 'border-gray-200 dark:border-midnight'
                            } ring-white dark:ring-dark flex items-center justify-center`}
                          >
                            {completedItemIndex === 0 && (
                              <span className="flex w-3 h-3">
                                <span className="relative inline-flex w-3 h-3 bg-teal-400 rounded-full"></span>
                                <span className="absolute inline-flex w-3 h-3 bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div>
                          <div className="text-lg">
                            <h3 className="mt-0 font-medium">
                              {completedItem.title}
                            </h3>
                          </div>
                          <p className="-mt-3 text-base">
                            {new Date(completedItem.date).toLocaleDateString(
                              siteMetadata.locale,
                              {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              }
                            )}
                          </p>
                        </div>
                        <div className="mt-2 ">
                          <p>{completedItem.description}</p>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </StickyColumn>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { completed, active, backlog } = await getChangelogData(
    process.env.CHANGELOG_DATABASE_ID
  );
  return {
    props: {
      completedItems: completed,
      activeItems: active,
      backlogItems: backlog
    },
    revalidate: 1800
  };
};
