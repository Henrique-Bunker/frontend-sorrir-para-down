import React, { useState, useEffect } from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import { Button } from '@mui/material'
import TableRow from '@mui/material/TableRow'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Title from '../miscellaneous/Title'
import axios from 'axios'
import { StudentProp } from 'types/Student'

type Props = {
  title: string
  showLink?: boolean
  limit?: number
  showHandles?: boolean
  handleAddMember?: () => void
}

const Students = ({
  title,
  showLink,
  limit,
  showHandles,
  handleAddMember
}: Props) => {
  const [students, setStudents] = useState<StudentProp[]>([
    {
      id: 0,
      name: '',
      subname: '',
      responsible: ''
    }
  ])

  useEffect(() => {
    axios
      .get(`http://localhost:5000/members${limit ? `?_limit=${limit}` : ''}`)
      .then((response) => {
        setStudents(response.data)
      })
  }, [setStudents, limit])

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell>INSS</TableCell>
            {showHandles && (
              <TableCell align="right">
                <Button color="success" onClick={handleAddMember}>
                  <PersonAddIcon />
                </Button>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student: StudentProp) => (
            <TableRow key={student.id}>
              <TableCell>{`${student.name} ${student.subname}`}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.city}</TableCell>
              <TableCell align="right">
                {student.receiveINSS ? 'Sim' : 'Não'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showLink && (
        <Link color="primary" href="/alunos" sx={{ mt: 3 }}>
          Mostrar mais
        </Link>
      )}
    </React.Fragment>
  )
}

export default Students
