import Dashboard from './pages/Dashboard'
import Main from './pages/Main'
import Login from './pages/Login'
import StudentsPage from './pages/StudentsPage'
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alunos" element={<StudentsPage />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes
