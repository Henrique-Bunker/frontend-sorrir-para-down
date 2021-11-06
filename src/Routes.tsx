import Dashboard from './pages/Dashboard'
import Main from './pages/Main'
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes
