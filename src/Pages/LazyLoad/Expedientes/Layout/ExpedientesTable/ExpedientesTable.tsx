import { ExpedienteDTO } from '../../../../../@Types'
import { Table } from '../../../../../Components'
import styles from './ExpedientesTable.module.css'

interface Props {
  list: Array<ExpedienteDTO>
  allIds: Array<string>
  selectedIds: Set<string>
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>
}

const ExpedientesTable = ({ list, allIds, selectedIds, setSelectedIds }: Props) => {
  return (
    <Table
      page={'expedientes'}
      title="Listado de expedientes"
      label="expedientes"
      allIds={allIds}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}>
      {() => <>hola</>}
    </Table>
  )
}

export default ExpedientesTable
