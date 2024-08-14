import { LazyExoticComponent, lazy } from 'react'

import DashboardPage from '../Pages/Dashboard/Dashboard'
import LoginPage from '../Pages/Login/Login'

type JSXComponent = () => JSX.Element

interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

export const routes: Route[] = [
  {
    path: '/login',
    Component: LoginPage,
    name: 'Login',
  },
  {
    path: '/dashboard',
    Component: DashboardPage,
    name: 'Dashboard',
  },
  {
    path: '/users',
    Component: lazy(() => import('../Pages/LazyLoad/Users/UsersPage')),
    name: 'User Management',
  },
  {
    path: '/documents',
    Component: lazy(() => import('../Pages/LazyLoad/Documents/DocumentsPage')),
    name: 'Documents',
  },
]
