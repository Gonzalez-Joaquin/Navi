import { useMemo, useState } from 'react'
import { Badge, Table, User } from '../../../../Components'

import { Body, Cell, Paginator, Row, TableHead } from '../../../../Components/Table'
import { getDate } from '../../../LazyLoad/Users/Layout/UsersTable/Utilities'
import { useAppSelector } from '../../../../Hooks/useRedux'
import RecentDocumentsColumns from './Constants'
import { manageState } from './Utilities'

import styles from './RecentDocuments.module.css'
import { DocumentsTable } from '../../../LazyLoad/Documents/Layout'

export interface DocumentDataDTO {
  id: string
  user: string
  documentType: string
  accessDate: string
  documentStatus: 'error' | 'warning' | 'success' | 'processing'
}

const RecentDocuments = () => {
  const { list } = useAppSelector(state => state.documents)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const documentsData = useMemo(() => {
    const newList = list.slice().sort((a, b) => b.creationDate - a.creationDate)

    return newList.slice(0, 4).map(doc => {
      return { ...doc, lastAccess: getDate(doc.creationDate) }
    })
  }, [list])

  const allIds = useMemo(() => {
    return documentsData.map(item => item.id)
  }, [documentsData])

  return (
    <DocumentsTable
      list={documentsData}
      allIds={allIds}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}
      className={styles.table}
    />
  )
}

export default RecentDocuments
