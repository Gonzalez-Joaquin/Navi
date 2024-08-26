import { useState, useMemo } from 'react'

import { useAppSelector } from '../../../Hooks/useRedux'
import styles from './ExpedientesPage.module.css'
import { ExpedientesTable } from './Layout'

const ExpedientesPage = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set<string>())
  const { list } = useAppSelector(state => state.expedientes)

  const { entities } = useAppSelector(state => state.entities)

  const expedientes = useMemo(() => {
    return list.slice(0, 9)
  }, [entities])

  const allIds = useMemo(() => {
    return list.map(item => item.id)
  }, [list])

  return (
    <section className={styles.section}>
      <ExpedientesTable list={expedientes} allIds={allIds} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
    </section>
  )
}

export default ExpedientesPage
