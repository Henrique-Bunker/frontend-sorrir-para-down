import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

type Props = {
  label: string
  value: string
  color:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default'
    | undefined
}

const LabelWithCheckbox = ({ label, value, color }: Props) => (
  <FormControlLabel
    control={<Checkbox value={value} color={color} />}
    label={label}
  />
)

export default LabelWithCheckbox
