import { TabItem } from './Components'
import styles from './Tabs.module.css'

interface Props {
  tabs: Array<{ id: string; label: string }>
  active?: string
}

const Tabs = ({ tabs, active }: Props) => {
  return (
    <ul className={styles.tabs}>
      {tabs.map(({ id, label }, idx) => (
        <TabItem key={idx} active={id === active} label={label} />
      ))}
    </ul>
  )
}

export default Tabs
