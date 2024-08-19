import { useMemo } from 'react'
import styles from './FormInput.module.css'

interface Props {
  name: string
  id?: string
  label?: string
  icon?: string | JSX.Element
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
  type = 'text',
  small = false,
  disabled = false,
}: Props) => {
  const valueLenght = useMemo((): number | undefined => {
    if (value) {
      return value.length
    }
  }, [value])

  return (
    <div className={`${styles.container} ${small ? styles.small : ''}`}>
      <label htmlFor={id || name} className={styles.label}>
        {label ? label : null}
      </label>
      <div className={styles['input-container']}>
        {type !== 'textarea' ? (
          <input
            name={name}
            type={type}
            id={id || name}
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
        {type !== 'textarea' && icon ? (
          typeof icon === 'string' ? (
            <i className={`fi fi-br-${icon} ${styles.icon}`} />
          ) : (
            <div className={styles.icon}>{icon}</div>
          )
        ) : null}
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
