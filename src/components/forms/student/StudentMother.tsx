import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Chip, Divider } from '@mui/material'
import Date from 'components/forms/Date'

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
          id="motherName"
          name="motherName"
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
          id="motherSubName"
          name="motherSubname"
          label="Sobrenome"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      {/* LINK - Mother DN */}
      <Grid item xs={12} sm={3}>
        <Date txtLabel="Data Nasc" componentName="motherBirthDate" />
      </Grid>
      {/* LINK - Mother Workplace */}
      <Grid item xs={12} sm={5}>
        <TextField
          required
          id="motherWorkplace"
          name="motherWorkplace"
          label="Local Trabalo"
          fullWidth
          autoComplete="mother-workplace"
          variant="standard"
        />
      </Grid>
      {/* LINK - Mother Income */}
      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="motherIncome"
          name="motherIncome"
          label="Renda"
          fullWidth
          variant="standard"
        />
      </Grid>
      {/* LINK - Mother age at become mother */}
      <Grid item xs={12} sm={3}>
        <TextField
          required
          id="motherAgeHaveChild"
          name="motherAgeHaveChild"
          label="Idade que teve filho"
          fullWidth
          variant="standard"
        />
      </Grid>
      {/* LINK - Mother Schooling */}
      <Grid item xs={12}>
        <TextField
          required
          id="motherSchooling"
          name="motherSchooling"
          label="Escolaridade"
          fullWidth
          autoComplete="mother-schooling"
          variant="standard"
        />
      </Grid>
    </Grid>
  </>
)

export default StudentMother
