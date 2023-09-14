import styles from './Input.module.css'
import { HTMLProps, forwardRef } from 'react'

interface Input extends HTMLProps<HTMLInputElement> {
  label: string
  id: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, Input>(
  ({ id, label, ...inputProps }, ref) => {
    return (
      <>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input id={id} className={styles.input} ref={ref} {...inputProps} />
      </>
    )
  }
)
