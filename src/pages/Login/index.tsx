import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Email from 'components/forms/Email'
import Password from 'components/forms/Password'
import LabelWithCheckbox from 'components/forms/LabelWithCheckbox'
import Copyright from 'components/miscellaneous/Copyright'
import PropTypes from 'prop-types'
import axios from 'axios'

const theme = createTheme()

type Props = {
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>
}

type CredentialsProps = {
  email: string
  password: string
}
async function loginUser(credentials: CredentialsProps) {
  return axios
    .post('http://localhost:5000/login', credentials)
    .then((res) => res.data)
}

export default function SignIn({ setToken }: Props) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })

    const token = await loginUser({
      email: data.get('email') as string,
      password: data.get('password') as string
    })
    sessionStorage.setItem('API_TOKEN', token.accessToken)
    setToken(token.accessToken)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Email />
            <Password />
            <LabelWithCheckbox
              label="Remember me"
              value="remember"
              color="primary"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired
}
