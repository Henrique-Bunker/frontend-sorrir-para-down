import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Chip, Divider } from '@mui/material'

const StudentMother = () => (
  <>
    <Divider variant="middle" sx={{ alignItems: 'center' }}>
      <Chip label="Dados da Mãe" />
    </Divider>
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={4}>
        {/* LINK - Mother Name */}
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
      {/* LINK - Mother Subname */}
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
      {/* LINK - Mother DN */}
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
      {/* LINK - Mother Workplace */}
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
      {/* LINK - Mother Income */}
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
      {/* LINK - Mother age at become mother */}
      <Grid item xs={12} sm={3}>
        <TextField
          required
          id="phone"
          name="phone"
          label="Idade que teve filho"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      {/* LINK - Mother Schooling */}
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

export default StudentMother
