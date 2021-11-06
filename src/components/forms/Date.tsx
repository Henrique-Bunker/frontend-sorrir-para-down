import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

type Props = {
  txtLabel: string
  componentName: string
}

export default function BasicDatePicker({ txtLabel, componentName }: Props) {
  const [value, setValue] = React.useState<Date | null>(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={txtLabel}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} name={componentName} />}
      />
    </LocalizationProvider>
  )
}
