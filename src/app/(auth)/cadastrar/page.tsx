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
  email: z.string().email('Email inválido'),
  senha: z.string().min(12, 'Mínimo 12 caractres!')
})

type FormProps = z.infer<typeof schema>

export default function Cadastrar() {
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
          aria-label="Título escrito cadastro separado em letras coloridas"
        >
          Cadastro
        </h1>
      }
    >
      <div>
        <Input
          {...register('email')}
          label="Email"
          id="email"
          type="text"
          aria-label="digite seu email"
          aria-describedby={errors.email?.message && 'erro no campo email'}
        />
        {errors.email?.message && (
          <p className="error">{errors.email.message}</p>
        )}
      </div>
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
          aria-label="digite seu senha"
        />
        {errors.senha?.message && (
          <p className="error">{errors.senha.message}</p>
        )}
      </div>
      <Link
        href="/entrar"
        className="link"
        aria-label="link para fazer login conta"
      >
        Já possui uma conta?
      </Link>
      <Button arialLabel="Enviar dados">Cadastrar</Button>
    </Form>
  )
}
