import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

import { NavHeader, NavItem } from './Components'
import { routes } from '../../Routes/routes'
import styles from './Nav.module.css'

const NavigationBar: React.FC = () => {
  const location = useLocation()
  const { role } = { role: 'admin' }

  const isLogin = useMemo((): boolean => {
    return location.pathname.toLowerCase() === '/login'
  }, [location])

  const filteredRoutes = useMemo(() => {
    return routes.filter(route => {
      if (!route.roles) return true
      return route.roles.includes(role)
    })
  }, [role])

  return (
    !isLogin && (
      <nav className={styles.nav}>
        <NavHeader />
        {filteredRoutes.map(item => item.path.toLowerCase() !== '/login' && <NavItem {...item} key={item.path} />)}
      </nav>
    )
  )
}

export default NavigationBar
