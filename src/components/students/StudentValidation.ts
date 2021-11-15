import { StudentProp } from '../../types/Student'

const StudentValidation = (studentData: StudentProp) => {
  const errors = []

  if (!studentData.name || studentData.name == '') {
    errors.push('Informe nome do aluno')
  }

  if (!studentData.subname || studentData.subname == '') {
    errors.push('Informe sobrenome do aluno')
  }

  if (!studentData.responsible || studentData.responsible == '') {
    errors.push('Informe responsavel do aluno')
  }

  if (!studentData.street || studentData.street == '') {
    errors.push('Rua faltando')
  }

  if (!studentData.district || studentData.district == '') {
    errors.push('Bairro faltando')
  }

  if (!studentData.city || studentData.city == '') {
    errors.push('Cidade faltando')
  }

  if (!studentData.phone || studentData.phone == '') {
    errors.push('Informe o telefone')
  }

  if (!studentData.email || studentData.email == '') {
    errors.push('Informe o e-mail')
  }

  if (!studentData.state || studentData.state == '') {
    errors.push('Estado/UC faltando')
  }

  if (!studentData.zipcode || studentData.zipcode == '') {
    errors.push('CEP faltando')
  }

  if (!studentData.associationData) {
    errors.push('Informe data de associação')
  }

  if (!studentData.birthDate) {
    errors.push('Informe data de nascimento')
  }

  if (!studentData.school || studentData.school == '') {
    errors.push('Informe escola')
  }

  if (!studentData.schoolSerie || studentData.schoolSerie == '') {
    errors.push('Informe serie do aluno')
  }

  // MOTHER VALIDATIONS

  if (!studentData.motherName || studentData.motherName == '') {
    errors.push('Informe nome da mãe do aluno')
  }

  if (!studentData.motherSubName || studentData.motherSubName == '') {
    errors.push('Informe sobrenome da mãe do aluno')
  }

  if (!studentData.motherDN) {
    errors.push('Informe data de nascimento da mãe')
  }

  if (!studentData.motherWorkplace || studentData.motherWorkplace == '') {
    errors.push('Informe local de trabalho da mãe do aluno')
  }

  if (!studentData.motherIncome) {
    errors.push('Renda da mãe')
  }

  if (!studentData.motherAgeChildBorn) {
    errors.push('Informe idade que a mãe teve filho')
  }

  if (!studentData.motherSchooling || studentData.motherSchooling == '') {
    errors.push('Informe escolaridade da mãe do aluno')
  }

  // FATHER VALIDATIONS

  if (!studentData.fatherName || studentData.fatherName == '') {
    errors.push('Informe nome do pai do aluno')
  }

  if (!studentData.fatherSubName || studentData.fatherSubName == '') {
    errors.push('Informe sobrenome do pai do aluno')
  }

  if (!studentData.fatherDN) {
    errors.push('Informe data de nascimento do pai')
  }

  if (!studentData.fatherWorkplace || studentData.fatherWorkplace == '') {
    errors.push('Informe local de trabalho do pai do aluno')
  }

  if (!studentData.fatherIncome) {
    errors.push('Renda do pai')
  }

  if (!studentData.fatherSchooling || studentData.fatherSchooling == '') {
    errors.push('Informe escolaridade do pai do aluno')
  }

  // RESIDENCIA

  if (!studentData.residence || studentData.residence == '') {
    errors.push('Especifique o tipo de residencia')
  }

  return errors
}

export default StudentValidation
