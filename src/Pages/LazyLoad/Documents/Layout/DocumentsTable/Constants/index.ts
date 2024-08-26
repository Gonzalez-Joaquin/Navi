import { TableHeadProps } from '../../../../../../Components/Table/Components/TableHead/TableHead'
import styles from '../DocumentsTable.module.css'

const DocumentsColumns: Pick<TableHeadProps, 'columns'> = {
  columns: [
    {
      className: styles.doc,
      name: 'Documento',
      align: 'start',
    },

    {
      className: styles.viewedBy,
      align: 'start',
      name: 'Visto por',
    },
    {
      className: styles.last,
      align: 'start',
      name: 'Último acceso',
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

export default DocumentsColumns
