import '@/app/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './_providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WeSki',
  description: 'We Ski',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
