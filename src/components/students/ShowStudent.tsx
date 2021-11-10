import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Grid, Typography } from '@mui/material'
import { StudentProp } from 'types/Student'

type Props = {
  props: StudentProp
}

export default function ShowStudent({ props }: Props) {
  const [open, setOpen] = React.useState(true)
  const fullWidth = true
  const maxWidth: DialogProps['maxWidth'] = 'md'

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
      <DialogTitle id="alert-dialog-title">{`Aluno: ${props.name} ${props.subname}`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid>
            <Typography variant="h6" marginRight={2} display="inline">
              Nome completo:
            </Typography>
            <Typography display="inline">{` ${props.name} ${props.subname}`}</Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" marginRight={2} display="inline">
              Telefone:
            </Typography>
            <Typography display="inline">{props.phone}</Typography>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
