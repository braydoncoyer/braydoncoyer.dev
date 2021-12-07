import 'styles/globals.css';
import 'styles/codeblocks.css';

import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from 'next-themes';
import siteMetadata from '@/data/siteMetadata';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain={siteMetadata.siteUrl} trackOutboundLinks={true}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  );
}

export default MyApp;
