'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { useTheme } from '@/lib/useTheme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <html lang="en" className={theme}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
