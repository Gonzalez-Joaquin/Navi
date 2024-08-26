import { useMemo, useState } from 'react'

import { Body, Cell, Row, TableHead } from '../../../../../Components/Table'
import { Table, Tag, User } from '../../../../../Components'
import { UserDTO, UserRoleDTO } from '../../../../../@Types'
import UsersTableColumns from './Constants'
import { getDate, getRole } from './Utilities'

import styles from './UsersTable.module.css'

interface Props {
  role: Array<UserRoleDTO>
  users: Array<UserDTO>
}

const UsersTable = ({ users, role }: Props) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const allIds = useMemo(() => {
    return users.map(item => item.id)
  }, [users])

  const usersList = useMemo(() => {
    return users.map(user => {
      return {
        ...user,
        timestamp: getDate(user.timestamp),
        lastAccess: getDate(user.lastAccess),
        role: getRole(user.role, role),
      }
    })
  }, [users])

  return (
    <Table
      page={'users'}
      title="Todos los usuarios"
      label="usuarios"
      allIds={allIds}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}>
      {({ toggleSelect, toggleSelectAll, allAreSelected, isSelected }) => (
        <>
          <TableHead
            {...UsersTableColumns}
            withCheckboxes={{
              id: 'all-user-check',
              value: allAreSelected,
              onChange: toggleSelectAll,
            }}
          />
          <Body>
            {usersList?.map(({ id, name, role, email, lastAccess, timestamp, pic }) => (
              <Row
                key={id}
                withArrow
                withCheckboxes
                id={`user-table-${id}`}
                onChange={() => toggleSelect(id)}
                value={isSelected(id)}>
                <Cell className={styles.user}>
                  <User size="medium + info" name={name} image={pic} info={email} />
                </Cell>
                <Cell className={styles.role} align="start">
                  <Tag label={role.label} color={role.color} />
                </Cell>
                <Cell className={styles.last} align="end">
                  {lastAccess}
                </Cell>
                <Cell className={styles.creation} align="end">
                  {timestamp}
                </Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  )
}

export default UsersTable
