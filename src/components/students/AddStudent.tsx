import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import AboutStudent from 'components/forms/student/AboutStudent'
import StudentAdress from 'components/forms/student/StudentAdress'
import StudentMother from 'components/forms/student/StudentMother'
import StudentFather from 'components/forms/student/StudentFather'
import FamilyComopition from 'components/forms/student/FamilyComposition'
import { Fab, Link, Paper } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import Container from '@mui/material/Container'
import { FamilyMemberProp } from 'types/Student'
import axios from 'axios'

type Props = {
  handleCloseTab: () => void
}

const AddStudent = ({ handleCloseTab }: Props) => {
  const [composition, setComposition] = React.useState<FamilyMemberProp[]>([])
  const [phone, setPhone] = React.useState('')

  //NOTE handlePhone
  const handlePhone = (studentPhone: string) => {
    setPhone(studentPhone)
  }

  // NOTE handleSubmit
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    // ANCHOR Post
    axios
      .post(`http://localhost:5000/members`, {
        name: data.get('studentName'),
        subname: data.get('subname'),
        responsible: data.get('responsable'),
        street: data.get('street'),
        district: data.get('district'),
        phone: phone,
        email: data.get('email'),
        city: data.get('city'),
        associationData: data.get('assocDate'),
        receiveINSS: data.get('receiveINSS'),
        birthDate: data.get('birthDate'),
        motherName: data.get('motherName'),
        motherDN: data.get('motherDN'),
        motherWorkplace: data.get('motherWorkplace'),
        motherIncome: data.get('motherIncome'),
        motherAgeChildBorn: data.get('motherAgeChildBorn'),
        motherSchooling: data.get('motherSchooling'),
        fatherName: data.get('fatherName'),
        fatherDN: data.get('fatherDN'),
        fatherWorkplace: data.get('fatherWorkplace'),
        fatherIncome: data.get('fatherIncome'),
        fatherSchooling: data.get('fatherSchooling'),
        familyComposition: composition,
        familyIncome: data.get('familyIncome'),
        residence: data.get('residence'),
        rentValue: data.get('rentValue'),
        isAPAE: data.get('isAPAE'),
        school: data.get('school'),
        schoolSerie: data.get('schoolSerie'),
        CEI: data.get('CEI'),
        othersActivities: data.get('othersActivities'),
        obs: data.get('obs')
      })
      .then(() => {
        console.log({ phone })
        window.location.reload()
      })

    //console.log(event.currentTarget)
    console.log({
      name: data.get('studentName'),
      subName: data.get('subname'),
      birthDate: data.get('birthDate'),
      email: data.get('email'),
      phone: data.get('phone'),
      assocDate: data.get('assocDate'),
      responsable: data.get('responsable'),
      studentPhone: data.get('studentPhone'),
      composition: composition
    })
  }

  // NOTE handleAddComposition
  const handleAddComposition = (composition: FamilyMemberProp[]) => {
    setComposition(composition)
  }

  return (
    <Paper variant="outlined">
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid
            container
            justifyContent="space-between"
            alignContent="flex-end"
            sx={{ p: 3, mb: 2 }}
          >
            <Typography variant="h6" gutterBottom>
              Adicionar Aluno
            </Typography>
            <Link onClick={handleCloseTab}>
              <Fab
                size="small"
                color="secondary"
                sx={{ backgroundColor: 'red' }}
              >
                <ClearIcon />
              </Fab>
            </Link>
          </Grid>
          <AboutStudent handlePhone={handlePhone} />
          <StudentAdress />
          <StudentMother />
          <StudentFather />
          <FamilyComopition handleComposition={handleAddComposition} />
          <Grid container spacing={3} justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Salvar
            </Button>
          </Grid>
        </Box>
      </Container>
    </Paper>
  )
}

export default AddStudent
