import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'



export const metadata: Metadata = {
  title: 'Nelson Mudanya',
  description: 'Nelson Mudanya Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-sky-950 font-poppins'>{children}</body>
    </html>
  )
}
