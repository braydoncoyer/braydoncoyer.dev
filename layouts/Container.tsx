import { Footer } from '@/components/Footer';
import Head from 'next/head';
import { NavMenu } from '@/components/NavMenu';
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
      <Head>
        <title>{meta.title}</title>
        {/* <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
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
        )} */}
        <meta
          name="theme-color"
          content="#111827"
          media="(prefers-color-scheme: light)"
        />
        <meta
          content="In this brief article, I'll show you how easy it is to build a chat layout with TailwindCSS using their CSS Grid utility classes."
          name="description"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BraydonCoyer" />
        <meta
          name="twitter:title"
          content="How to Create a Chat Layout with TailwindCSS and CSS Grid - Braydon Coyer"
        />
        <meta
          name="twitter:description"
          content="In this brief article, I'll show you how easy it is to build a chat layout with TailwindCSS using their CSS Grid utility classes."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/braydoncoyer/image/upload/w_1200,h_600,c_fill,f_auto/w_580,h_600,c_fill,u_chat_layout_banner.jpg/fl_layer_apply,g_east/w_600,h_450,c_fit,co_rgb:FFFFFF,g_west,x_45,y_-40,l_text:arial_60_bold:How%20to%20Create%20a%20Chat%20Layout%20with%20TailwindCSS%20and%20CSS%20Grid/og_social_large.png"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Braydon Coyer" />
        <meta
          property="og:description"
          content="In this brief article, I'll show you how easy it is to build a chat layout with TailwindCSS using their CSS Grid utility classes."
        />
        <meta
          property="og:title"
          content="How to Create a Chat Layout with TailwindCSS and CSS Grid - Braydon Coyer"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/braydoncoyer/image/upload/w_1200,h_600,c_fill,f_auto/w_580,h_600,c_fill,u_chat_layout_banner.jpg/fl_layer_apply,g_east/w_600,h_450,c_fit,co_rgb:FFFFFF,g_west,x_45,y_-40,l_text:arial_60_bold:How%20to%20Create%20a%20Chat%20Layout%20with%20TailwindCSS%20and%20CSS%20Grid/og_social_large.png"
        />
        <meta
          property="og:url"
          content="https://braydoncoyer.dev/blog/how-to-create-a-chat-layout-with-tailwindcss-and-css-grid"
        />
        <meta
          property="article:published_time"
          content="2021-10-08T00:00:00.000Z"
        />
        <link
          rel="canonical"
          href="https://braydoncoyer.dev/blog/how-to-create-a-chat-layout-with-tailwindcss-and-css-grid"
        />
      </Head>
      <NavMenu />
      <main
        className={`flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark prose prose-lg md:prose-xl dark:prose-dark relative`}
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
        <div className="z-10">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
