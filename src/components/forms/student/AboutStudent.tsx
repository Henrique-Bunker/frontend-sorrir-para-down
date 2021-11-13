import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Phone from 'components/forms/Phone'
import { Chip, Divider } from '@mui/material'
import Date from 'components/forms/Date'
import RadioRow from '../RadioRow'

type Props = {
  handlePhone: (phone: string) => void
  handleBirth: (date: Date) => void
  handleAssociate: (date: Date) => void
  handleIndd: (value: boolean) => void
}

type ValueProps = {
  label: string
  value: boolean
}

const INSS_VALUES: ValueProps[] = [
  {
    label: 'Sim',
    value: true
  },
  {
    label: 'Não',
    value: false
  }
]

const AboutStudent = ({
  handlePhone,
  handleBirth,
  handleAssociate,
  handleIndd
}: Props) => {
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
          <Date
            txtLabel="Data Nasc"
            componentName="birthDate"
            handler={handleBirth}
          />
        </Grid>
        {/* LINK - Phone */}
        <Grid item xs={12} sm={4}>
          <Phone handler={handlePhone} />
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
        {/* LINK - Association */}
        <Grid item xs={12} sm={3}>
          <Date
            txtLabel="Inicio Associação"
            componentName="assocDate"
            handler={handleAssociate}
          />
        </Grid>
        {/* LINK - Responsable */}
        <Grid item xs={6}>
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
        {/* LINK - INSS */}
        <Grid item xs={3}>
          <RadioRow label="INSS" values={INSS_VALUES} handler={handleIndd} />
        </Grid>
      </Grid>
    </>
  )
}
export default AboutStudent
