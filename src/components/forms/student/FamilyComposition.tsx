import Grid from '@mui/material/Grid'
import { Chip, Divider } from '@mui/material'
import FcTableWithSelect from '../../FcTableWithSelect'

type CompositionProps = {
  id: string
  name: string
  age: number
  income: number
}

type Props = {
  handleComposition: (field: CompositionProps[]) => void
}

const FamilyComposition = ({ handleComposition }: Props) => (
  <>
    <Divider variant="middle" sx={{ alignItems: 'center' }}>
      <Chip label="Composição Familiar" />
    </Divider>
    <Grid container sx={{ mb: 4, mt: 4 }}>
      <FcTableWithSelect handleChange={handleComposition} />
    </Grid>
  </>
)

export default FamilyComposition
