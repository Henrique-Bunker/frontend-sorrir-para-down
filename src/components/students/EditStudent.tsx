import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import AboutStudent from 'components/forms/student/AboutStudent'
import StudentAdress from 'components/forms/student/StudentAdress'
import StudentMother from 'components/forms/student/StudentMother'
import StudentFather from 'components/forms/student/StudentFather'
import StudentOthers from 'components/forms/student/StudentOthers'
import FamilyComopition from 'components/forms/student/FamilyComposition'
import { Fab, Link, Paper } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import Container from '@mui/material/Container'
import { FamilyMemberProp, StudentProp } from 'types/Student'
import StudentRequests from 'services/requests/StudentRequests'
import StudentValidation from './StudentValidation'
import { render } from '@testing-library/react'
import Popout from 'components/Popout'

type Props = {
  handleCloseTab: () => void
  studentDate: StudentProp
}

const EditStudent = ({ handleCloseTab, studentDate }: Props) => {
  const [composition, setComposition] = React.useState<FamilyMemberProp[]>(
    studentDate?.familyComposition ? studentDate.familyComposition : []
  )
  const [phone, setPhone] = React.useState(
    studentDate?.phone ? studentDate.phone : ''
  )
  const [birthDate, setBirthDate] = React.useState<Date>(studentDate.birthDate)
  const [assocDate, setAssocDate] = React.useState<Date>(
    studentDate?.associationData && studentDate.associationData
  )
  const [isINSS, setIsINSS] = React.useState(
    studentDate?.receiveINSS ? true : false
  )
  const [isAPAE, setIsAPAE] = React.useState(studentDate?.isAPAE ? true : false)
  const [residance, setResidance] = React.useState<string>(
    studentDate?.residence && studentDate.residence
  )
  const [rentValue, setRentValue] = React.useState(
    studentDate?.rentValue ? studentDate.rentValue : 0.0
  )
  const [motherBirthDate, setMotherBirthDate] = React.useState<Date>(
    studentDate?.motherDN && studentDate.motherDN
  )
  const [fatherBirthDate, setFatherBirthDate] = React.useState<Date>(
    studentDate?.fatherDN && studentDate.fatherDN
  )
  const [incomeFather, setIncomeFather] = React.useState<number>(
    studentDate?.fatherIncome && studentDate.fatherIncome
  )
  const [incomeMother, setIncomeMother] = React.useState<number>(
    studentDate?.motherIncome && studentDate.motherIncome
  )
  const [obs, setObs] = React.useState<string>()
  const [activities, setActivities] = React.useState<string>()

  async function editStudentReg(studentID: number, studentData: StudentProp) {
    const req = new StudentRequests()
    await req.editStudent(studentID, studentData)
    window.location.reload()
  }

  const renderPopout = (title: string, errors: string[]) => {
    render(<Popout title={title} listErrors={errors} />)
  }

  //NOTE handlePhone
  const handlePhone = (studentPhone: string) => {
    setPhone(studentPhone)
  }

  //NOTE handleObservation
  const handleObservation = (input: string) => {
    setObs(input)
  }

  //NOTE handleOtherActivities
  const handleOtherActivities = (input: string) => {
    setActivities(input)
  }

  //NOTE handleResidance
  const handleResidance = (type: string) => {
    setResidance(type)
  }

  //NOTE handleRentValue
  const handleRentValue = (value: number) => {
    setRentValue(value)
  }

  //NOTE handleINSS
  const handleInss = (isInss: boolean) => {
    setIsINSS(isInss)
  }

  //NOTE handleAPAE
  const handleAPAE = (isInss: boolean) => {
    setIsAPAE(isInss)
  }

  //NOTE handleBirthDate
  const handleBirthDate = (birthDate: Date) => {
    setBirthDate(birthDate)
  }

  //NOTE handleAssocDate
  const handleAssocDate = (assochDate: Date) => {
    setAssocDate(assochDate)
  }

  //NOTE handleMotherBirthDate
  const handleMotherBirthDate = (birthDate: Date) => {
    setMotherBirthDate(birthDate)
  }

  //NOTE handleFatherBirthDate
  const handleFatherBirthDate = (birthDate: Date) => {
    setFatherBirthDate(birthDate)
  }

  React.useEffect(() => {
    if (studentDate.obs) {
      setObs(studentDate.obs)
    }
  }, [studentDate.obs])

  React.useEffect(() => {
    if (studentDate.othersActivities) {
      setActivities(studentDate.othersActivities)
    }
  }, [studentDate.othersActivities])

  //NOTE getFamilyIncome
  const getFamilyIncome = () => {
    let sumIncome = 0
    sumIncome += incomeFather ? incomeFather : 0
    sumIncome += incomeMother ? incomeMother : 0
    composition.map((member) => {
      sumIncome += member.income ? member.income : 0
    })
    return sumIncome
  }

  // NOTE handleSubmit
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const totalIncome = getFamilyIncome()
    const data = new FormData(event.currentTarget)

    const studentObj = {
      name: data.get('studentName'),
      subname: data.get('subname'),
      responsible: data.get('responsable'),
      street: data.get('street'),
      district: data.get('district'),
      phone: phone,
      email: data.get('email'),
      city: data.get('city'),
      state: data.get('estate'),
      zipcode: data.get('zipcode'),
      associationData: assocDate,
      receiveINSS: isINSS,
      isAPAE: isAPAE,
      birthDate: birthDate,
      school: data.get('studentSchool'),
      schoolSerie: data.get('studentSerie'),
      motherName: data.get('motherName'),
      motherSubName: data.get('motherSubName'),
      motherDN: motherBirthDate,
      motherWorkplace: data.get('motherWorkplace'),
      motherIncome: incomeMother,
      motherAgeChildBorn: parseInt(data.get('motherAgeChildBorn') as string),
      motherSchooling: data.get('motherSchooling'),
      fatherName: data.get('fatherName'),
      fatherSubName: data.get('fatherSubName'),
      fatherDN: fatherBirthDate,
      fatherWorkplace: data.get('fatherWorkplace'),
      fatherIncome: incomeFather,
      fatherSchooling: data.get('fatherSchooling'),
      familyComposition: composition,
      familyIncome: totalIncome,
      residence: residance,
      rentValue: rentValue,
      CEI: data.get('inputCei'),
      othersActivities: activities,
      obs: obs
    } as StudentProp

    const validation = StudentValidation(studentObj)

    if (validation.length > 0) {
      renderPopout('Campos em falta', validation)
    } else {
      editStudentReg(studentDate.id, studentObj)
    }
  }

  // NOTE handleAddComposition
  const handleAddComposition = (composition: FamilyMemberProp[]) => {
    setComposition(composition)
  }

  // NOTE handleAddFatherIncome
  const handleAddFatherIncome = (income: number) => {
    setIncomeFather(income)
  }

  // NOTE handleAddMotherIncome
  const handleAddMotherIncome = (income: number) => {
    setIncomeMother(income)
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
              Editar Cadastro de {studentDate.name} {studentDate.subname}
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
          <AboutStudent
            handlePhone={handlePhone}
            handleBirth={handleBirthDate}
            birthDate={studentDate.birthDate}
            handleAssociate={handleAssocDate}
            handleInss={handleInss}
            handleApae={handleAPAE}
            props={studentDate}
          />
          <StudentAdress
            handleValue={handleRentValue}
            handleResidanceType={handleResidance}
            props={studentDate}
          />
          <StudentMother
            handleIncome={handleAddMotherIncome}
            handleBirth={handleMotherBirthDate}
            props={studentDate}
          />
          <StudentFather
            handleIncome={handleAddFatherIncome}
            handleBirth={handleFatherBirthDate}
            props={studentDate}
          />
          <FamilyComopition
            handleComposition={handleAddComposition}
            incomeProps={studentDate.familyComposition}
          />
          <StudentOthers
            handleObs={handleObservation}
            handleAct={handleOtherActivities}
            props={studentDate}
          />
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

export default EditStudent
