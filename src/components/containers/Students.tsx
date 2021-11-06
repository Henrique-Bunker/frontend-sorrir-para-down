import React, { useState, useEffect } from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Title from '../miscellaneous/Title'
import axios from 'axios'

type Props = {
  title: string
  showLink?: boolean
  limit?: number
}

type studentProps = {
  id: number
  name: string
  subname: string
  phone?: string
  email?: string
  city?: string
  receiveINSS?: boolean
}

const Students = ({ title, showLink, limit }: Props) => {
  const [students, setStudents] = useState<studentProps[]>([
    {
      id: 0,
      name: '',
      subname: ''
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
            <TableCell align="right">INSS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student: studentProps) => (
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
