import styles from './Sorteable.module.css'

interface Props {
  label: string
  value: boolean
  onChange: (param: boolean) => void
}

const Sorteable = ({ label, value, onChange }: Props) => {
  return (
    <div className={styles.container}>
      Ordenar por:
      <button
        className={`${styles.sorteable} ${value ? styles.active : ''}`}
        type="button"
        onClick={e => {
          e.stopPropagation()
          onChange(!value)
        }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0L3.11325 5L8.88675 5L6 0ZM6.5 12L6.5 4.5L5.5 4.5L5.5 12L6.5 12Z" fill="#9D3FE7" />
        </svg>
        <span className={styles.span}>{label}</span>
      </button>
    </div>
  )
}

export default Sorteable
