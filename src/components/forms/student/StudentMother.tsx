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

const StudentMother = ({ handleIncome, handleBirth, props }: Props) => {
  const [name, setName] = React.useState(
    props?.motherName ? props?.motherName : ''
  )
  const [subName, setSubName] = React.useState(
    props?.motherSubName ? props?.motherSubName : ''
  )
  const [motherDN, setMotherDN] = React.useState<Date>()
  const [workplace, setWorkplace] = React.useState(
    props?.motherWorkplace ? props.motherWorkplace : ''
  )
  const [income, setIncome] = React.useState(
    props?.fatherIncome && props.motherIncome
  )
  const [ageChild, setAgeChild] = React.useState(
    props?.motherAgeChildBorn && props.motherAgeChildBorn
  )
  const [schooling, setSchooling] = React.useState(
    props?.motherSchooling && props.motherSchooling
  )

  React.useEffect(() => {
    if (props?.motherDN) {
      setMotherDN(props.motherDN)
    }
  }, [props?.motherDN])

  return (
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
            onChange={(input) => setName(input.target.value as string)}
            value={name}
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
            onChange={(input) => setSubName(input.target.value as string)}
            value={subName}
          />
        </Grid>
        {/* LINK - Mother DN */}
        <Grid item xs={12} sm={3}>
          <Date
            txtLabel="Data Nasc"
            componentName="motherBirthDate"
            handler={(date) => {
              handleBirth(date)
              setMotherDN(date)
            }}
            initialValue={motherDN}
          />
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
            onChange={(input) => setWorkplace(input.target.value as string)}
            value={workplace}
          />
        </Grid>
        {/* LINK - Mother Income */}
        <Grid item xs={12} sm={4}>
          <NumericInput
            autoComplete="income"
            id="motherIncome"
            name="motherIncome"
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
        {/* LINK - Mother age at become mother */}
        <Grid item xs={12} sm={3}>
          <NumericInput
            id="motherAgeChildBorn"
            name="motherAgeChildBorn"
            precision={0}
            decimalChar=","
            thousandChar="."
            label="Idade que teve filho"
            onChange={(event) => {
              setAgeChild(event.target.value as number)
            }}
            variant="standard"
            value={ageChild}
          />
        </Grid>
        {/* LINK - Mother Schooling */}
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="motherSchooling"
            name="motherSchooling"
            label="Escolaridade"
            fullWidth
            autoComplete="mother-schooling"
            variant="standard"
            onChange={(event) => setSchooling(event.target.value as string)}
            value={schooling}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default StudentMother
