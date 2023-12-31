'use client'
import Slide from '@/funcs/slide'
import styles from './products.module.css'
import Product from 'next/image'
import { SyntheticEvent, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Products() {
  const slide = useRef<HTMLUListElement | null>(null)
  const wrapper = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (
      slide.current &&
      wrapper.current &&
      slide.current instanceof HTMLElement &&
      wrapper.current instanceof HTMLElement
    ) {
      new Slide(slide.current, wrapper.current)
    }
  }, [])

  function handleClick(event: SyntheticEvent) {
    event.preventDefault()
  }

  return (
    <>
      <section className={styles.section} aria-label="Slide de produtos">
        <p className={styles.nameSection}>Café Preto</p>
        <div className={styles.wrapper} ref={wrapper}>
          <ul className={styles.slide} ref={slide}>
            <li className={styles.product}>
              <Link href="/produto/1" className={styles.link}>
                <Product
                  width={80}
                  height={129}
                  quality={100}
                  src="/img/product.png"
                  alt="#"
                  className={styles.image}
                />
                <p className={styles.name}>Café Preto</p>
                <p className={styles.price}>R$ 150,00</p>
                <button onClick={handleClick} className={styles.button}>
                  Add ao carrinho
                </button>
              </Link>
            </li>
            <li className={styles.product}>
              <Link href="/produto/2" className={styles.link}>
                <Product
                  width={80}
                  height={129}
                  quality={100}
                  src="/img/product.png"
                  alt="#"
                  className={styles.image}
                />
                <p className={styles.name}>Café Preto</p>
                <p className={styles.price}>R$ 150,00</p>
                <button onClick={handleClick} className={styles.button}>
                  Add ao carrinho
                </button>
              </Link>
            </li>
            <li className={styles.product}>
              <Link href="/produto/3" className={styles.link}>
                <Product
                  width={80}
                  height={129}
                  quality={100}
                  src="/img/product.png"
                  alt="#"
                  className={styles.image}
                />
                <p className={styles.name}>Café Preto</p>
                <p className={styles.price}>R$ 150,00</p>
                <button onClick={handleClick} className={styles.button}>
                  Add ao carrinho
                </button>
              </Link>
            </li>
            <li className={styles.product}>
              <Link href="/produto/4" className={styles.link}>
                <Product
                  width={80}
                  height={129}
                  quality={100}
                  src="/img/product.png"
                  alt="#"
                  className={styles.image}
                />
                <p className={styles.name}>Café Preto</p>
                <p className={styles.price}>R$ 150,00</p>
                <button onClick={handleClick} className={styles.button}>
                  Add ao carrinho
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
