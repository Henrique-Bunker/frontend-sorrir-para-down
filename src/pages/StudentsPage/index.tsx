import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Students from 'components/containers/Students'
import Copyright from 'components/miscellaneous/Copyright'
import Sidebar from '../../components/Sidebar'
import AppBar from 'components/AppBar'
import AddStudent from 'components/students/AddStudent'
import type { GridSize } from '@material-ui/core'

const mdTheme = createTheme()

type Props = {
  component?: JSX.Element
  gridSize: GridSize
}

const StudentsPage = ({ component, gridSize }: Props) => {
  const [open, setOpen] = React.useState(true)
  const [size, setSize] = React.useState(gridSize)
  const handleAddMember = () => {
    setShowElement(<AddStudent handleCloseTab={handleCloseTab} />)
    setSize(8)
  }
  const [showElement, setShowElement] = React.useState(
    component ? (
      component
    ) : (
      <Students
        title="Lista de Alunos"
        showHandles={true}
        handleAddMember={handleAddMember}
      />
    )
  )
  const toggleDrawer = () => {
    setOpen(!open)
  }

  const handleCloseTab = () => {
    setShowElement(
      <Students
        title="Lista de Alunos"
        showHandles={true}
        handleAddMember={handleAddMember}
      />
    )
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar toggleDrawer={toggleDrawer} openState={open} title="Alunos" />
        <Sidebar toggleDrawer={toggleDrawer} openState={open} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3} justifyContent="center">
              {/* Recent Students */}
              <Grid item xs={size}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {showElement}
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default StudentsPage
