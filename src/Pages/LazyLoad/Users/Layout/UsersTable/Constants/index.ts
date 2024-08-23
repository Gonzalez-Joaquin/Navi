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
      name: 'Rol',
    },
    {
      className: styles.access,
      name: 'Documentos',
      align: 'start',
    },
    {
      className: styles.status,
      name: 'Ultima vez activo',
      align: 'start',
    },
    {
      className: styles.status,
      name: 'Fecha de creación',
      align: 'start',
    },
  ],
}

export default UsersTableColumns
