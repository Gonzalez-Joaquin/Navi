import { UserCard } from '../../Components'
import styles from './RecentAccesses.module.css'

const RecentAccesses = () => {
  return (
    <article className={styles.article}>
      <h3>Accesos recientes</h3>
      <div className={styles.container}>
        <UserCard
          {...{
            name: 'J. Gonzalez',
            size: 'medium + info',
            info: 'Mar 9, 2024',
            status: 'success',
            text: 'Visto',
          }}
        />
        <UserCard
          {...{
            name: 'P. Nelli',
            size: 'medium + info',
            info: 'Aug 19, 2024',
            status: 'warning',
            text: 'Pendiente',
          }}
        />
      </div>
    </article>
  )
}

export default RecentAccesses
