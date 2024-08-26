import { UserRoleDTO } from '../../../../../@Types'
import { FormInput, Tabs } from '../../../../../Components'
import Search from '../../../../../Components/Search/Search'
import styles from './UserFilter.module.css'

interface Props {
  role: Array<UserRoleDTO>
}

const UserFilter = ({ role }: Props) => {
  return (
    <article className={styles.article}>
      <Tabs tabs={role} />
      <div className={styles.container}>
        <button className={styles.button}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM8 8H4V10H8V14H10V10H14V8H10V4H8V8Z"
              fill="#1A141F"
            />
          </svg>
        </button>
        
        <Search name="user-search"></Search>
      </div>
    </article>
  )
}

export default UserFilter
