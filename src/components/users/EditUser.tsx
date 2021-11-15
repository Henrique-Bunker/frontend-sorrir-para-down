import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Paper } from '@mui/material'
import Container from '@mui/material/Container'
import { UserProps } from 'types/User'
import TextField from '@mui/material/TextField'
import Popout from 'components/Popout'
import { render } from '@testing-library/react'
import UserRequests from 'services/requests/UserRequests'

type Props = {
  handleCloseTab: () => void
  userDate: UserProps
}

type IUserProps = {
  email: string
  password: string
}

const EditStudent = ({ handleCloseTab, userDate }: Props) => {
  const userMail = userDate.email

  const [password, setPassword] = React.useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>('')

  const renderPopout = (title: string, errors: string[]) => {
    render(<Popout title={title} listErrors={errors} />)
  }

  async function editUser(userID: number, userData: IUserProps) {
    const req = new UserRequests()
    await req.editUser(userID, userData)
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

    if (errors.length > 0) {
      renderPopout('Error', errors)
    } else {
      editUser(userDate.id, {
        email: userMail,
        password: password
      })
    }
  }
  return (
    <Paper variant="outlined">
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container justifyContent="space-between">
            <Typography variant="h6" gutterBottom>
              Editar
            </Typography>
          </Grid>
          <Grid container spacing={3} sx={{ mb: 4, mt: 2 }}>
            <Grid item xs={12} sm={12}>
              {/* LINK - User */}
              <TextField
                required
                disabled
                id="userName"
                name="userName"
                label="User"
                type="text"
                fullWidth
                autoComplete="user-name"
                variant="standard"
                value={userMail}
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
