import ProductImg from 'next/image'
import styles from './produto.module.css'

interface ProdutoProps {
  params: {
    id: string
  }
}

export default function Product({ params }: ProdutoProps) {
  console.log(params.id)
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <ProductImg
          src="/img/product.png"
          width={170}
          height={250}
          alt="#"
          className={styles.image}
        />
        <h1 className={styles.name}>Café preto</h1>
        <p className={styles.price}>R$150,00</p>
        <button className={styles.button}>efetuar compra</button>
      </section>
    </main>
  )
}
