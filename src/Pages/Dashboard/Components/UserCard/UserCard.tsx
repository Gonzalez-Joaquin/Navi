import { Badge, User } from '../../../../Components'
import styles from './UserCard.module.css'

interface Props {
  name: string
  size: string
  status: 'error' | 'warning' | 'success' | 'processing'
  text: string
  info?: string
}

const UserCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <User name={props.name} size="medium + info" info={props.info} />
      <Badge type="status" status={props.status} extra={{ text: props.text }} />
    </div>
  )
}

export default UserCard
