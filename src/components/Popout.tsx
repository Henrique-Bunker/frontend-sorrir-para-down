import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

type Props = {
  title: string
  listErrors: string[]
}

export default function Popout({ title, listErrors }: Props) {
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {listErrors.map((error, index) => (
            <DialogContentText key={index} id="alert-dialog-description">
              {error}
            </DialogContentText>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
