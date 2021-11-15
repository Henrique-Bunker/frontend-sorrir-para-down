import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Fab, Link, Paper } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Popout from 'components/Popout'
import { render } from '@testing-library/react'
import UserRequests from 'services/requests/UserRequests'

type Props = {
  handleCloseTab: () => void
}

type IUserProps = {
  email: string
  password: string
}

const AddUser = ({ handleCloseTab }: Props) => {
  const [mail, setMail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>('')

  const renderPopout = (title: string, errors: string[]) => {
    render(<Popout title={title} listErrors={errors} />)
  }

  const checkUserMail = async () => {
    const req = new UserRequests()
    return await req.checkUserMail(mail)
  }

  async function addUser(userData: IUserProps) {
    const req = new UserRequests()
    await req.addUser(userData)
    window.location.reload()
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

    const isUserValid = await checkUserMail()

    if (!isUserValid) {
      errors.push('Email ja cadastrado')
    }

    if (errors.length > 0) {
      renderPopout('Error', errors)
    } else {
      addUser({
        email: mail,
        password: password
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
              {/* LINK - Email */}
              <TextField
                required
                id="userMail"
                name="userMail"
                label="Email"
                type="text"
                fullWidth
                onChange={(input) => setMail(input.target.value as string)}
                autoComplete="student-name"
                variant="standard"
                value={mail}
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
