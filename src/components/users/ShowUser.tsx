import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { Grid, Typography } from '@mui/material'
import { UserProps } from 'types/User'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

type Props = {
  props: UserProps
}

export default function ShowStudent({ props }: Props) {
  const [open, setOpen] = React.useState(true)
  const fullWidth = true
  const maxWidth: DialogProps['maxWidth'] = 'xs'

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

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
      <DialogContent sx={{ backgroundColor: '#f5f5f5;' }}>
        <Grid container spacing={3} marginTop={1}>
          <Grid item xs>
            <Item>
              <Typography variant="h6" marginRight={2}>
                Sobre:
              </Typography>
              <Typography>{`Usuario: ${props.email}`}</Typography>
            </Item>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
