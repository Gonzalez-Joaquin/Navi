import { AlertDTO, DocumentDTO } from '../../../../../@Types'
import { Table } from '../../../../../Components'
import { TableHead } from '../../../../../Components/Table'
import styles from './AlertsTable.module.css'

interface Props {
  list: Array<AlertDTO>
  allIds: Array<string>
  selectedIds: Set<string>
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>
}

const AlertsTable = ({ list, allIds, selectedIds, setSelectedIds }: Props) => {
  return (
    <Table
      page={'alerts'}
      title="Listado de alertas"
      label="alertas"
      allIds={allIds}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}>
      {() => (
        <>
          {/* <TableHead
            {...}
          /> */}
        </>
      )}
    </Table>
  )
}

export default AlertsTable
