import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import VisibilityIcon from '@mui/icons-material/Visibility'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import ConfirmDel from 'components/ConfirmDel'
import { render } from '@testing-library/react'
import { StudentProp } from 'types/Student'
import Title from '../miscellaneous/Title'
import { Divider } from '@mui/material'
import ShowStudent from './ShowStudent'

type Props = {
  handleAddStudent?: () => void
  isDash?: boolean
}

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void
}

interface Column {
  id: 'name' | 'phone' | 'email' | 'city' | 'menu' | 'responsable'
  label: string | JSX.Element
  minWidth?: number
  align?: 'right' | 'center'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'responsable', label: 'Responsavel', minWidth: 170 },
  { id: 'phone', label: 'Telefone', minWidth: 100 },
  { id: 'email', label: 'E-mail', minWidth: 100 },
  { id: 'city', label: 'Cidade', minWidth: 100 }
]

// SECTION Pagination Actions
function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }
  // !SECTION
  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

// SECTION Students Table
export default function StudentsTable({ handleAddStudent, isDash }: Props) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(isDash ? 5 : 10)

  // NOTE default Students
  const [students, setStudents] = React.useState<StudentProp[]>([
    {
      id: 0,
      name: '',
      subname: '',
      responsible: '',
      birthDate: new Date()
    }
  ])

  // NOTE Open Del Dialog
  const openDelDialog = (student: StudentProp) => {
    render(
      <ConfirmDel
        studentName={`${student.name} ${student.subname}`}
        studentID={student.id}
        openDialog={true}
      />
    )
  }

  // NOTE Handle Show Student
  const handleShowStudent = (student: StudentProp) => {
    render(<ShowStudent props={student} />)
  }

  // ANCHOR Request
  React.useEffect(() => {
    axios.get(`http://localhost:5000/members`).then((response) => {
      setStudents(response.data)
    })
  }, [setStudents])

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - students.length) : 0

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  // !SECTION
  return (
    <>
      <Title>Alunos Recentes</Title>
      <Divider />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          {/* NOTE TABLE HEADER */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              {!isDash && (
                <TableCell key="menu" align="center" style={{ minWidth: 100 }}>
                  <IconButton
                    color="success"
                    aria-label="show"
                    // LINK Add Student
                    onClick={handleAddStudent}
                  >
                    <PersonAddIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? students.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : students
            ).map((student) => (
              <TableRow key={student.id}>
                {/* NOTE TABLE ROWS */}
                <TableCell component="th" scope="row">
                  {`${student.name} ${student.subname}`}
                </TableCell>
                <TableCell>{student.responsible}</TableCell>
                <TableCell style={{ width: 160 }}>{student.phone}</TableCell>
                <TableCell style={{ width: 160 }}>{student.email}</TableCell>
                <TableCell style={{ width: 160 }}>{student.city}</TableCell>
                {!isDash && (
                  <TableCell style={{ width: 160 }} align="right">
                    <IconButton
                      color="default"
                      aria-label="show"
                      onClick={() => {
                        // LINK Show Student
                        handleShowStudent(student)
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton color="info" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      aria-label="delete"
                      onClick={() => {
                        // LINK Open Del Dialog
                        openDelDialog(student)
                      }}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          {!isDash && (
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 20, 30, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={students.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page'
                    },
                    native: true
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
      {isDash && (
        <Link color="primary" href="/alunos" sx={{ mt: 3 }}>
          Mostrar mais
        </Link>
      )}
    </>
  )
}
