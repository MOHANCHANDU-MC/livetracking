import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'BOSS Login',
  description: 'Business Operating System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning style={{ margin: 0, padding: 0 }}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
