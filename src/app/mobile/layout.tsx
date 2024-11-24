'use client';

import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      {children}
    </>
  );
}
