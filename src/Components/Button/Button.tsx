import styles from './Button.module.css'

interface Props {
  value: string
  icon?: string
  unfilled?: boolean
  leftIcon?: boolean
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
  type?: 'button' | 'reset' | 'submit'
  size?: 'large' | 'medium' | 'small'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  icon,
  style,
  value,
  onClick,
  className,
  unfilled = false,
  size = 'medium',
  leftIcon = false,
  type = 'button',
  disabled = false,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ ...style }}
      className={`${styles.button} ${unfilled ? styles.unfilled : ''} ${styles[size]} ${className}`}>
      {!leftIcon && icon ? <i className={`fi fi-br-${icon}`} /> : null}
      {value || null}
      {leftIcon && icon ? <i className={`fi fi-br-${icon}`} /> : null}
    </button>
  )
}

export default Button
