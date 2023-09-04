import './globals.css'
import type { Metadata } from 'next'
import styles from './header.module.css'
import Background from 'next/image'
import Logo from 'next/image'
import Account from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coffee | Home',
  description: 'o melhor café da sua vida aqui!'
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
            <Link href="#" className={styles.logo}>
              <Logo
                src="/img/logo.png"
                alt="Página inicial"
                height={20}
                width={20}
                quality={70}
              />
            </Link>
            <ul className={styles.menu}>
              <li aria-label="Página inicial">
                <Link href="#">Home</Link>
              </li>
              <li aria-label="Página sobre nós">
                <Link href="#">Sobre</Link>
              </li>
              <li aria-label="Página de contato">
                <Link href="#">Contato</Link>
              </li>
            </ul>
            <Link href="#" className={styles.account}>
              <Account
                src="/icon/account.png"
                alt="minha conta"
                height={24}
                width={24}
                quality={70}
              />
            </Link>
            <Logo
              height={50}
              width={50}
              src="/img/logo.png"
              alt="Logo da marca,imagem de um café com um vapor saindo"
              className={styles.logo2}
            />
            <h1 className={styles.title}>
              O <span>AROMA</span> PERFEITO
            </h1>
            <Background
              src="/img/background.jpg"
              alt="imagem de fundo,imagem de grãos de café"
              fill
              quality={70}
              className={styles.background}
            />
          </header>
          {children}
        </body>
      </html>
    </>
  )
}
