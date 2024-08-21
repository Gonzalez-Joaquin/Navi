import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import { Header, Loader } from '../Components'
import { routes } from './routes'

const Navigation = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Header title="Dashboard" />
        <div className="main-layout">
          {/* <NavBar /> */}
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
