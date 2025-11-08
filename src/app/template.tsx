// template.tsx
import RootLayout from './layout'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>{children}</RootLayout>
  ) 
}