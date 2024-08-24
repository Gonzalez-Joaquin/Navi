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
      className: styles.role,
      align: 'center',
      name: 'Rol',
    },
    {
      className: styles.last,
      name: 'Ultima actividad',
      align: 'end',
    },
    {
      className: styles.creation,
      name: 'Fecha de creación',
      align: 'end',
    },
  ],
}

export default UsersTableColumns
