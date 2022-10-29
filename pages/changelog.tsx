import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import { TimelineItem } from '@/components/TimelineItem';
import { TimelineList } from '@/components/TimelineList';
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

      <TimelineList>
        {completedItems.map((completedItem, completedItemIndex) => (
          <TimelineItem
            key={completedItemIndex}
            title={completedItem.title}
            meta={new Date(completedItem.date).toLocaleDateString(
              siteMetadata.locale,
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }
            )}
            content={`<p>${completedItem.description}</p>`}
          />
        ))}
      </TimelineList>
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
