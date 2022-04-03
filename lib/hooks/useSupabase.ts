import { Session, createClient } from '@supabase/supabase-js';

import { useState } from 'react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_CLIENT_KEY;

const supabaseClient = createClient(supabaseUrl, supabaseKey);

const useSupabase = () => {
  const [session, setSession] = useState<Session>(
    supabaseClient.auth.session()
  );

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    setSession(session);
  });

  return { session, supabaseClient };
};

export { useSupabase, supabaseClient };
