import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'

import { AvatarGroup, DocumentGroup, Table, Tag } from '../../../../../Components'
import { Body, Cell, Row, TableHead } from '../../../../../Components/Table'
import { getDate } from '../../../Users/Layout/UsersTable/Utilities'
import { useAppSelector } from '../../../../../Hooks/useRedux'
import { RecordsDTO } from '../../../../../@Types'
import styles from './ExpedientesTable.module.css'
import RecordsTableColumns from './Constants'

interface Props {
  list: Array<RecordsDTO>
  allIds: Array<string>
  selectedIds: Set<string>
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>
}

const ExpedientesTable = ({ list, allIds, selectedIds, setSelectedIds }: Props) => {
  const metaData = useAppSelector(state => state.metaData)
  const users = useAppSelector(state => state.users)
  const navigate = useNavigate()

  const records = useMemo(() => {
    return list.map(item => {
      return {
        ...item,
        lastAccessed: getDate(item.lastAccessed),
        createdBy: users.list.find(user => user.id === item.createdBy),
        category: metaData.categories.find(cat => cat.id === item.category),
        status: metaData.statuses.find(s => s.id === item.status),
      }
    })
  }, [list])

  return (
    <Table
      page={'expedientes'}
      title="Listado de expedientes"
      label="expedientes"
      allIds={allIds}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}>
      {({ isSelected, allAreSelected, toggleSelect, toggleSelectAll }) => (
        <>
          <TableHead
            {...RecordsTableColumns}
            withCheckboxes={{
              id: 'all-records-check',
              onChange: toggleSelectAll,
              value: allAreSelected,
            }}
          />
          <Body>
            {records.map(item => (
              <Row
                key={item.id}
                withArrow
                withCheckboxes
                value={isSelected(item.id)}
                onChange={() => toggleSelect(item.id)}
                onClickArrow={() => navigate(`/Archivos/${item.id}`, { replace: true })}>
                <Cell className={styles['records-row']}>
                  <span>{item.title}</span>
                  <p>{item.createdBy?.name || '-'}</p>
                </Cell>
                <Cell className={styles['categories-row']}>
                  <Tag
                    label={item.category?.name || 'Sin categoría'}
                    color={item.category?.name ? '8b8fd9' : undefined}
                  />
                </Cell>
                <Cell>
                  <DocumentGroup param={item.associatedDocuments} />
                </Cell>
                <Cell>
                  <AvatarGroup users={item.assignedTo} />
                </Cell>
                <Cell className={styles['status-row']}>
                  <Tag {...item.status!} />
                </Cell>
                <Cell>
                  <button className={styles.button} onClick={e => e.stopPropagation()}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.38712 10.194L11.4066 3.00428C11.4818 2.92725 12.0835 2.31098 13.0361 1.97718C14.3648 1.54066 15.7186 1.90014 16.7966 3.00428C17.8997 4.10842 18.2256 5.46933 17.7994 6.83024C17.4985 7.80599 16.8718 8.47361 16.7966 8.55064L9.25063 16.2796C7.94701 17.6148 4.68796 19.3352 1.6796 16.2796C-1.30369 13.224 0.401049 9.8602 1.6796 8.55064L9.77709 0.231098C10.0779 -0.0770328 10.5543 -0.0770328 10.8551 0.231098C11.1559 0.53923 11.1559 1.0271 10.8551 1.33524L2.78266 9.65478C2.65732 9.75749 0.125283 12.4536 2.78266 15.1755C5.36484 17.8203 7.89687 15.4579 8.17264 15.1755L15.7186 7.42083C15.7186 7.42083 16.1448 6.98431 16.3453 6.36805C16.596 5.54636 16.4205 4.82739 15.7186 4.10842C14.2144 2.56776 12.7604 3.85164 12.4846 4.10842L5.46512 11.2725C5.21442 11.5292 5.03893 11.9658 5.46512 12.4023C5.8913 12.8388 6.29241 12.6334 6.54311 12.4023L11.4066 7.42083C11.7075 7.13837 12.2088 7.13837 12.4846 7.42083C12.7854 7.72896 12.7854 8.24251 12.4846 8.55064L7.6211 13.5064C6.94422 14.174 5.56539 14.7133 4.38712 13.5064C3.18378 12.2996 3.71024 10.8616 4.38712 10.194Z"
                        fill="#1A141F"
                      />
                    </svg>
                  </button>
                </Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  )
}

export default ExpedientesTable
