import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import axios from 'axios'

type Props = {
  openDialog: boolean
  studentName: string
  studentID: number
}

export default function ConfirmDel({
  openDialog,
  studentName,
  studentID
}: Props) {
  const [open, setOpen] = React.useState(openDialog)

  const deleteStudent = () => {
    axios
      .delete(`http://localhost:5000/members/${studentID}`, {
        headers: {
          Authorization: ('Bearer ' +
            sessionStorage.getItem('API_TOKEN')) as string
        }
      })
      .then(() => {
        setOpen(false)
        window.location.reload()
      })
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
    >
      <DialogTitle id="alert-dialog-title">{'Tem certeza?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Voce está prestes de deletar o cadastro do aluno {studentName}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Esta operação é irreversivel, cuidado!!!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Voltar</Button>
        <Button onClick={deleteStudent} autoFocus color="error">
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
