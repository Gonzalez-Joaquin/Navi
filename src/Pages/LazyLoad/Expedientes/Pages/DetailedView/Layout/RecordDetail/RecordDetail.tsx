import { useMemo } from 'react'
import { RecordsDTO } from '../../../../../../../@Types'
import styles from './RecordDetail.module.css'
import { useAppSelector } from '../../../../../../../Hooks/useRedux'
import { Avatar, Tag } from '../../../../../../../Components'
import { getDate } from '../../../../../Users/Layout/UsersTable/Utilities'

interface Props {
  record: RecordsDTO
}

const RecordDetail = ({ record }: Props) => {
  const { list } = useAppSelector(state => state.users)
  const { userRoles, statuses } = useAppSelector(state => state.metaData)

  const user = useMemo(() => {
    return list.find(item => item.id === record.createdBy)
  }, [list, record])

  const rol = useMemo(() => {
    if (user) {
      return userRoles.find(rol => rol.id === user.role)
    }
  }, [userRoles, record])

  const status = useMemo(() => {
    return statuses.find(s => s.id === record.status)
  }, [, statuses, record])

  return (
    <article className={styles.container}>
      {user ? (
        <div className={styles['user-data']}>
          <Avatar size="large" user={{ name: user.name, pic: user.pic }} />
          <h3>{user.name}</h3>
          <div className={styles['user-data-content']}>
            {rol ? <Tag {...rol} /> : null}
            <div className={styles.shape}></div>
            <span>{getDate(user.lastAccess)}</span>
          </div>
        </div>
      ) : null}
      <div className={styles['detail-content']}>
        <h3>{record.title}</h3>
        <div className={styles['detail-content-container']}>
          <div>
            <p>Fecha de creación</p>
            <span>{getDate(record.timestamp)}</span>
          </div>
          <div>
            <p>Estado</p>
            {status && <Tag label={status.label} color={status.color} />}
          </div>
          <div>
            <p>Categoría</p>
            <span>{record.category}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default RecordDetail
