import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import { Header, Loader, Nav } from '../Components'
import { routes } from './routes'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {routes.map(({ path, Component, name, desc }) => (
          <Route
            key={path}
            path={path}
            element={
              <div className={'page'}>
                {path !== '/login' && <Header title={name} desc={desc} />}
                <main className="main-layout">
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                </main>
              </div>
            }
          />
        ))}
        <Route path="/*" element={<Navigate to={routes[0].path} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
