import { LazyExoticComponent, lazy } from 'react'

import DashboardPage from '../Pages/Dashboard/Dashboard'
import LoginPage from '../Pages/Login/Login'

type JSXComponent = () => JSX.Element

interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
  icon?: string | JSX.Element
  desc?: string
  roles?: Array<string>
}

export const routes: Array<Route> = [
  {
    path: '/login',
    Component: LoginPage,
    name: 'Login',
  },
  {
    path: '/dashboard',
    Component: DashboardPage,
    name: 'Dashboard',
    icon: (
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 16H20V12H0V16ZM2 13H4V15H2V13ZM0 0V4H20V0H0ZM4 3H2V1H4V3ZM0 10H20V6H0V10ZM2 7H4V9H2V7Z"
          fill="#1A141F"
        />
      </svg>
    ),
    roles: ['admin'],
  },
  {
    path: '/users',
    Component: lazy(() => import('../Pages/LazyLoad/Users/UsersPage')),
    name: 'Usuarios',
    desc: 'Encuentre todos los usuarios en este apartado',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
          fill="#1A141F"
        />
      </svg>
    ),
    roles: ['admin'],
  },
  {
    path: '/files',
    Component: lazy(() => import('../Pages/LazyLoad/Documents/DocumentsPage')),
    name: 'Expedientes',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.38712 10.194L11.4066 3.00428C11.4818 2.92725 12.0835 2.31098 13.0361 1.97718C14.3648 1.54066 15.7186 1.90014 16.7966 3.00428C17.8997 4.10842 18.2256 5.46933 17.7994 6.83024C17.4985 7.80599 16.8718 8.47361 16.7966 8.55064L9.25063 16.2796C7.94701 17.6148 4.68796 19.3352 1.6796 16.2796C-1.30369 13.224 0.401049 9.8602 1.6796 8.55064L9.77709 0.231098C10.0779 -0.0770328 10.5543 -0.0770328 10.8551 0.231098C11.1559 0.53923 11.1559 1.0271 10.8551 1.33524L2.78266 9.65478C2.65732 9.75749 0.125283 12.4536 2.78266 15.1755C5.36484 17.8203 7.89687 15.4579 8.17264 15.1755L15.7186 7.42083C15.7186 7.42083 16.1448 6.98431 16.3453 6.36805C16.596 5.54636 16.4205 4.82739 15.7186 4.10842C14.2144 2.56776 12.7604 3.85164 12.4846 4.10842L5.46512 11.2725C5.21442 11.5292 5.03893 11.9658 5.46512 12.4023C5.8913 12.8388 6.29241 12.6334 6.54311 12.4023L11.4066 7.42083C11.7075 7.13837 12.2088 7.13837 12.4846 7.42083C12.7854 7.72896 12.7854 8.24251 12.4846 8.55064L7.6211 13.5064C6.94422 14.174 5.56539 14.7133 4.38712 13.5064C3.18378 12.2996 3.71024 10.8616 4.38712 10.194Z"
          fill="#1A141F"
        />
      </svg>
    ),
  },
  {
    path: '/alerts',
    Component: lazy(() => import('../Pages/LazyLoad/Documents/DocumentsPage')),
    name: 'Alertas',
    icon: (
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.425 14.065L15.255 13.915C14.7727 13.4853 14.3506 12.9925 14 12.45C13.6171 11.7013 13.3876 10.8836 13.325 10.045V7.57501C13.3283 6.25782 12.8505 4.98475 11.9814 3.995C11.1122 3.00525 9.91157 2.36694 8.60499 2.20001V1.55501C8.60499 1.37798 8.53467 1.2082 8.40949 1.08302C8.28431 0.957838 8.11453 0.887512 7.93749 0.887512C7.76046 0.887512 7.59068 0.957838 7.4655 1.08302C7.34032 1.2082 7.26999 1.37798 7.26999 1.55501V2.21001C5.97512 2.38898 4.78898 3.03114 3.93126 4.01757C3.07354 5.00399 2.60236 6.26783 2.60499 7.57501V10.045C2.54237 10.8836 2.31288 11.7013 1.92999 12.45C1.58544 12.9912 1.17009 13.4839 0.694994 13.915L0.524994 14.065V15.475H15.425V14.065Z"
          fill="#1A141F"
        />
        <path
          d="M6.66 16C6.70385 16.3169 6.8609 16.6073 7.10215 16.8175C7.3434 17.0276 7.65255 17.1434 7.9725 17.1434C8.29246 17.1434 8.60161 17.0276 8.84286 16.8175C9.08411 16.6073 9.24116 16.3169 9.285 16H6.66Z"
          fill="#1A141F"
        />
      </svg>
    ),
    roles: ['admin', 'shipowner'],
  },
]
