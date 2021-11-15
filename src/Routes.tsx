import * as React from 'react'
import Dashboard from './pages/Dashboard'
import Main from './pages/Main'
import Login from './pages/Login'
import StudentsPage from './pages/StudentsPage'
import UsersPage from './pages/UsersPage'
import ReportsPage from './pages/ReportsPage'
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom'

const Routes = () => {
  const [token, setToken] = React.useState<string>()

  React.useEffect(() => {
    if (sessionStorage.getItem('API_TOKEN')) {
      const tempToken = sessionStorage.getItem('API_TOKEN') as string
      setToken(tempToken)
    }
  }, [])

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/alunos" element={<StudentsPage gridSize={12} />} />
        <Route path="/usuarios" element={<UsersPage gridSize={6} />} />
        <Route path="/relatorios" element={<ReportsPage gridSize={12} />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes
