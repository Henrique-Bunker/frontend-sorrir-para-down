import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Fab, Link, Paper } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import Container from '@mui/material/Container'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import SelectRole from 'components/forms/SelectRole'
import Popout from 'components/Popout'
import { render } from '@testing-library/react'

type Props = {
  handleCloseTab: () => void
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

const AddUser = ({ handleCloseTab }: Props) => {
  const [user, setUser] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>('')
  const [permission, setPermission] = React.useState<string>('')

  const handlePermission = (value: string) => {
    setPermission(value)
  }

  const renderPopout = (title: string, errors: string[]) => {
    render(<Popout title={title} listErrors={errors} />)
  }

  const checkUserName = async () => {
    const result = await axios.get(
      `http://localhost:5000/users?username=${user}`
    )

    console.log(result.data)

    if (result.data.length > 0) {
      return false
    } else {
      return true
    }
  }

  // NOTE handleSubmit
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const errors = []

    if (password.length < 8) {
      errors.push('Senha muito curta, utilize pelo menos 8 caracteres')
    }

    if (password != passwordConfirm) {
      errors.push('Senhas não iguais')
    }

    if (permission.length < 1) {
      errors.push('Selecione um nivem de permissão do usuario')
    }

    const isUserValid = await checkUserName()

    if (!isUserValid) {
      errors.push('Usuario ja existe')
    }

    if (errors.length > 0) {
      renderPopout('Error', errors)
    } else {
      // ANCHOR Post
      // TODO handle null | undefined | values
      axios
        .post(`http://localhost:5000/users`, {
          username: user,
          password: password,
          active: true,
          role: permission
        })
        .then(() => {
          window.location.reload()
        })
    }
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
              Creat usuario
            </Typography>
            <Link onClick={handleCloseTab}>
              <Fab
                size="small"
                color="secondary"
                sx={{ backgroundColor: 'red' }}
              >
                <ClearIcon />
              </Fab>
            </Link>
          </Grid>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={12}>
              {/* LINK - User */}
              <TextField
                required
                id="userName"
                name="userName"
                label="Usuario"
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
                label="Senha"
                type="password"
                fullWidth
                onChange={(input) => setPassword(input.target.value as string)}
                autoComplete="student-name"
                variant="standard"
                value={password}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              {/* LINK - Password Repeat */}
              <TextField
                required
                id="password"
                name="password"
                label="Confirme a Senha"
                type="password"
                fullWidth
                onChange={(input) =>
                  setPasswordConfirm(input.target.value as string)
                }
                autoComplete="student-name"
                variant="standard"
                value={passwordConfirm}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              {/* LINK - Role */}
              <SelectRole
                label="Permissão"
                handler={handlePermission}
                id="role-selector"
                values={SELECT_VALUES}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Salvar
            </Button>
          </Grid>
        </Box>
      </Container>
    </Paper>
  )
}

export default AddUser
