import { NavLink } from 'react-router-dom'
import styles from './NavItem.module.css'

interface Props {
  path: string
  name: string
  icon?: string | JSX.Element
}

const NavItem = ({ name, path, icon }: Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (!isActive ? styles['nav-item'] : `${styles['nav-item']} ${styles.active}`)}>
      {typeof icon === 'string' ? (
        <i className={`fi fi-br-${icon} ${styles.icon}`} />
      ) : (
        <div className={styles['icon-svg']}>{icon}</div>
      )}
      <span className={styles.label}>{name}</span>
    </NavLink>
  )
}

export default NavItem
