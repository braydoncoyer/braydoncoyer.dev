import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import React from 'react';

export default function Toolbox({ toolboxContent }) {
  return (
    <Container>
      <h1>
        <span className="block text-base text-center text-teal-500 dark:text-teal-400 font-semibold tracking-wide uppercase">
          Changelog
        </span>
        <span className="mt-2 block text-4xl text-center leading-10 font-bold sm:text-5xl max-w-2xl mx-auto">
          What's new and upcoming
        </span>
      </h1>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 1800
  };
};
