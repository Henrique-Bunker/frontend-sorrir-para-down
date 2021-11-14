import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Chip, Divider } from '@mui/material'
import Date from 'components/forms/Date'
import NumericInput from 'material-ui-numeric-input'
import { StudentProp } from 'types/Student'

type Props = {
  handleIncome: (input: number) => void
  handleBirth: (date: Date) => void
  props?: StudentProp
}

const StudentFather = ({ handleIncome, handleBirth, props }: Props) => (
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
          value={props?.fatherName}
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
          //value={props?.fatherSubName}
        />
      </Grid>
      {/* LINK - Father DN */}
      <Grid item xs={12} sm={3}>
        <Date
          txtLabel="Data Nasc"
          componentName="fatherBirthDate"
          handler={handleBirth}
          initialValue={props?.fatherDN}
        />
      </Grid>
      {/* LINK - Father Workplace */}
      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="fatherWorkplace"
          name="fatherWorkplace"
          label="Local Trabalo"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          value={props?.fatherWorkplace}
        />
      </Grid>
      {/* LINK - Father Income */}
      <Grid item xs={12} sm={4}>
        <NumericInput
          autoComplete="income"
          id="fatherIncome"
          name="fatherIncome"
          precision={2}
          decimalChar=","
          thousandChar="."
          label="Renda"
          onChange={(event) => handleIncome(event.target.value as number)}
          variant="standard"
          value={props?.fatherIncome}
        />
      </Grid>
      {/* LINK - Father Schooling */}
      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="fatherSchooling"
          name="fatherSchooling"
          label="Escolaridade"
          fullWidth
          autoComplete="father-schooling"
          variant="standard"
          value={props?.fatherSchooling}
        />
      </Grid>
    </Grid>
  </>
)

export default StudentFather
