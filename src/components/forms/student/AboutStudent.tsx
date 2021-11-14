import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Phone from 'components/forms/Phone'
import { Chip, Divider } from '@mui/material'
import Date from 'components/forms/Date'
import RadioRow from '../RadioRow'
import { StudentProp } from 'types/Student'

type Props = {
  handlePhone: (phone: string) => void
  handleBirth: (date: Date) => void
  birthDate?: Date
  handleAssociate: (date: Date) => void
  handleInss: (value: boolean) => void
  handleApae: (value: boolean) => void
  props?: StudentProp
}

type ValueProps = {
  label: string
  value: boolean
}

const YES_NO_VALUES: ValueProps[] = [
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
  birthDate,
  handleAssociate,
  handleInss,
  handleApae,
  props
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
            value={props?.name}
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
            value={props?.subname}
          />
        </Grid>
        {/* LINK - BirthDate */}
        <Grid item xs={12} sm={3}>
          <Date
            txtLabel="Data Nasc"
            componentName="birthDate"
            handler={handleBirth}
            initialValue={birthDate}
          />
        </Grid>
        {/* LINK - Phone */}
        <Grid item xs={12} sm={4}>
          <Phone handler={handlePhone} props={props} />
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
            value={props?.email}
          />
        </Grid>
        {/* LINK - Association */}
        <Grid item xs={12} sm={3}>
          <Date
            txtLabel="Inicio Associação"
            componentName="assocDate"
            handler={handleAssociate}
            initialValue={props?.associationData}
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
            value={props?.responsible}
          />
        </Grid>
        {/* LINK - INSS */}
        <Grid item xs={3}>
          <RadioRow
            label="INSS"
            values={YES_NO_VALUES}
            handler={handleInss}
            initialValue={props?.receiveINSS}
          />
        </Grid>
        {/* LINK - APAE */}
        <Grid item xs={3}>
          <RadioRow
            label="APAE"
            values={YES_NO_VALUES}
            handler={handleApae}
            initialValue={props?.isAPAE}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* LINK - School */}
          <TextField
            required
            id="studentSchool"
            name="studentSchool"
            label="Escola"
            fullWidth
            autoComplete="student-school"
            variant="standard"
            value={props?.school}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* LINK - Serie */}
          <TextField
            required
            id="studentSerie"
            name="studentSerie"
            label="Serie"
            fullWidth
            autoComplete="student-serie"
            variant="standard"
            value={props?.schoolSerie}
          />
        </Grid>
      </Grid>
    </>
  )
}
export default AboutStudent
