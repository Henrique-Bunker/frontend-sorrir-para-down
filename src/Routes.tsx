import Dashboard from './pages/Dashboard'
import Main from './pages/Main'
import Login from './pages/Login'
import StudentsPage from './pages/StudentsPage'
import UsersPage from './pages/UsersPage'
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alunos" element={<StudentsPage gridSize={12} />} />
        <Route path="/usuarios" element={<UsersPage gridSize={7} />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes
