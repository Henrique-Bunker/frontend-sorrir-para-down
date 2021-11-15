import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import StudentRequests from 'services/requests/StudentRequests'
import Popout from 'components/Popout'
import { render } from '@testing-library/react'

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

  async function delStudent() {
    const req = new StudentRequests()
    const res = await req.deleteStudent(studentID)
    if (res) {
      window.location.reload()
    } else {
      render(
        <Popout
          title="Falha ao deletar aluno"
          listErrors={[
            'Aluno não localizado ou falha ao se comunicas com o banco de dados'
          ]}
        />
      )
    }
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
        <Button onClick={delStudent} autoFocus color="error">
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
