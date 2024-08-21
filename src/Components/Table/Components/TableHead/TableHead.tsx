import { Head, Row, Cell } from '../'

export interface TableHeadProps {
  columns: Array<{
    name: string
    sortable?: {
      active: boolean
      onSort: () => void
    }
    align?: 'start' | 'end' | 'center'
    className?: string
  }>
  withCheckboxes?: {
    id: string
    value?: boolean
    onChange: () => void
  }
  className?: string
}

const TableHead = ({ columns, withCheckboxes, className }: TableHeadProps) => {
  return (
    <Head className={className}>
      <Row
        withCheckboxes={withCheckboxes ? true : false}
        value={withCheckboxes?.value}
        onChange={withCheckboxes?.onChange}
        id={withCheckboxes?.id}>
        {columns.map((col, idx) => (
          <Cell key={idx} className={col.className} align={col.align} sortable={col.sortable || undefined}>
            {col.name}
          </Cell>
        ))}
      </Row>
    </Head>
  )
}

export default TableHead
