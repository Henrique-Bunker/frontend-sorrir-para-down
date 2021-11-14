import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import brLocale from 'date-fns/locale/pt-BR'

type Props = {
  txtLabel: string
  componentName: string
  handler: (date: Date) => void
  initialValue?: Date
}

export default function BasicDatePicker({
  txtLabel,
  componentName,
  handler,
  initialValue
}: Props) {
  const [value, setValue] = React.useState<Date>(
    initialValue ? initialValue : new Date()
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
      <DatePicker
        label={txtLabel}
        value={value}
        mask="__/__/____"
        onChange={(newValue) => {
          if (newValue) {
            handler(newValue)
            setValue(newValue)
          }
        }}
        renderInput={(params) => <TextField {...params} name={componentName} />}
      />
    </LocalizationProvider>
  )
}
