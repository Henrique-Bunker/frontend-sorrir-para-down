import * as React from 'react'
import TextField from '@mui/material/TextField'

type Props = {
  label: string
  id: string
  rows: number
}

export default function MultilineTextFields({ label, id, rows }: Props) {
  const [value, setValue] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      value={value}
      multiline
      onChange={handleChange}
      rows={rows}
    />
  )
}
