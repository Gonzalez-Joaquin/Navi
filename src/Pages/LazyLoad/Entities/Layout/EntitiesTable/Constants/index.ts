import { TableHeadProps } from '../../../../../../Components/Table/Components/TableHead/TableHead'
import styles from '../EntitiesTable.module.css'

const EntitiesTableColums: Pick<TableHeadProps, 'columns'> = {
  columns: [
    {
      className: styles.entity,
      name: 'Entidad',
      align: 'start',
    },
    {
      className: styles.name,
      name: 'Miembros de la entidad',
      align: 'start',
    },
    {
      className: styles.expedientes,
      name: 'Expedientes asignados',
      align: 'start',
    },
  ],
}

export default EntitiesTableColums
