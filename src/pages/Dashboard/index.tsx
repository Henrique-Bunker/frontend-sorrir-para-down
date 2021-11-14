import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Copyright from 'components/miscellaneous/Copyright'
import Sidebar from '../../components/Sidebar'
import AppBar from 'components/AppBar'
import StudentsTable from 'components/students/StudentsTable'
import ShowUsersTable from 'components/users/ShowUsersTable'

const mdTheme = createTheme()

function DashboardContent() {
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          toggleDrawer={toggleDrawer}
          openState={open}
          title="Dashboard"
        />
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
            <Grid container spacing={3}>
              <Grid item sm={12} md={8}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <StudentsTable isDash />
                </Paper>
              </Grid>
              <Grid item sm={12} md={4}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <ShowUsersTable isDash />
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
