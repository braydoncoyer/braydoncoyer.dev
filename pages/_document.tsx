import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        {/* <meta content="#ffffff" name="theme-color" /> */}
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
        {/* <meta
          name="theme-color"
          content="#111827"
          media="(prefers-color-scheme: dark)"
        /> */}
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
      </Head>
      <body className="bg-white dark:bg-midnight">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
