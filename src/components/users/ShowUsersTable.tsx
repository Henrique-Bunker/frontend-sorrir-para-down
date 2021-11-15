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
import DelUser from './DelUser'
import { render } from '@testing-library/react'
import { UserProps } from 'types/User'
import Title from '../miscellaneous/Title'
import { Divider } from '@mui/material'
import ShowUser from './ShowUser'
import EditUser from './EditUser'

type Props = {
  handleAddUser?: () => void
  handleEdit?: (component: JSX.Element) => void
  handleClose?: () => void
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
  id: 'email' | 'role'
  label: string | JSX.Element
  minWidth?: number
  align?: 'right' | 'center'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'email', label: 'Usuario', minWidth: 50 }
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
export default function ShowUsersTable({
  handleAddUser,
  handleEdit,
  handleClose,
  isDash
}: Props) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(isDash ? 5 : 10)

  // NOTE default Students
  const [users, setUsers] = React.useState<UserProps[]>([])

  // NOTE Open Del Dialog
  const openDelDialog = (user: UserProps) => {
    render(
      <DelUser userName={`${user.email}`} userID={user.id} openDialog={true} />
    )
  }

  // NOTE Handle Show Student
  const handleShowStudent = (user: UserProps) => {
    render(<ShowUser props={user} />)
  }

  // NOTE Handle Show Student
  const handleEditStudent = (user: UserProps) => {
    if (handleClose && handleEdit) {
      handleEdit(<EditUser userDate={user} handleCloseTab={handleClose} />)
    }
  }

  // ANCHOR Request
  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/users`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('API_TOKEN')
        }
      })
      .then((response) => {
        setUsers(response.data)
      })
  }, [setUsers])

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0

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
      {isDash && <Title>Usuarios</Title>}
      <Divider />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="custom pagination table">
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
                    onClick={handleAddUser}
                  >
                    <PersonAddIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? users.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : users
            ).map((user) => (
              <TableRow key={user.id}>
                {/* NOTE TABLE ROWS */}
                <TableCell component="th" scope="row">
                  {user.email}
                </TableCell>
                {!isDash && (
                  <TableCell style={{ width: 160 }} align="right">
                    <IconButton
                      color="default"
                      aria-label="show"
                      onClick={() => {
                        // LINK Show Student
                        handleShowStudent(user)
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      color="info"
                      aria-label="edit"
                      onClick={() => {
                        // LINK Edit Student
                        handleEditStudent(user)
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      aria-label="delete"
                      onClick={() => {
                        // LINK Open Del Dialog
                        openDelDialog(user)
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
                  count={users.length}
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
        <Link color="primary" href="/usuarios" sx={{ mt: 3 }}>
          Mostrar mais
        </Link>
      )}
    </>
  )
}
