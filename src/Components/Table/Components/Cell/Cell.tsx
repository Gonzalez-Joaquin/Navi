import React, { useEffect, useRef } from "react"
import style from "./cell.module.css"

interface Props {
  children: React.ReactNode
  align?: "start" | "center" | "end"
  sortable?: {
    active: boolean
    onSort: () => void
  }
  className?: string
  customStyle?: React.CSSProperties
}

const Cell = ({ children, className, customStyle, align = "center", sortable }: Props) => {
  const [isOverflowing, setIsOverflowing] = React.useState(false)
  const cellRef = useRef<HTMLTableCellElement>(null)

  const checkOverflow = () => {
    if (cellRef.current) {
      setIsOverflowing(cellRef.current.scrollWidth > cellRef.current.clientWidth)
    }
  }

  useEffect(() => {
    checkOverflow()
    window.addEventListener("resize", checkOverflow)
    return () => {
      window.removeEventListener("resize", checkOverflow)
    }
  }, [])

  useEffect(() => {
    checkOverflow()
  }, [children])

  return (
    <td
      className={`${style.cell} ${className || ""} ${sortable ? style.onSortActive : ""}`}
      style={customStyle || { textAlign: align }}
      onClick={() => (sortable ? sortable.onSort() : {})}
    >
      {isOverflowing && <div className={style.tooltip}>{children}</div>}
      <div className={style.cellContainer} ref={cellRef}>
        {children}
        {sortable ? (
          <i
            className={`fi fi-rr-arrow-small-${sortable.active ? "down" : "up"} ${style.iconSort}`}
          />
        ) : null}
      </div>
    </td>
  )
}

export default Cell
