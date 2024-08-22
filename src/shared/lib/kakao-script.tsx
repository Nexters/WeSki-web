'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any;
  }
}

function KakaoScript() {
  const onLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  };

  return <Script src="https://developers.kakao.com/sdk/js/kakao.js" async onLoad={onLoad} />;
}

export default KakaoScript;
