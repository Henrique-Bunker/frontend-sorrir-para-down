import * as React from 'react'
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

const StudentAdress = ({ handleValue, handleResidanceType, props }: Props) => {
  const [streetValue, setStreetValue] = React.useState(
    props?.street ? props.street : ''
  )
  const [districtValue, setDistrictValue] = React.useState(
    props?.district ? props.district : ''
  )
  const [cityValue, setCityValue] = React.useState(
    props?.city ? props.city : ''
  )
  const [stateValue, setStateValue] = React.useState(
    props?.state ? props.state : ''
  )
  const [zipcodeValue, setZipcodeValue] = React.useState(
    props?.zipcode ? props.zipcode : ''
  )
  const [rentValue, setRentValue] = React.useState(
    props?.rentValue ? props.rentValue : ''
  )
  return (
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
            autoComplete="student-street"
            variant="standard"
            onChange={(input) => setStreetValue(input.target.value as string)}
            value={streetValue}
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
            autoComplete="student-district"
            variant="standard"
            onChange={(input) => setDistrictValue(input.target.value as string)}
            value={districtValue}
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
            autoComplete="student-city"
            variant="standard"
            onChange={(input) => setCityValue(input.target.value as string)}
            value={cityValue}
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
            autoComplete="student-state"
            variant="standard"
            onChange={(input) => setStateValue(input.target.value as string)}
            value={stateValue}
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
            autoComplete="student-zipcode"
            variant="standard"
            onChange={(input) => setZipcodeValue(input.target.value as string)}
            value={zipcodeValue}
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
            onChange={(event) => {
              const input = event.target.value as number
              handleValue(input)
              setRentValue(input)
            }}
            variant="standard"
            value={rentValue}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default StudentAdress
