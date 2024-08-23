import useTable from './Hook/useTable'
import style from './table.module.css'
import { Empty } from '..'

interface TableCardHandlers {
  toggleSelect: (id: string) => void
  isSelected: (id: string) => boolean
  toggleSelectAll: () => void
  selectedCount: number
  totalCount: number
  allAreSelected: boolean
}

interface TableProps {
  page: string | Array<string>
  allIds: Array<string>
  selectedIds: Set<string>
  children: (args: TableCardHandlers) => React.ReactNode
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>
  title?: string
  label?: string
  total?: number
  className?: string
  haveHeader?: boolean
  searchQuery?: string
}

const Table = (props: TableProps) => {
  const {
    page,
    label,
    title,
    allIds,
    children,
    className,
    total = 0,
    selectedIds,
    setSelectedIds,
    haveHeader = true,
  } = props

  const { animate, totalCount, isSelected, toggleSelect, selectedCount, allAreSelected, toggleSelectAll } = useTable(
    total,
    allIds,
    selectedIds,
    setSelectedIds
  )

  const handlers: TableCardHandlers = {
    totalCount,
    isSelected,
    toggleSelect,
    selectedCount,
    allAreSelected,
    toggleSelectAll: () => toggleSelectAll(allIds),
  }

  return (
    <div className={`${style.container} ${style[Array.isArray(page) ? page.join(`-`) : page]} ${className}`}>
      {haveHeader && (
        <div className={style.content}>
          <h3>{title}</h3>
          <div className={`${style.selectedContainer} ${selectedCount !== 0 ? style.reveal : ''}`}>
            <p>{label}</p>
            <div className={`${style.counter} ${animate ? style.animate : ''}`}>
              <span>{selectedCount}</span>
            </div>
          </div>
        </div>
      )}
      {allIds.length !== 0 ? (
        <table className={style.table}>{children(handlers)}</table>
      ) : (
        <Empty label={label} button={{ action: () => {} }} />
      )}
    </div>
  )
}

export default Table
