import { RecentAccesses } from './Layout'

import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <section className={styles.section}>
      <RecentAccesses />
    </section>
  )
}

export default Dashboard
