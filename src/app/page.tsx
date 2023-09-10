import Products from '@/components/products'
import Image1 from 'next/image'
import Image2 from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Products />
      <section className={styles.section}>
        <p className={styles.nameSection}>
          <span className={styles.golden}>Qualidade</span> e{' '}
          <span className={styles.golden}>precisão</span> em cada etapa do{' '}
          <span className={styles.golden}>processo</span>
        </p>
        <Image1
          src="/img/homeImage1.jpg"
          alt="imagem de uma maquina industrial de grãos de café"
          width={430}
          height={287}
          className={styles.image1}
        />
        <Image2
          src="/img/homeImage2.jpg"
          alt="imagem de uma maquina liberando café no copo"
          width={430}
          height={287}
          className={styles.image2}
        />
      </section>
    </main>
  )
}
