'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useTheme } from '@/lib/useTheme';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Stuart Z Wong | Web Developer',
//   description:
//     'Portfolio of Stu Wong, a web developer specializing in React and Next.js',
// };

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
