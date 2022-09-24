import { Footer } from '@/components/Footer';
import Head from 'next/head';
import { NavMenu } from '@/components/NavMenu';
import { PageTransition } from '@/components/PageTransition';
import { PageType } from '@/lib/types';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

export function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: siteMetadata.socialBanner,
    type: PageType.WEBSITE,
    twitterHandle: siteMetadata.twitterHandle,
    canonicalUrl: customMeta.sponsoredArticle
      ? customMeta.sponsoredUrl
      : `${siteMetadata.siteUrl}${router.asPath}`,
    date: null,
    ...customMeta
  };

  return (
    <div
      className={`bg-white dark:bg-dark min-h-screen ${
        props.showCircles && 'overflow-hidden' // This conditional will hide the overflow on the main page with the circles. If overflow is active on blog pages, sticky sidebar doesn't work
      }`}
    >
      <NavMenu />
      <main
        className={`flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark prose prose-lg dark:prose-dark relative`}
      >
        {children}
      </main>
    </div>
  );
}
