import { SetStateAction, useState } from 'react'

import { TableHead } from '../../../../../Components/Table'
import { Table } from '../../../../../Components'
import UsersTableColumns from './Constants'

import styles from './UsersTable.module.css'

const UsersTable = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  return (
    <Table
      page={'users'}
      title="Todos los usuarios"
      label="usuarios"
      allIds={[]}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}>
      {({}) => (
        <>
          <TableHead {...UsersTableColumns} />
        </>
      )}
    </Table>
  )
}

export default UsersTable
