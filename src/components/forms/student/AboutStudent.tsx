import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Phone from 'components/forms/Phone'
import { Chip, Divider } from '@mui/material'
import Date from 'components/forms/Date'

const AboutStudent = () => {
  return (
    <>
      <Divider variant="middle" sx={{ alignItems: 'center' }}>
        <Chip label="Aluno" />
      </Divider>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          {/* LINK - Name */}
          <TextField
            required
            id="studentName"
            name="studentName"
            label="Nome"
            fullWidth
            autoComplete="student-name"
            variant="standard"
          />
        </Grid>
        {/* LINK - Subname */}
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id="subName"
            name="subname"
            label="Sobrenome"
            fullWidth
            autoComplete="sub-name"
            variant="standard"
          />
        </Grid>
        {/* LINK - BirthDate */}
        <Grid item xs={12} sm={3}>
          <Date txtLabel="Data Nasc" componentName="birthDate" />
        </Grid>
        {/* LINK - Email */}
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="email-form"
            variant="standard"
          />
        </Grid>
        {/* LINK - Phone */}
        <Grid item xs={12} sm={4}>
          <Phone />
        </Grid>
        {/* LINK - Association */}
        <Grid item xs={12} sm={3}>
          <Date txtLabel="Inicio Associação" componentName="assocDate" />
        </Grid>
        {/* LINK - Responsable */}
        <Grid item xs={12}>
          <TextField
            required
            id="responsable"
            name="responsable"
            label="Responsavel"
            fullWidth
            variant="standard"
            autoComplete="student-responsable"
          />
        </Grid>
      </Grid>
    </>
  )
}
export default AboutStudent
