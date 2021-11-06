import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

type Props = {
  sx: {
    mt?: number
    mb?: number
    pt?: number
  }
}

const Copyright = (props: Props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
      Sorrir para Down
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

export default Copyright
