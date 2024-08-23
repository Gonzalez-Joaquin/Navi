import { TableHeadProps } from '../../../../../../Components/Table/Components/TableHead/TableHead'
import styles from '../UsersTable.module.css'

const UsersTableColumns: Pick<TableHeadProps, 'columns'> = {
  columns: [
    {
      className: styles.user,
      name: 'Usuario',
      align: 'start',
    },
    {
      className: styles.type,
      align: 'start',
      name: 'Clasificación',
    },
    {
      className: styles.access,
      name: 'Vencimiento',
      align: 'start',
    },
    {
      className: styles.status,
      name: 'Estado',
      align: 'center',
    },
  ],
}

export default UsersTableColumns
