import '@/app/globals.css';

import type { Metadata } from 'next';
import { Toaster } from '@/shared/ui/toaster';
import Providers from './_providers';

export const metadata: Metadata = {
  title: 'WeSki',
  description: 'We Ski',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
