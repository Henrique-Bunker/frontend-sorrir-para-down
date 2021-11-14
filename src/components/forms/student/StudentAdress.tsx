import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Chip, Divider } from '@mui/material'
import Select from '../Select'
import NumericInput from 'material-ui-numeric-input'
import { StudentProp } from 'types/Student'

const HOUSE_VALUES = [
  {
    label: 'Propria',
    value: 'proprieatary'
  },
  {
    label: 'Alugada',
    value: 'rent'
  },
  {
    label: 'Cedida',
    value: 'given'
  },
  {
    label: 'Outros',
    value: 'others'
  }
]

type Props = {
  handleValue: (income: number) => void
  handleResidanceType: (type: string) => void
  props?: StudentProp
}

const StudentAdress = ({ handleValue, handleResidanceType, props }: Props) => (
  <>
    <Divider variant="middle" sx={{ alignItems: 'center' }}>
      <Chip label="Endereço" />
    </Divider>
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {/* LINK -  Street*/}
      <Grid item xs={8}>
        <TextField
          required
          id="street"
          name="street"
          label="Rua"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          value={props?.street}
        />
      </Grid>
      {/* LINK - District */}
      <Grid item xs={4}>
        <TextField
          required
          id="district"
          name="district"
          label="Bairro"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          value={props?.district}
        />
      </Grid>
      {/* LINK - City  */}
      <Grid item xs={4}>
        <TextField
          required
          id="city"
          name="city"
          label="Cidade"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          value={props?.city}
        />
      </Grid>
      {/* LINK - State  */}
      <Grid item xs={4}>
        <TextField
          required
          id="estate"
          name="estate"
          label="Estado"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          value={props?.state}
        />
      </Grid>
      {/* LINK - Zipcode  */}
      <Grid item xs={4}>
        <TextField
          required
          id="zipcode"
          name="zipcode"
          label="CEP"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          value={props?.zipcode}
        />
      </Grid>
      {/* LINK - House  */}
      <Grid item xs={4}>
        <Select
          id="house"
          label="Casa"
          values={HOUSE_VALUES}
          handler={handleResidanceType}
          inputValue={props?.residence}
        />
      </Grid>
      {/* LINK - Rent  */}
      <Grid item xs={3}>
        <NumericInput
          required
          id="rentValue"
          name="rentValue"
          precision={2}
          decimalChar=","
          thousandChar="."
          label="Valor Aluguel"
          onChange={(event) => handleValue(event.target.value as number)}
          variant="standard"
          value={props?.rentValue}
        />
      </Grid>
    </Grid>
  </>
)

export default StudentAdress
