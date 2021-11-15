import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import UserRequests from 'services/requests/UserRequests'
import Popout from 'components/Popout'
import { render } from '@testing-library/react'

type Props = {
  openDialog: boolean
  userName: string
  userID: number
}

export default function ConfirmDel({ openDialog, userName, userID }: Props) {
  const [open, setOpen] = React.useState(openDialog)

  async function delUser() {
    const req = new UserRequests()
    const res = await req.deleteUser(userID)
    if (res) {
      setOpen(false)
      window.location.reload()
    } else {
      render(
        <Popout
          title="Falha ao deletar usuario"
          listErrors={[
            'Usuario não localizado ou falha ao se comunicas com o banco de dados'
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
          Voce está prestes de deletar o usuario {userName}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Esta operação é irreversivel, cuidado!!!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Voltar</Button>
        <Button onClick={delUser} autoFocus color="error">
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
