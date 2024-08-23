import { Tabs } from '../../../Components'
import { UserCount } from './Layout'
import UsersTable from './Layout/UsersTable/UsersTable'
import styles from './UsersPage.module.css'

const UsersPage = () => {
  return (
    <section className={styles.section}>
      <Tabs
        tabs={[
          {
            label: 'Administrador',
            key: 'admin',
          },
          {
            label: 'Armador',
            key: 'shipowner',
          },
          {
            label: 'Propietario',
            key: 'owner',
          },
          {
            label: 'General',
            key: 'general',
          },
        ]}
      />

      <UsersTable />
    </section>
  )
}

export default UsersPage
