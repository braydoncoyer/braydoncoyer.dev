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
        {props.showCircles && (
          <div className="absolute top-0 left-0 right-0">
            <div className="absolute top-0 overflow-visible opacity-50 dark:opacity-30 left-16">
              <div className="mix-blend-multiply absolute w-[700px] h-[900px] rounded-[40rem] circle-obj"></div>
            </div>

            <div className="absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-52">
              <div className="mix-blend-multiply absolute w-[600px] h-[600px] rounded-[40rem] circle-obj2"></div>
            </div>
          </div>
        )}
        <div className="z-10">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </main>
    </div>
  );
}
