import Search from '../../../../../Components/Search/Search'
import Sorteable from '../../../../../Components/Sorteable/Sorteable'
import styles from './EntityHeader.module.css'

const EntityHeader = () => {
  return (
    <div className={styles.header}>
      <Sorteable label="Entidad" value={false} onChange={() => {}} />
      <Search name="entity-search" />
    </div>
  )
}

export default EntityHeader
