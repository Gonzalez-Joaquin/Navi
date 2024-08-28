import { TableHeadProps } from '../../../../../../Components/Table/Components/TableHead/TableHead'

import styles from '../ExpedientesTable.module.css'

const RecordsTableColumns: Pick<TableHeadProps, 'columns'> = {
  columns: [
    {
      className: styles.records,
      name: 'Expediente',
      align: 'start',
    },
    {
      className: styles.categories,
      name: 'Categoría',
    },
    {
      className: styles.documents,
      align: 'start',
      name: 'Documentos',
    },
    {
      className: styles.users,
      align: 'start',
      name: 'Usuarios Asignados',
    },
    {
      className: styles.status,
      name: 'Estado',
    },
    {
      className: styles.actions,
      name: 'Acciones',
    },
  ],
}

export default RecordsTableColumns
