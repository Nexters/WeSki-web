import type { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '@/shared/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;
  const searchParams = new URLSearchParams(req.url?.split('?')[1]);
  const url = `${API_URL}/${(path as string[]).join('/')}` + (searchParams.size ? `?${searchParams}` : '');

  const response = await fetch(url, {
    method: req.method,
    headers: {
      ...(req.headers as Record<string, string>),
    },
    body: req.method !== 'GET' && req.body ? JSON.stringify(req.body) : undefined,
  });

  const contentType = response.headers.get('Content-Type');
  let data;
  
  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  res.status(response.status).json(data);
}
