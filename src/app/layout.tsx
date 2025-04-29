import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baby-E-Com',
  description: 'A modern, responsive UI for a baby product e-commerce store built with React and Tailwind CSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&family=Inter:wght@100;200;300;400;500;600&family=Playpen+Sans:wght@100;200;300;400;500;600;700;800&family=Satisfy&family=Sevillana&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
