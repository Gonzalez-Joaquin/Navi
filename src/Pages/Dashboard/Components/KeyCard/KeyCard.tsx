import styles from './KeyCard.module.css'

interface Props {
  icon: string
  description?: string
  trend?: number
  title?: string
  left?: boolean
  percentage?: boolean
}

const KeyCard = ({ trend, icon, title, description, left = false, percentage = true }: Props) => {
  return (
    <div className={`${styles.card} ${left ? styles['row-reverse'] : ''}`}>
      <div className={styles['icon-container']}>
        <img src={icon} alt={`${title} - svg`} />
      </div>
      <div className={styles.content}>
        {trend && (
          <span className={`${styles.trend} ${percentage ? (trend > 0 ? styles.great : styles.bad) : ''}`}>
            {trend > 0
              ? `${percentage ? '+' : ''}${trend}${percentage ? '%' : ''}`
              : `${trend}${percentage ? '%' : ''}`}
          </span>
        )}
        <div>{description && <p className={styles.description}>{description}</p>}</div>
      </div>
    </div>
  )
}

export default KeyCard
