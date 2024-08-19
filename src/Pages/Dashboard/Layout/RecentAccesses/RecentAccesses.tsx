import { UserCard } from '../../Components'
import styles from './RecentAccesses.module.css'

const RecentAccesses = () => {
  return (
    <article>
      <h3>Accesos recientes</h3>
      <div>
        <UserCard />
      </div>
    </article>
  )
}

export default RecentAccesses
