import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type ValueProps = {
  label: string
  value: string
}

type Props = {
  label: string
  hint?: string
  id: string
  values: ValueProps[]
  handler: (value: string) => void
  inputValue?: string
}

export default function SelectRole({
  inputValue,
  hint,
  id,
  values,
  label,
  handler
}: Props) {
  const [value, setValue] = React.useState<string>(inputValue ? inputValue : '')
  const [selectLabel, setSelectLabel] = React.useState('TEsf')

  React.useEffect(() => {
    switch (value) {
      case 'usr':
        setSelectLabel('Usuario')
        break
      case 'sup':
        setSelectLabel('Supervisor')
        break
      case 'adm':
        setSelectLabel('Administrador')
        break
      default:
        setSelectLabel('Usuario')
        break
    }
  }, [setValue, value])

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
          label={selectLabel}
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
