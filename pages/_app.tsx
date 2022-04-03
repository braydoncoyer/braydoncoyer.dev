import 'styles/globals.css';
import 'styles/codeblocks.css';

import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from 'next-themes';
import { useSupabase } from '@/hooks/useSupabase';

function MyApp({ Component, pageProps }: AppProps) {
  const { session, supabaseClient } = useSupabase();
  return (
    <PlausibleProvider domain="braydoncoyer.dev" trackOutboundLinks={true}>
      <ThemeProvider attribute="class">
        <Component session={session} supabase={supabaseClient} {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  );
}

export default MyApp;
