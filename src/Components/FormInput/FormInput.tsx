import { useMemo } from 'react'
import styles from './FormInput.module.css'

interface Props {
  id: string
  name: string
  label?: string
  icon?: string
  limit?: number
  value?: string
  small?: boolean
  disabled?: boolean
  className?: string
  placeholder?: string
  error?: string | null
  style?: React.CSSProperties
  type?: 'text' | 'textarea' | 'number' | 'email' | 'password'
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const FormInput = ({
  id,
  name,
  label,
  icon,
  limit,
  value,
  style,
  onChange,
  className,
  placeholder,
  error = null,
  small = false,
  type = 'text',
  disabled = false,
}: Props) => {
  const valueLenght = useMemo((): number | undefined => {
    if (value) {
      return value.length
    }
  }, [value])

  return (
    <div className={`${styles.container} ${small ? styles.small : ''}`}>
      <label htmlFor={id} className={styles.label}>
        {label ? label : null}
      </label>
      <div className={styles['input-container']}>
        {type !== 'textarea' ? (
          <input
            id={id}
            name={name}
            style={{ ...style }}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`${styles.input} ${className} ${error ? styles['input-error'] : ''} ${
              icon ? styles['input-icon'] : ' '
            }`}
          />
        ) : (
          <textarea
            id={id}
            name={name}
            onChange={onChange}
            disabled={disabled}
            style={{ ...style }}
            placeholder={placeholder}
            className={`${styles.textarea} ${className} ${error ? styles['input-error'] : ''}`}
          />
        )}
        {type !== 'textarea' && icon ? <i className={`fi fi-br-${icon} ${styles.icon}`} /> : null}
      </div>
      <div className={styles['errors-container']}>
        {error && <span className={styles.error}>{error}</span>}{' '}
        {valueLenght && limit ? (
          valueLenght > limit - 5 ? (
            <p className={styles.counter}>
              <span className={valueLenght > limit - 3 ? styles.error : ''}>{valueLenght}</span>/{limit}
            </p>
          ) : null
        ) : null}
      </div>
    </div>
  )
}

export default FormInput
