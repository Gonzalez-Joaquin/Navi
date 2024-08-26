import { useMemo, useState } from 'react'

import EntitiesTable from './Layout/EntitiesTable/EntitiesTable'
import { useAppSelector } from '../../../Hooks/useRedux'
import styles from './Entities.module.css'
import EntityHeader from './Layout/EntityHeader/EntityHeader'

const Entities = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set<string>())
  const { entities } = useAppSelector(state => state.entities)

  const list = useMemo(() => {
    return entities.slice(0, 9)
  }, [entities])

  const allIds = useMemo(() => {
    return list.map(item => item.id)
  }, [list])

  return (
    <section className={styles.section}>
      <EntityHeader />
      <EntitiesTable list={list} allIds={allIds} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
    </section>
  )
}

export default Entities
