import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import { Header, Loader, Nav } from '../Components'
import { routes } from './routes'

const Navigation = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Nav />
        <div className="main-layout">
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <>
                    {path !== '/login' && <Header title="Dashboard" />}
                    <Component />
                  </>
                }
              />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].path} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
