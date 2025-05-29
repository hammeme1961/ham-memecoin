import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HAM - The Ape Who Made The Moon Possible',
  description: 'HAM - The first hominid in space. 100% community owned memecoin honoring the chimp who made human space travel possible.',
  keywords: ['HAM', 'memecoin', 'space', 'chimp', 'cryptocurrency', 'Solana', 'community'],
  openGraph: {
    title: 'HAM - The Ape Who Made The Moon Possible',
    description: 'HAM - The first hominid in space. 100% community owned memecoin.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAM - The Ape Who Made The Moon Possible',
    description: 'HAM - The first hominid in space. 100% community owned memecoin.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
} 