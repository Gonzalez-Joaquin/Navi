import style from './tableButtons.module.css'

import Cell from '../Cell/Cell'

interface Props {
  // A logic has to be implemented to know in what order and what buttons to show.
  // A component like this is created to stop being dependent on the `filter`
  // tag to change the colors of the svg's
  trash?: () => void
  edit?: () => void
  className?: string
}

const EditButton = ({ edit }: Pick<Props, 'edit'>) => {
  return edit ? (
    <button
      type="button"
      onClick={e => {
        e.stopPropagation()
        edit()
      }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.82975 5.33333L10.6652 6.16889L2.5952 14.2222H1.77753V13.4044L9.82975 5.33333ZM13.0293 0C12.8071 0 12.576 0.0888889 12.4072 0.257778L10.7807 1.88444L14.1136 5.21778L15.74 3.59111C16.0867 3.24444 16.0867 2.66667 15.74 2.33778L13.6603 0.257778C13.4826 0.08 13.2604 0 13.0293 0ZM9.82975 2.83556L0 12.6667V16H3.33287L13.1626 6.16889L9.82975 2.83556Z"
          fill="#989EBA"
        />
      </svg>
    </button>
  ) : null
}

const TrashButton = ({ trash }: Pick<Props, 'trash'>) => {
  return trash ? (
    <button
      type="button"
      onClick={e => {
        e.stopPropagation()
        trash()
      }}
      className={style.trash}>
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.375 0.833374V1.74078H0V3.5556H0.875V15.3519C0.875 15.8332 1.05937 16.2948 1.38756 16.6352C1.71575 16.9755 2.16087 17.1667 2.625 17.1667H11.375C11.8391 17.1667 12.2842 16.9755 12.6124 16.6352C12.9406 16.2948 13.125 15.8332 13.125 15.3519V3.5556H14V1.74078H9.625V0.833374H4.375ZM2.625 3.5556H11.375V15.3519H2.625V3.5556ZM4.375 5.37041V13.5371H6.125V5.37041H4.375ZM7.875 5.37041V13.5371H9.625V5.37041H7.875Z"
          fill="#989EBA"
        />
      </svg>
    </button>
  ) : null
}

const TableButtons = ({ trash, edit, className }: Props) => {
  return (
    <Cell className={`${style.cell} ${className}`}>
      <TrashButton trash={trash} />
      <EditButton edit={edit} />
    </Cell>
  )
}

export default TableButtons
