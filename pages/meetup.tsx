import React, { Fragment } from 'react';

import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import { StickyColumn } from 'layouts/StickyColumn';
import { getPageInfo } from '@/lib/notion';
import { renderBlocks } from '@/lib/renderBlocks';
import siteMetadata from '@/data/siteMetadata';

export default function Toolbox({ meetupContent }) {
  return (
    <Container title="Meetup - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          Meetup
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          A list of people I would love to meet in real life.
        </span>
      </h1>
      <p>
        The internet provides wonderful opportunities to be introduced to
        amazing people. Here's a list of individuals I would love to meet face
        to face! Want to meet up or be added to the list? Send me a{' '}
        <a target="_blank" href={siteMetadata.twitter} rel="noreferrer">
          DM on Twitter!
        </a>
      </p>
      <StickyColumn>
        <div className="mt-12">
          <div className="grid grid-cols-2">
            {meetupContent.map((block) => (
              <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
            ))}
          </div>
        </div>
      </StickyColumn>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPageInfo(process.env.MEETUP_DATABASE_ID);

  return {
    props: {
      meetupContent: data
    },
    revalidate: 1800
  };
};
