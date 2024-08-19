import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes'

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          {/* 
          <nav>
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} className={({ isActive }) => (isActive ? 'nav-active' : 'nav-inactive')}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav> 
          */}

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].path} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
