import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import { Header, Loader, Nav } from '../Components'
import { routes } from './routes'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {routes.map(({ path, Component, name, desc, children }) => (
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
            }>
            {children?.map(({ path: childPath, Component: ChildComponent, name: childName, desc: childDesc }) => (
              <Route
                key={childPath}
                path={childPath}
                element={
                  <div className={'sub-page'}>
                    <Header title={childName || name} desc={childDesc || desc} />
                    <main className="sub-page-layout">
                      <Suspense fallback={<Loader />}>
                        <ChildComponent />
                      </Suspense>
                    </main>
                  </div>
                }
              />
            ))}
          </Route>
        ))}
        <Route path="/*" element={<Navigate to={routes[0].path} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
