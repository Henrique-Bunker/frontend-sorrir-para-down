import * as React from 'react'
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

const StudentFather = ({ handleIncome, handleBirth, props }: Props) => {
  const [name, setName] = React.useState(
    props?.fatherName ? props?.fatherName : ''
  )
  const [subName, setSubName] = React.useState(
    props?.fatherSubName ? props?.fatherSubName : ''
  )
  const [fatherDN, setFatherDN] = React.useState<Date>()
  const [workplace, setWorkplace] = React.useState(
    props?.fatherWorkplace ? props.fatherWorkplace : ''
  )
  const [income, setIncome] = React.useState(
    props?.fatherIncome && props.fatherIncome
  )

  const [schooling, setSchooling] = React.useState(
    props?.fatherSchooling && props.fatherSchooling
  )

  React.useEffect(() => {
    if (props?.fatherDN) {
      setFatherDN(props.fatherDN)
    }
  }, [props?.fatherDN])
  return (
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
            onChange={(input) => setName(input.target.value as string)}
            value={name}
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
            onChange={(input) => setSubName(input.target.value as string)}
            value={subName}
          />
        </Grid>
        {/* LINK - Father DN */}
        <Grid item xs={12} sm={3}>
          <Date
            txtLabel="Data Nasc"
            componentName="fatherBirthDate"
            handler={(date) => {
              handleBirth(date)
              setFatherDN(date)
            }}
            initialValue={fatherDN}
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
            onChange={(input) => setWorkplace(input.target.value as string)}
            value={workplace}
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
            onChange={(event) => {
              const incomeValue = event.target.value as number
              handleIncome(incomeValue)
              setIncome(incomeValue)
            }}
            variant="standard"
            value={income}
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
            onChange={(event) => setSchooling(event.target.value as string)}
            value={schooling}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default StudentFather
