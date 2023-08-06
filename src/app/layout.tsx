import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export const metadata = {
  title: "Nicholas D'Amico | Software Developer",
  description: 'Ruby On Rails | React | TypeScript'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${mont.variable}`}>{children}</body>
    </html>
  )
}
