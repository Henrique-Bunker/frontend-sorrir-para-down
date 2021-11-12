import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Chip, Divider } from '@mui/material'
import Date from 'components/forms/Date'

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
          id="fatherName"
          name="fatherName"
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
          id="fatherSubName"
          name="fatherSubname"
          label="Sobrenome"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      {/* LINK - Father DN */}
      <Grid item xs={12} sm={3}>
        <Date txtLabel="Data Nasc" componentName="fatherBirthDate" />
      </Grid>
      {/* LINK - Father Workplace */}
      <Grid item xs={12} sm={5}>
        <TextField
          required
          id="fatherWorkplace"
          name="fatherWorkplace"
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
          id="fatherIncome"
          name="fatherIncome"
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
          id="fatherSchooling"
          name="fatherSchooling"
          label="Escolaridade"
          fullWidth
          autoComplete="father-schooling"
          variant="standard"
        />
      </Grid>
    </Grid>
  </>
)

export default StudentFather
