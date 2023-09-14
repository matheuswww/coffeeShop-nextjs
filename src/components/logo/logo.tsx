import Link from 'next/link'
import styles from './logo.module.css'
import LogoImg from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <LogoImg
        src="/img/logo.png"
        alt="Página inicial"
        height={20}
        width={20}
        quality={70}
      />
    </Link>
  )
}
