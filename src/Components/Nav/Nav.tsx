import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

import { NavHeader, NavItem } from './Components'
import { routes } from '../../Routes/routes'
import styles from './Nav.module.css'

const NavigationBar: React.FC = () => {
  const location = useLocation()

  const isLogin = useMemo((): boolean => {
    return location.pathname.toLowerCase() === '/login'
  }, [location])

  return (
    !isLogin && (
      <nav className={styles.nav}>
        <NavHeader />
        {routes.map(item => item.path.toLowerCase() !== '/login' && <NavItem {...item} key={item.path} />)}
      </nav>
    )
  )
}

export default NavigationBar
