import { RecentAccesses, RecentDocuments } from './Layout'

import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <section className={styles.section}>
      <RecentAccesses />
      <RecentDocuments />
    </section>
  )
}

export default Dashboard
