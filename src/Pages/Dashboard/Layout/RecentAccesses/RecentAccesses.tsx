import { useMemo } from 'react'
import { useAppSelector } from '../../../../Hooks/useRedux'
import { UserCard } from '../../Components'
import styles from './RecentAccesses.module.css'
import { getDate } from '../../../LazyLoad/Users/Layout/UsersTable/Utilities'

const RecentAccesses = () => {
  const { list } = useAppSelector(state => state.users)
  const users = useMemo(() => {
    const newList = list.slice().sort((a, b) => b.lastAccess - a.lastAccess)

    return newList.slice(0, 2).map(user => {
      return { ...user, lastAccess: getDate(user.lastAccess) }
    })
  }, [list])

  return (
    <article className={styles.article}>
      <h3>Accesos recientes</h3>
      <div className={styles.container}>
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            image={user.pic}
            info={user.lastAccess}
            size={'medium + info'}
            status={user.isActive ? 'success' : 'error'}
            text={user.isActive ? 'Activo' : 'Inactivo'}
          />
        ))}
      </div>
    </article>
  )
}

export default RecentAccesses
