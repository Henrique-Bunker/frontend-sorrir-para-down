import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Fab, Link, Paper } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import Container from '@mui/material/Container'
import { UserProps } from 'types/User'
import axios from 'axios'
import { Chip, Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
// import Select from 'components/forms/Select'

type Props = {
  handleCloseTab: () => void
  userDate: UserProps
}

const EditStudent = ({ handleCloseTab, userDate }: Props) => {
  // const [isAPAE, setIsAPAE] = React.useState(userDate?.isAPAE ? true : false)
  const [user, setUser] = React.useState<string>(
    userDate?.username && userDate.username
  )

  const [password, setPassword] = React.useState<string>(
    userDate?.password && userDate.password
  )

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
        role: 2
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
              Editar Cadastro de {userDate.username}
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
          <Divider variant="middle" sx={{ alignItems: 'center' }}>
            <Chip label="Aluno" />
          </Divider>
          <Grid container spacing={3} sx={{ mb: 4, mt: 2 }}>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              {/* LINK - Password
              <Select />
              */}
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

export default EditStudent
