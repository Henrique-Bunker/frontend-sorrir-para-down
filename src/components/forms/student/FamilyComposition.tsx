import Grid from '@mui/material/Grid'
import { Chip, Divider } from '@mui/material'
import FcTableWithSelect from '../../FcTableWithSelect'

const FamilyComposition = () => (
  <>
    <Divider variant="middle" sx={{ alignItems: 'center' }}>
      <Chip label="Composição Familiar" />
    </Divider>
    <Grid container sx={{ mb: 4, mt: 4 }}>
      <FcTableWithSelect />
    </Grid>
  </>
)

export default FamilyComposition
