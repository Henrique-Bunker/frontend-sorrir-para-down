import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type ValueProps = {
  label: string
  value: number | string
}

type Props = {
  label: string
  hint?: string
  id: string
  values: ValueProps[]
  handler: (value: string) => void
}

export default function SelectLabels({
  label,
  hint,
  id,
  values,
  handler
}: Props) {
  const [value, setValue] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
    handler(event.target.value)
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
          fullWidth
          required
        >
          {values.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {hint && <FormHelperText>{hint}</FormHelperText>}
      </FormControl>
    </>
  )
}
