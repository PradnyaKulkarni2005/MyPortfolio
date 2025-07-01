import './styles/globals.css'
import { ThemeProvider } from '@/app/context/ThemeContext'

export const metadata = {
  title: 'Pradnya Kulkarni Portfolio',
  description: 'Personal portfolio built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
