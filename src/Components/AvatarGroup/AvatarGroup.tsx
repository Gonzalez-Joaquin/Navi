import { useMemo } from 'react'
import { useAppSelector } from '../../Hooks/useRedux'
import styles from './AvatarGroup.module.css'
import Avatar from '../Avatar/Avatar'

interface Props {
  users: Array<string>
  maxLength?: number
}

const AvatarGroup = ({ users, maxLength = 3 }: Props) => {
  const { list } = useAppSelector(state => state.users)

  const userMap = useMemo(() => {
    return new Map<string, { name: string; pic: string }>(
      list.filter(user => user.pic !== undefined).map(user => [user.id, { name: user.name, pic: user.pic as string }])
    )
  }, [list])

  const group = useMemo(() => {
    const limitedUsers = maxLength ? users.slice(0, maxLength) : users

    return limitedUsers
      .map(userId => userMap.get(userId))
      .filter((user): user is { name: string; pic: string } => !!user)
  }, [users, userMap, maxLength])

  return (
    <div className={styles.group}>
      {group.map(({ name, pic }, index) => (
        <Avatar key={index} size="small" user={{ name, pic }} />
      ))}
      {users.length > maxLength && (
        <div className={styles.limit}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  )
}

export default AvatarGroup
