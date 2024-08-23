import { RecentAccesses, RecentDocuments, KeyStatistics } from './Layout'

import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <section className={styles.section}>
      <KeyStatistics />
      <RecentAccesses />
      <RecentDocuments />
    </section>
  )
}

export default Dashboard
