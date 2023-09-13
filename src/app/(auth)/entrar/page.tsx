'use client'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Form from '@/components/auth/form/form'
import { Input } from '@/components/auth/input/Input'
import Button from '@/components/auth/Button/Button'

const schema = z.object({
  nome: z.string().min(2, 'Mínimo 2 caracteres!'),
  senha: z.string().min(12, 'Mínimo 12 caractres!')
})

type FormProps = z.infer<typeof schema>

export default function Entrar() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema)
  })

  const handleForm = <T,>(data: T) => {
    console.log('submit', data)
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      handleForm={handleForm}
      title={
        <h1
          className="title"
          aria-label="Título escrito entrar separado em letras coloridas"
        >
          Entrar
        </h1>
      }
    >
      <div>
        <Input
          {...register('nome')}
          label="Nome"
          id="nome"
          type="text"
          aria-label="digite seu nome"
        />
        {errors.nome?.message && <p className="error">{errors.nome.message}</p>}
      </div>
      <div>
        <Input
          {...register('senha')}
          label="Senha"
          id="senha"
          type="password"
          aria-label="digite sua senha"
        />
        {errors.senha?.message && (
          <p className="error">{errors.senha.message}</p>
        )}
      </div>
      <Link
        href="/cadastrar"
        className="link"
        aria-label="link para criar uma conta"
      >
        Não possui uma conta?
      </Link>
      <Button arialLabel="Enviar dados">Entrar</Button>
    </Form>
  )
}
