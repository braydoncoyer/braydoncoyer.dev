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
        id,
        created_at,
        user_id,
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

  if (req.method === 'DELETE') {
    const { message } = req.body;

    const { data, error } = await supabaseClient
      .from('message')
      .delete()
      .match({ id: message.id });

    if (!error) return res.status(200).json({});
  }

  return res.status(400).json({
    message: 'Unsupported Request'
  });
}
