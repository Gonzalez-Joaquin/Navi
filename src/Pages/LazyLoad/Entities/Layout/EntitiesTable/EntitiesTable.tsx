import { Body, Cell, Row, TableHead } from '../../../../../Components/Table'
import { getDate } from '../../../Users/Layout/UsersTable/Utilities'
import { AvatarGroup, Table } from '../../../../../Components'
import { EntityDTO } from '../../../../../@Types'
import EntitiesTableColums from './Constants'

import styles from './EntitiesTable.module.css'

interface Props {
  list: Array<EntityDTO>
  allIds: Array<string>
  selectedIds: Set<string>
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>
}

const EntitiesTable = ({ list, allIds, selectedIds, setSelectedIds }: Props) => {
  return (
    <Table
      page="entities"
      label="entidades"
      title="Listado de entidades"
      allIds={allIds}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}>
      {({ allAreSelected, toggleSelectAll, toggleSelect, isSelected }) => (
        <>
          <TableHead
            {...EntitiesTableColums}
            withCheckboxes={{
              id: 'all-entity-check',
              value: allAreSelected,
              onChange: toggleSelectAll,
            }}
          />
          <Body>
            {list.map(item => (
              <Row
                key={item.id}
                withArrow
                withCheckboxes
                id={`entity-table-${item.id}`}
                onChange={() => toggleSelect(item.id)}
                value={isSelected(item.id)}>
                <Cell className={styles.entity}>
                  <div className={styles['entity-container']}>
                    <span>{item.name}</span>
                    <p>{getDate(item.timestamp)}</p>
                  </div>
                </Cell>
                <Cell className={styles['members-list']}>
                  <AvatarGroup users={item.members} />
                </Cell>
                <Cell className={styles.expedientes} align="start">
                  {item.expedientIds || 'Sin expedientes asignados'}
                </Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  )
}

export default EntitiesTable
