'use client'
import ExpandMore from 'next/image'
import ExpandLess from 'next/image'
import styles from './account.module.css'
import React, { useRef, useState } from 'react'

export default function Account() {
  const [open, setOpen] = useState(false)
  const container = useRef<HTMLDivElement | null>(null)
  const infos = useRef<HTMLDivElement | null>(null)

  function handleClick() {
    setOpen((open) => !open)
    if (open && container.current && infos.current) {
      container.current.style.height = '24px'
      infos.current.style.display = 'none'
    } else if (!open && container.current && infos.current) {
      container.current.style.height = '100%'
      infos.current.style.display = 'block'
    }
  }

  return (
    <>
      <section className={styles.myaccount} ref={container}>
        <label htmlFor="minhaconta">minha conta</label>
        <button
          id="minhaconta"
          className={`${styles.expand} ${open == true && styles.hidden}`}
          onClick={handleClick}
        >
          <ExpandMore
            src="/icon/expand_more.png"
            width={24}
            height={24}
            alt="abrir informações sobre minha conta"
          />
        </button>
        <button
          className={`${styles.expand} ${open == false && styles.hidden}`}
        >
          <ExpandLess
            src="/icon/expand_less.png"
            width={24}
            height={24}
            onClick={handleClick}
            alt="fechar informações sobre minha conta"
          />
        </button>
        <div ref={infos}>
          <p>Email: email@gmail.com</p>
          <p>nome: matheus</p>
          <button className={styles.logout}>Sair da Conta</button>
        </div>
      </section>
    </>
  )
}
