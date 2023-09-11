import Icon from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Coffee Shop{' '}
        <Icon
          src="/img/favicon.ico"
          width={15}
          height={15}
          alt="logo da empresa,imagens de grãos de café"
          className={styles.footerIcon}
        />
      </p>
      <p>Nenhum direito reservado</p>
    </footer>
  )
}
