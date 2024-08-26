import { useMemo, useState } from 'react'
import { useAppSelector } from '../../../Hooks/useRedux'
import styles from './DocumentsPage.module.css'
import { DocumentsHeader, DocumentsTable } from './Layout'

const DocumentsPage = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set<string>())
  const { list } = useAppSelector(state => state.documents)

  const { entities } = useAppSelector(state => state.entities)

  const documents = useMemo(() => {
    return list.slice(0, 9)
  }, [entities])

  const allIds = useMemo(() => {
    return documents.map(item => item.id)
  }, [documents])

  return (
    <section className={styles.section}>
      <DocumentsHeader />
      <DocumentsTable list={documents} allIds={allIds} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
    </section>
  )
}

export default DocumentsPage
