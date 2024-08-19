import styles from './User.module.css'

interface Props {
  name: string
  size?: 'small' | 'medium' | 'medium + info'
  image?: string
  info?: string
}

const User = ({ name, info, image, size = 'medium' }: Props) => {
  return (
    <div className={styles.container}>
      {size === 'small' ? (
        <div className={styles['profile-svg']}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
              fill="#9D3FE7"
            />
          </svg>
        </div>
      ) : (
        <div className={styles['profile-pic']}>
          {image ? (
            <img src={image} alt={`profile-pic-${name}`} />
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 1 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
                fill="#9D3FE7"
              />
            </svg>
          )}
        </div>
      )}
      <div className={styles.information}>
        <span className={styles.name}>{name}</span>
        {size === 'medium + info' && info ? <p className={styles.info}>{info}</p> : null}
      </div>
    </div>
  )
}

export default User
