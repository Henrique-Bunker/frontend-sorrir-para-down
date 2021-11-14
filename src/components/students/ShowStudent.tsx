import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Grid, Typography } from '@mui/material'
import { StudentProp } from 'types/Student'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { format } from 'date-fns'

type Props = {
  props: StudentProp
}

export default function ShowStudent({ props }: Props) {
  const [open, setOpen] = React.useState(true)
  const fullWidth = true
  const maxWidth: DialogProps['maxWidth'] = 'md'

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
      <DialogTitle id="alert-dialog-title">{`Aluno: ${props.name} ${props.subname}`}</DialogTitle>
      <DialogContent sx={{ backgroundColor: '#f5f5f5;' }}>
        <Grid container spacing={3} marginTop={1}>
          <Grid item xs>
            <Item>
              <Typography variant="h6" marginRight={2}>
                Sobre:
              </Typography>
              <Typography>
                {`Nome: ${props.name} ${props.subname} - Data Nasc: ` +
                  format(new Date(props.birthDate), 'dd/MM/yyyy')}
              </Typography>
              <Typography>{`Email: ${props.email}`}</Typography>
              <Typography>{`Recebe INSS: ${
                props.receiveINSS ? 'Sim' : 'Não'
              }`}</Typography>
              <Typography>{`APAE: ${props.isAPAE ? 'Sim' : 'Não'}`}</Typography>
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={3} marginTop={2}>
          <Grid item xs>
            <Item>
              <Typography variant="h6" marginRight={2}>
                Endereço:
              </Typography>
              <Typography>{`${props.street} - ${props.district} - CEP: ${props?.zipcode}`}</Typography>
              <Typography>{`Cidade: ${props?.city} - ${props.district} - UC: ${props.state}`}</Typography>
              <Typography>{`Casa: ${props.residence} - Valor Aluguel: ${props.rentValue}`}</Typography>
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={3} marginTop={2}>
          <Grid item xs>
            <Item>
              <Typography variant="h6" marginRight={2}>
                Dados da Mãe:
              </Typography>
              <Typography>
                {`Nome: ${props.motherName} - DN: ` +
                  format(new Date(props.motherDN), 'dd/MM/yyyy')}
              </Typography>
              <Typography>{`Trabalho: ${props.motherWorkplace} - Renda: ${props.motherIncome} `}</Typography>
              <Typography>{`Idade que teva filho: ${props.motherAgeChildBorn}`}</Typography>
              <Typography>{`Escolaridade: ${props.motherSchooling} `}</Typography>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <Typography variant="h6" marginRight={2}>
                Dados do Pai:
              </Typography>
              <Typography>
                {`Nome: ${props.fatherName} - DN: ` +
                  format(new Date(props.fatherDN), 'dd/MM/yyyy')}
              </Typography>
              <Typography>{`Trabalho: ${props.fatherWorkplace} - Renda: ${props.fatherIncome} `}</Typography>
              <Typography>{`Escolaridade: ${props.fatherSchooling} `}</Typography>
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={3} marginTop={2}>
          <Grid item xs>
            <Item>
              <Typography variant="h6" marginRight={2}>
                Composição familiar:
              </Typography>
              {props.familyComposition.length > 0 ? (
                props.familyComposition.map((member) => (
                  <Typography
                    key={member.id}
                  >{`Nome: ${member.name} - Idage: ${member.age} - Renda: ${member.income} `}</Typography>
                ))
              ) : (
                <Typography marginRight={2}>
                  Nenhum membro adicionado a composição familiar além dos pais
                </Typography>
              )}
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={3} marginTop={2}>
          <Grid item xs>
            <Item>
              <Typography variant="h6" marginRight={2}>
                Outros:
              </Typography>
              <Typography>{`Rua: ${props.street} - ${props.district} - CEP: ${props?.zipcode}`}</Typography>
              <Typography>{`Cidade: ${props?.city} - ${props.district}`}</Typography>
              <Typography>{`Casa: Alugada - Valor Aluguel: 2500`}</Typography>
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
