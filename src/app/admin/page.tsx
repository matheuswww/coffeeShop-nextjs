'use client'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Form from '@/components/form/form/form'
import { Input } from '@/components/form/input/Input'
import Button from '@/components/form/Button/Button'

const schema = z.object({
  email: z.string().email('Mínimo 2 caracteres!'),
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
          {...register('email')}
          label="Email"
          id="email"
          type="text"
          aria-label="digite seu email"
        />
        {errors.email?.message && (
          <p className="error">{errors.email.message}</p>
        )}
      </div>
      <div style={{ marginBottom: '20px' }}>
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
      <Button arialLabel="Enviar dados">Entrar</Button>
    </Form>
  )
}
