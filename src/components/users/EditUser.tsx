import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Paper } from '@mui/material'
import Container from '@mui/material/Container'
import { UserProps } from 'types/User'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import SelectRole from 'components/forms/SelectRole'

type Props = {
  handleCloseTab: () => void
  userDate: UserProps
}

const SELECT_VALUES = [
  {
    label: 'Usuario',
    value: 'usr'
  },
  {
    label: 'Supervisor',
    value: 'sup'
  },
  {
    label: 'Administrador',
    value: 'adm'
  }
]

const EditStudent = ({ handleCloseTab, userDate }: Props) => {
  // const [isAPAE, setIsAPAE] = React.useState(userDate?.isAPAE ? true : false)
  const [permission, setPermission] = React.useState<string>(
    userDate?.role ? userDate.role : ''
  )
  const [user, setUser] = React.useState<string>(
    userDate?.username && userDate.username
  )

  const [password, setPassword] = React.useState<string>(
    userDate?.password && userDate.password
  )

  const handlePermission = (value: string) => {
    setPermission(value)
  }

  // NOTE handleSubmit
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // ANCHOR Post
    // TODO handle null | undefined | values
    axios
      .put(`http://localhost:5000/users/${userDate.id}`, {
        username: user,
        password: password,
        active: true,
        role: permission
      })
      .then(() => {
        window.location.reload()
      })

    //console.log(event.currentTarget)
    console.log({
      username: user,
      subName: password
      //birthDate: data.get('birthDate')
    })
  }
  return (
    <Paper variant="outlined">
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid
            container
            justifyContent="space-between"
            alignContent="flex-end"
            sx={{ p: 3, mb: 2 }}
          >
            <Typography variant="h6" gutterBottom>
              Editar {userDate.username}
            </Typography>
          </Grid>
          <Grid container spacing={3} sx={{ mb: 4, mt: 2 }}>
            <Grid item xs={12} sm={12}>
              {/* LINK - User */}
              <TextField
                required
                id="userName"
                name="userName"
                label="User"
                type="text"
                fullWidth
                onChange={(input) => setUser(input.target.value as string)}
                autoComplete="student-name"
                variant="standard"
                value={user}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              {/* LINK - Password */}
              <TextField
                required
                id="password"
                name="password"
                label="Nova Senha"
                type="password"
                fullWidth
                onChange={(input) => setPassword(input.target.value as string)}
                autoComplete="student-name"
                variant="standard"
                value={password}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              {/* LINK - Repeat Password */}
              <TextField
                required
                id="password-repeat"
                name="password-repeat"
                label="Repetir nova Senha"
                type="password"
                fullWidth
                onChange={(input) => setPassword(input.target.value as string)}
                autoComplete="student-name"
                variant="standard"
                value={password}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              {/* LINK - Role */}
              <SelectRole
                label="Permissão"
                handler={handlePermission}
                id="role-selector"
                values={SELECT_VALUES}
                inputValue={permission}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              color="error"
              onClick={handleCloseTab}
              sx={{ mt: 2, mb: 2, mr: 1 }}
            >
              Calcelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="success"
              sx={{ mt: 2, mb: 2, ml: 1 }}
            >
              Editar
            </Button>
          </Grid>
        </Box>
      </Container>
    </Paper>
  )
}

export default EditStudent
