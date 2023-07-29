import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans, Noto_Serif, Poiret_One } from 'next/font/google'

export const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans`}>{children}</body>
    </html>
  )
}
