import styles from './Button.module.css'
export default function Button({
  children,
  arialLabel
}: {
  children: string
  arialLabel: string
}) {
  return (
    <button aria-label={arialLabel} className={styles.button} type="submit">
      {children}
    </button>
  )
}
