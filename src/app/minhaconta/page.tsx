import Account from '@/components/account/account'
import styles from './minhaconta.module.css'
import Product from 'next/image'
import Delete from 'next/image'

export default function minhaconta() {
  return (
    <main className={styles.main}>
      <Account />
      <section className={styles.cart}>
        <h2>Meu Carrinho</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <Product
                  src="/img/product.png"
                  width={55}
                  height={88}
                  alt="imagem do seu produto"
                  className={styles.imgProduct}
                />
              </td>
              <td>Café Preto</td>
              <td>R$150,00</td>
              <td>Quantidade: 1</td>
              <td>
                <button className={styles.delete}>
                  <Delete
                    src="/icon/close.png"
                    width={24}
                    height={24}
                    alt="deletar produto do carrinho"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
