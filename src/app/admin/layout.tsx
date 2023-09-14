import './globals.css'
import Footer from '@/components/footer/footer'
import styles from './layout.module.css'
import Link from 'next/link'
import Logo from '@/components/logo/logo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee | Admin',
  description: 'Administração coffee shop',
  icons: {
    icon: '/icon/favicon.ico'
  }
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
          <header className={styles.header}>
            <ul>
              <li className={styles.logo}>
                <Logo />
              </li>
              <li className={styles.home}>
                <Link href="/admin/home">Home</Link>
              </li>
            </ul>
          </header>
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
