import { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/footer/footer'

export const metadata: Metadata = {
  title: 'Coffee | autenticação',
  description: 'Autenticar na coffee shop'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="pt-br">
        <body>
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
