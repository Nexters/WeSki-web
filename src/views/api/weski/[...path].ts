import type { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '@/shared/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;
  const url = `${API_URL}/${(path as string[]).join('/')}`;

  const response = await fetch(url, {
    method: req.method,
    headers: {
      ...(req.headers as Record<string, string>),
    },
    body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
  });

  const data = await response.json();

  res.status(response.status).json(data);
}
