import { URL } from 'url';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'Invalid URL parameter' });
  }

  const targetUrl = url;

  try {
    const response = await fetch(targetUrl);

    // 응답 헤더 설정
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/vnd.apple.mpegurl')) {
      // m3u8 파일 내용 수정
      // m3u8의 api 주소를 직접 변경해서 해당 내용 또한 proxy를 통해 요청하도록 수정
      const text = await response.text();
      const modifiedContent = text.replace(/^(?!#)(.+)$/gm, (match) => {
        if (match.startsWith('http')) {
          return `/api/webcam?url=${encodeURIComponent(match)}`;
        } else {
          const fullUrl = new URL(match, targetUrl).toString();
          return `/api/webcam?url=${encodeURIComponent(fullUrl)}`;
        }
      });

      res.send(modifiedContent);
    } else if (response.body) {
      // ReadableStream을 직접 처리
      // m3u8이외에 비디오 stream자체를 직접 가져와서 응답
      response.body
        .pipeTo(
          new WritableStream({
            write(chunk) {
              res.write(chunk);
            },
            close() {
              res.end();
            },
          })
        )
        .catch((err) => {
          console.error('Stream error:', err);
          res.status(500).end();
        });
    } else {
      res.end();
    }
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
