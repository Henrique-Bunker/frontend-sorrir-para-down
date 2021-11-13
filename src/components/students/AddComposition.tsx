import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { v4 as uuid_v4 } from 'uuid'
import { FamilyMemberProp } from 'types/Student'
import NumericInput from 'material-ui-numeric-input'

type Props = {
  onSubmit: (member: FamilyMemberProp) => void
}

export default function AddComposition({ onSubmit }: Props) {
  const [open, setOpen] = React.useState(true)
  const [income, setIncome] = React.useState(0)
  const fullWidth = true
  const maxWidth: DialogProps['maxWidth'] = 'md'

  const handleIncome = (value: number) => {
    setIncome(value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const memberName = data.get('name') as string
    const age = data.get('age') as string

    onSubmit({
      id: uuid_v4(),
      name: memberName,
      age: parseInt(age),
      income: income
    })
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle id="alert-dialog-title">
        Addicionar membro da familia
      </DialogTitle>
      <DialogContent>
        <Grid>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              p: 1,
              m: 1,
              bgcolor: 'background.paper'
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Nome"
              name="name"
              size="small"
              type="text"
            />
            <TextField
              required
              id="outlined-number"
              label="Idade"
              type="number"
              name="age"
              size="small"
              InputLabelProps={{
                shrink: true
              }}
            />
            <NumericInput
              id="income"
              name="income"
              precision={2}
              decimalChar=","
              thousandChar="."
              label="Renda"
              size="small"
              onChange={(event) => handleIncome(event.target.value as number)}
              variant="outlined"
            />
            <Button type="submit" autoFocus>
              Adicionar
            </Button>
          </Box>
        </Grid>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
