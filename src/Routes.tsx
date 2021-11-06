import Dashboard from './pages/Dashboard'
import Main from './pages/Main'
import Login from './pages/Login'
import StudentsPage from './pages/StudentsPage'
import ContributorsPage from './pages/ContributorsPage'
import VolunteersPage from './pages/VolunteersPage'
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alunos" element={<StudentsPage gridSize={12} />} />
        <Route path="/colaboradores" element={<ContributorsPage />} />
        <Route path="/voluntarios" element={<VolunteersPage />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes
