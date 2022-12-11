import { useEffect, useState } from 'react';

import { Ad } from '@/components/Ad';
import { CommunityEntry } from '@/components/CommunityEntry';
import { CommunityForm } from '@/components/CommunityForm';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import { fetcher } from '@/lib/fetcher';
import { supabaseClient } from '@/lib/hooks/useSupabase';
import useSWR from 'swr';

export default function CommunityWall({ session, supabase, messages }) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const { data: entries } = useSWR('/api/community-wall', fetcher, {
    fallbackData: messages
  });

  useEffect(() => {
    setLoggedIn(!!session);
  }, [session]);

  return (
    <Container title="Community Wall - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Leave a note
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Community Wall
        </span>
      </h1>
      <p>
        Thank you for visiting my site! If you feel so inclined, leave me a
        comment, note or suggestion below! I'd love to hear from you!
      </p>
      <CommunityForm
        loggedIn={loggedIn}
        supabase={supabase}
        session={session}
      />
      <div className="flex justify-center">
        <Ad />
      </div>
      <div className="mt-12">
        {entries.messages?.map((message) => (
          <div className="mt-8" key={message.id}>
            <CommunityEntry message={message} session={session} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let { data: messages, error } = await supabaseClient.from('message').select(`
        content,
        id,
        created_at,
        user_id,
        user (
            name,
            avatar_url
        )
    `);

  return {
    props: {
      messages
    },
    revalidate: 60
  };
};
