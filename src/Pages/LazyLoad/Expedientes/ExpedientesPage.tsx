import { useState, useMemo } from 'react'

import { ExpedienteHeader, ExpedientesTable } from './Layout'
import { useAppSelector } from '../../../Hooks/useRedux'
import styles from './ExpedientesPage.module.css'

const ExpedientesPage = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set<string>())
  const { list } = useAppSelector(state => state.expedientes)

  const { entities } = useAppSelector(state => state.entities)

  const expedientes = useMemo(() => {
    return list.slice(0, 9)
  }, [entities])

  const allIds = useMemo(() => {
    return expedientes.map(item => item.id)
  }, [expedientes])

  return (
    <section className={styles.section}>
      <ExpedienteHeader />
      <ExpedientesTable list={expedientes} allIds={allIds} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
    </section>
  )
}

export default ExpedientesPage
