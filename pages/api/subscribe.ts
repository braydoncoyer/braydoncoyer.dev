import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const result = await fetch('https://app.loops.so/api/v1/contacts/create', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_LOOPS_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });

  const data = await result.json();

  if (!result.ok) {
    return res.status(500).json({ error: data.error.email[0] });
  }

  return res.status(201).json({ error: '' });
}
