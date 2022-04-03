import type { NextApiRequest, NextApiResponse } from 'next';

import { supabaseClient } from '@/lib/hooks/useSupabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    let { data: messages } = await supabaseClient
      .from('message')
      .select(
        `
        content,
        created_at,
        user (
            name
        )
      `
      )
      .order('created_at', { ascending: false });

    return res.status(200).json({
      messages
    });
  }

  if (req.method === 'POST') {
    const { message } = req.body;

    await supabaseClient.from('message').insert([
      {
        content: message.content,
        user_id: message.userId
      }
    ]);

    return res.status(201).json({});
  }

  return res.status(400).json({
    message: 'Unsupported Request'
  });
}
