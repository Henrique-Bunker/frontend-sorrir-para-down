import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import AboutStudent from 'components/forms/student/AboutStudent'
import StudentAdress from 'components/forms/student/StudentAdress'
import StudentMother from 'components/forms/student/StudentMother'
import StudentFather from 'components/forms/student/StudentFather'

const AddStudent = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    //console.log(event.currentTarget)
    const data = new FormData(event.currentTarget)
    console.log({
      name: data.get('studentName'),
      subName: data.get('subname'),
      birthDate: data.get('birthDate'),
      email: data.get('email'),
      phone: data.get('phone'),
      assocDate: data.get('assocDate'),
      responsable: data.get('responsable'),
      studentPhone: data.get('studentPhone')
    })
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Typography variant="h6" gutterBottom>
        Adicionar Aluno
      </Typography>
      <AboutStudent />
      <StudentAdress />
      <StudentMother />
      <StudentFather />
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
  )
}

export default AddStudent
