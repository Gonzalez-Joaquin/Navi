import { useMemo, useState } from 'react'
import { Badge, Table, User } from '../../../../Components'

import { Body, Cell, Paginator, Row, TableHead } from '../../../../Components/Table'
import RecentDocumentsColumns from './Constants'
import { manageState } from './Utilities'

import styles from './RecentDocuments.module.css'

export interface DocumentDataDTO {
  id: string
  user: string
  documentType: string
  accessDate: string
  documentStatus: 'error' | 'warning' | 'success' | 'processing'
}

const RecentDocuments = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const documentsData: Array<DocumentDataDTO> = [
    {
      id: '1',
      user: 'Emma Ryan Jr.',
      documentType: 'Certificado',
      accessDate: 'Mar 9, 2024',
      documentStatus: 'success',
    },
    {
      id: '2',
      user: 'Adrian Daren',
      accessDate: 'Feb 18, 2024',
      documentType: 'Registro de matenimiento',
      documentStatus: 'error',
    },
    {
      id: '3',
      user: 'Roxanne Hills',
      accessDate: 'Apr 16, 2024',
      documentType: 'Plano técnico',
      documentStatus: 'processing',
    },
  ]

  const allIds = useMemo(() => {
    return documentsData.map(item => item.id)
  }, [documentsData])

  return (
    <Table
      page={''}
      label="Documentos"
      allIds={allIds}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}
      title="Últimos Documentos Creados"
      className={styles.table}>
      {({}) => (
        <>
          <TableHead {...RecentDocumentsColumns} />
          <Body>
            {documentsData.map(item => (
              <Row key={item.id} withArrow>
                <Cell className={styles.user}>
                  <User name={item.user} />
                </Cell>
                <Cell className={styles.type} align="start">
                  {item.documentType}
                </Cell>
                <Cell className={styles.access} align="start">
                  {item.accessDate}
                </Cell>
                <Cell className={styles.status}>
                  <Badge
                    type="status"
                    status={item.documentStatus}
                    extra={{ text: manageState(item.documentStatus) }}
                  />
                </Cell>
              </Row>
            ))}
          </Body>

          <Paginator currentPage={0} exactPage={() => {}} nextPage={() => {}} prevPage={() => {}} totalPages={0} />
        </>
      )}
    </Table>
  )
}

export default RecentDocuments
