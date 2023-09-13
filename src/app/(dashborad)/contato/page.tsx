import { Metadata } from 'next'
import styles from './contato.module.css'

export const metadata: Metadata = {
  title: 'Coffee | Contato',
  description: 'nosso contato'
}

export default function Contato() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          commodi amet saepe maiores at mollitia tenetur? Similique, nulla
          libero aspernatur modi officia iure eos sit exercitationem sint
          magnam! Fugiat, eveniet?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facere earum molestiae suscipit consectetur, aliquid
          quae labore soluta. Ipsum mollitia repellendus sunt corporis obcaecati
          consequatur expedita illo, incidunt amet. Provident, aliquam!
        </p>
      </section>
    </main>
  )
}
