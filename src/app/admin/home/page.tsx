'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import React, { useState } from 'react'
import styles from './page.module.css' // Substitua por seu arquivo CSS
import { Input } from '@/components/form/input/Input'
import Button from '@/components/form/Button/Button'

const schema = z.object({
  nome: z.string().min(4, 'Mínimo 4 caracteres!'),
  preco: z
    .number({
      errorMap: () => {
        return {
          message: 'Informe um número válido!'
        }
      }
    })
    .positive('Informe um número positivo!')
})

type FormProps = z.infer<typeof schema>

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema)
  })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      if (file.size > 1024 * 1024) {
        alert('A imagem deve ter no máximo 1 MB.')
      } else {
        const reader = new FileReader()
        reader.onload = () => {
          setSelectedImage(reader.result as string)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleForm = <T,>(data: T) => {
    console.log('submit', data)
  }

  return (
    <main className={styles.main}>
      <h1 className="title">Cadastrar Produto</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
        <div>
          {' '}
          <Input
            id="name"
            label="Nome do produto"
            {...register('nome')}
            aria-label="digite o nome do produto"
          />
          {errors.nome?.message && (
            <p className="error">{errors.nome.message}</p>
          )}
        </div>
        <div>
          <Input
            id="price"
            label="Preço do produto"
            {...register('preco', {
              setValueAs: (value: string) => parseInt(value, 10)
            })}
            aria-label="digite o preço do produto"
          />
          {errors.preco?.message && (
            <p className="error">{errors.preco.message}</p>
          )}
        </div>
        <div className={`${styles.image} ${selectedImage && styles.showImage}`}>
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Imagem selecionada"
              width={100}
              height={100}
            />
          ) : (
            <p>Sua imagem aqui</p>
          )}
        </div>
        <input
          type="file"
          className={styles.file}
          onChange={handleFileChange}
          aria-label="selectione a imagem do produto"
        />
        <Button arialLabel="Cadastrar produto">Cadastrar</Button>
      </form>
    </main>
  )
}
