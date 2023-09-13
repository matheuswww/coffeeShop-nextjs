import './globals.css'
import styles from './layout.module.css'
import Background from 'next/image'
import Logo from 'next/image'
import Account from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer/footer'

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
            <Link href="/" className={styles.logo}>
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
                <Link href="/">Home</Link>
              </li>
              <li aria-label="Página sobre nós">
                <Link href="/sobre">Sobre</Link>
              </li>
              <li aria-label="Página de contato">
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
            <Link href="/minhaconta" className={styles.account}>
              <span
                className={styles.noti}
                aria-label="você possui uma notificação"
              >
                1
              </span>
              <Account
                src="/icon/account.png"
                alt="minha conta"
                height={24}
                width={24}
                quality={70}
              />
            </Link>
            <Link href="/" className={styles.logo2}>
              <Logo
                height={50}
                width={50}
                src="/img/logo.png"
                alt="Logo da marca,imagem de um café com um vapor saindo"
              />
            </Link>
            <h1 className={styles.title}>
              O <span>AROMA</span> PERFEITO
            </h1>
            <Background
              src="/img/background.png"
              alt="imagem de fundo,imagem de grãos de café"
              fill
              className={styles.background}
              quality={100}
            />
          </header>
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
