import { UserRoleDTO } from '../../../../../@Types'
import { FormInput, Tabs } from '../../../../../Components'
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

        <FormInput
          className={styles.input}
          name="search-users"
          placeholder="Buscar..."
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.84236 13.684C8.36049 13.6837 9.83487 13.1755 11.0307 12.2403L14.7906 16L16 14.7907L12.2401 11.031C13.1758 9.83508 13.6844 8.36043 13.6847 6.84199C13.6847 3.06949 10.6151 0 6.84236 0C3.06965 0 0 3.06949 0 6.84199C0 10.6145 3.06965 13.684 6.84236 13.684ZM6.84236 1.7105C9.67253 1.7105 11.9741 4.01197 11.9741 6.84199C11.9741 9.67201 9.67253 11.9735 6.84236 11.9735C4.01219 11.9735 1.71059 9.67201 1.71059 6.84199C1.71059 4.01197 4.01219 1.7105 6.84236 1.7105Z"
                fill="#1A141F"
              />
              <path
                d="M8.05003 5.6327C8.37419 5.95769 8.55295 6.38703 8.55295 6.84202H10.2635C10.2643 6.39252 10.1759 5.94734 10.0036 5.53219C9.83124 5.11705 9.57831 4.74018 9.25942 4.42337C7.9645 3.13024 5.71935 3.13024 4.42529 4.42337L5.63297 5.63441C6.28299 4.98613 7.40343 4.98784 8.05003 5.6327Z"
                fill="#1A141F"
              />
            </svg>
          }
        />
      </div>
    </article>
  )
}

export default UserFilter
