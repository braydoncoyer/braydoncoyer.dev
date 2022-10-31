import BottomRays from 'public/footer_rays.png';
import { Footer } from '@/components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import { NavMenu } from '@/components/NavMenu';
import { PageTransition } from '@/components/PageTransition';
import { PageType } from '@/lib/types';
import TopRays from 'public/rays.png';
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
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
        />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent(
            meta.title
          )}&article&imgSrc=${meta.imageUrl}`}
        />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="/assets/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/assets/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/assets/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/assets/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/assets/mstile-310x310.png"
        />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Braydon Coyer" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <NavMenu />
      <main
        className={`flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark prose prose-lg dark:prose-dark relative pt-24`}
      >
        <div className="absolute overflow-hidden -top-32 md:-top-72 md:right-36">
          <Image
            className="absolute top-0 right-0"
            src={TopRays}
            alt=""
            width={924}
            height={718}
            unoptimized
          />
        </div>

        <div className="z-10">
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
        <div className="absolute bottom-0 overflow-hidden">
          <Image
            className="absolute -right-44 -bottom-64 md:right-0 md:-bottom-96"
            src={BottomRays}
            alt=""
            width={924}
            height={718}
            unoptimized
          />
        </div>
      </main>
    </div>
  );
}
