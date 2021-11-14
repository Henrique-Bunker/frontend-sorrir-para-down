import * as React from 'react'
import TextField from '@mui/material/TextField'

type Props = {
  label: string
  id: string
  rows: number
  handler: (input: string) => void
  inputValue?: string
}

export default function MultilineTextFields({
  label,
  id,
  rows,
  handler,
  inputValue
}: Props) {
  const [value, setValue] = React.useState(inputValue ? inputValue : '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    handler(event.target.value)
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
