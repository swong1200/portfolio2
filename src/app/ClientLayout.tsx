// ClientLayout.tsx
'use client';

import { useTheme } from '@/lib/useTheme';
import { useEffect } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return <>{children}</>;
}