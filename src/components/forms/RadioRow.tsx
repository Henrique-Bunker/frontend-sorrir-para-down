import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

type ValueProps = {
  label: string
  value: boolean
}

type Props = {
  label: string
  values: ValueProps[]
  handler: (value: boolean) => void
  initialValue?: boolean
}

export default function RowRadioButtonsGroup({
  label,
  values,
  initialValue,
  handler
}: Props) {
  const [value, setValue] = React.useState(initialValue ? initialValue : false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if ((event.target as HTMLInputElement).value === 'true') {
      handler(true)
      setValue(true)
    } else {
      handler(false)
      setValue(false)
    }
  }
  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {values.map((value, index) => (
          <FormControlLabel
            key={index}
            value={value.value}
            control={<Radio />}
            label={value.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
