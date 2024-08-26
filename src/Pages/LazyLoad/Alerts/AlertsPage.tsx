import { useState, useMemo } from 'react'
import { useAppSelector } from '../../../Hooks/useRedux'
import styles from './AlertsPage.module.css'
import { AlertsTable } from './Layout'

const AlertsPage = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set<string>())
  const { list } = useAppSelector(state => state.alerts)

  const { entities } = useAppSelector(state => state.entities)

  const alerts = useMemo(() => {
    return list.slice(0, 9)
  }, [entities])

  const allIds = useMemo(() => {
    return list.map(item => item.id)
  }, [list])

  return (
    <section className={styles.section}>
      <AlertsTable list={alerts} allIds={allIds} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
    </section>
  )
}

export default AlertsPage
