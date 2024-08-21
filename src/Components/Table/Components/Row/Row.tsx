import { TableCheckbox } from '..'
import style from './row.module.css'

interface Props {
  children: React.ReactNode
  withCheckboxes?: boolean
  withArrow?: boolean
  id?: string
  value?: boolean
  className?: string
  styles?: React.CSSProperties
  onChange?: () => void
  onClickRow?: boolean
  onClickArrow?: () => void
}

const Row = ({
  id,
  value,
  styles,
  children,
  withArrow,
  className,
  onClickRow = false,
  withCheckboxes,
  onChange,
  onClickArrow,
}: Props) => {
  return (
    <tr
      className={`${style.row} ${className || ''}`}
      style={styles}
      onClick={() => (onClickRow ? onClickArrow!() : {})}>
      {withCheckboxes ? (
        <td className={style.container}>
          <TableCheckbox
            value={value!}
            onChange={onChange!}
            id={`${!withArrow ? 'table-head-row-checkbox-' + id! : 'table-body-row-checkbox-' + id!}`}
          />
        </td>
      ) : null}
      {children}
      {withArrow ? (
        <td>
          <div className={style.arrowContainer}>
            <button
              type="button"
              onClick={e => {
                e.stopPropagation()
                if (onClickArrow) {
                  onClickArrow()
                }
              }}
              id={`table-head-row-button-arrow-${id!}`}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.679999 1.15334C0.394166 1.43918 0.394166 1.90001 0.679999 2.18584L5.58583 7.09168C5.6398 7.14575 5.7039 7.18866 5.77447 7.21793C5.84504 7.2472 5.92068 7.26227 5.99708 7.26227C6.07348 7.26227 6.14913 7.2472 6.2197 7.21793C6.29026 7.18866 6.35437 7.14575 6.40833 7.09168L11.32 2.18001C11.6 1.90001 11.6 1.43334 11.32 1.15334C11.2523 1.08544 11.1718 1.03156 11.0832 0.994803C10.9946 0.958044 10.8997 0.939122 10.8037 0.939122C10.7078 0.939122 10.6129 0.958044 10.5243 0.994803C10.4357 1.03156 10.3552 1.08544 10.2875 1.15334L6 5.43501L1.7125 1.14751C1.42667 0.867509 0.965833 0.867508 0.679999 1.15334Z"
                  fill="#1A141F"
                />
              </svg>
            </button>
          </div>
        </td>
      ) : (
        <td className={style.withoutArrow}></td>
      )}
    </tr>
  )
}

export default Row
