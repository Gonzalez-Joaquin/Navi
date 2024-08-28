import { useMemo } from 'react'
import { Body, Cell, Row, TableHead } from '../../../../../Components/Table'
import { useAppSelector } from '../../../../../Hooks/useRedux'
import { DocumentDTO } from '../../../../../@Types'
import { AvatarGroup, Table, Tag } from '../../../../../Components'
import DocumentsColumns from './Constants'

import docSVG from '../../../../../Assets/Svg/Icon/doc-icon.svg'
import styles from './DocumentsTable.module.css'
import { getDate } from '../../../Users/Layout/UsersTable/Utilities'

interface Props {
  list: Array<DocumentDTO>
  allIds: Array<string>
  selectedIds: Set<string>
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>
  className?: string
}

const DocumentsTable = ({ list, allIds, selectedIds, setSelectedIds, className }: Props) => {
  const { statuses, fileTypes } = useAppSelector(state => state.metaData)

  const documentsList = useMemo(() => {
    return list.map(doc => {
      return {
        ...doc,
        creationDate: getDate(doc.creationDate),
        lastAccessed: getDate(doc.lastAccessed),
        status: statuses.find(item => item.id === doc.status),
        fileType: fileTypes.find(item => item.id === doc.fileType),
      }
    })
  }, [list])

  return (
    <Table
      page={'documents'}
      title="Listado de documentos"
      label="documentos"
      allIds={allIds}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}
      className={className}>
      {({ allAreSelected, toggleSelectAll, toggleSelect, isSelected }) => (
        <>
          <TableHead
            {...DocumentsColumns}
            withCheckboxes={{
              id: 'all-documents-check',
              onChange: toggleSelectAll,
              value: allAreSelected,
            }}
          />
          <Body>
            {documentsList.map(({ id, fileType, creationDate, lastAccessed, status, title, viewedBy }) => (
              <Row
                key={id}
                withArrow
                withCheckboxes
                id={`doc-table-${id}`}
                value={isSelected(id)}
                onChange={() => toggleSelect(id)}>
                <Cell className={styles.doc}>
                  <div className={styles['doc-container']}>
                    <div className={styles['doc-icon']}>
                      <img alt={`doc-svg-${fileType?.type}`} src={fileType?.icon} loading="lazy" />
                    </div>
                    <div className={styles['doc-content']}>
                      <span>{title}</span>
                      <p>{creationDate}</p>
                    </div>
                  </div>
                </Cell>
                <Cell className={styles.viewedBy}>
                  <AvatarGroup users={viewedBy} />
                </Cell>
                <Cell className={styles.last} align="start">
                  {lastAccessed}
                </Cell>
                <Cell className={styles['status-row']}>
                  <div>
                    <Tag label={status!.label} color={status?.color} />
                  </div>
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

export default DocumentsTable
