import styles from './TabItem.module.css'

interface Props {
  label: string
  active: boolean
}

const TabItem = ({ label, active }: Props) => {
  return (
    <li className={`${styles.tab} ${active ? styles.active : ''}`}>
      <span>{label}</span>
    </li>
  )
}

export default TabItem
