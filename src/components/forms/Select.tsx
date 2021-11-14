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
  inputValue?: string
}

export default function SelectLabels({
  inputValue,
  hint,
  id,
  values,
  handler
}: Props) {
  const [value, setValue] = React.useState(inputValue ? inputValue : '')
  const [label, setLabel] = React.useState('')

  React.useEffect(() => {
    switch (inputValue) {
      case 'proprieatary':
        setLabel('Propria')
        break
      case 'rent':
        setLabel('Alugada')
        break
      case 'given':
        setLabel('Cedida')
        break
      case 'others':
        setLabel('Outros')
        break

      default:
        setLabel('Casa')
        break
    }
  }, [value, inputValue])

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
