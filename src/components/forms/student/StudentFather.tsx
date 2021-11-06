import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Chip, Divider } from '@mui/material'

const StudentFather = () => (
  <>
    <Divider variant="middle" sx={{ alignItems: 'center' }}>
      <Chip label="Dados do Pai" />
    </Divider>
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={4}>
        {/* LINK - Father Name */}
        <TextField
          required
          id="name"
          name="name"
          label="Nome"
          fullWidth
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>
      {/* LINK - Father Subname */}
      <Grid item xs={12} sm={5}>
        <TextField
          required
          id="subName"
          name="subname"
          label="Sobrenome"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      {/* LINK - Father DN */}
      <Grid item xs={12} sm={3}>
        <TextField
          required
          id="birthDate"
          name="birthDate"
          label="Data Nasc."
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      {/* LINK - Father Workplace */}
      <Grid item xs={12} sm={5}>
        <TextField
          required
          id="email"
          name="email"
          label="Local Trabalo"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      {/* LINK - Father Income */}
      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="phone"
          name="phone"
          label="Renda"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      {/* LINK - Father Schooling */}
      <Grid item xs={12}>
        <TextField
          required
          id="responsable"
          name="responsable"
          label="Escolaridade"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
    </Grid>
  </>
)

export default StudentFather
