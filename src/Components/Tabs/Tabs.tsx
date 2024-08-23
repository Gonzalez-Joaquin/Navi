import { TabItem } from './Components'
import styles from './Tabs.module.css'

interface Props {
  tabs: Array<{ label: string; key: string }>
  active?: string
}

const Tabs = ({ tabs, active }: Props) => {
  return (
    <ul className={styles.tabs}>
      {tabs.map(({ key, label }, idx) => (
        <TabItem key={idx} active={key === active} label={label} />
      ))}
    </ul>
  )
}

export default Tabs
