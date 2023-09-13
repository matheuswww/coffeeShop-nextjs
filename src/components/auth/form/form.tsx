'use client'
import { ReactNode } from 'react'
import {
  SubmitHandler,
  FieldValues,
  UseFormHandleSubmit
} from 'react-hook-form'
import styles from './form.module.css'

interface FormProps<T extends FieldValues> {
  handleSubmit: UseFormHandleSubmit<T>
  handleForm: SubmitHandler<T>
  title: ReactNode
  children: ReactNode
}

export default function Form<T extends FieldValues>({
  handleSubmit,
  handleForm,
  title,
  children
}: FormProps<T>) {
  return (
    <main className={styles.main}>
      {title}
      <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
        {children}
      </form>
    </main>
  )
}
