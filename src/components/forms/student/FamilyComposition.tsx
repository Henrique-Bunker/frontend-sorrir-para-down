import Grid from '@mui/material/Grid'
import { Chip, Divider } from '@mui/material'
import FcTableWithSelect from '../../FcTableWithSelect'
import { FamilyMemberProp } from 'types/Student'

type Props = {
  handleComposition: (field: FamilyMemberProp[]) => void
  incomeProps?: FamilyMemberProp[]
}

const FamilyComposition = ({ handleComposition, incomeProps }: Props) => (
  <>
    <Divider variant="middle" sx={{ alignItems: 'center' }}>
      <Chip label="Composição Familiar" />
    </Divider>
    <Grid container sx={{ mb: 4, mt: 4 }}>
      <FcTableWithSelect
        handleChange={handleComposition}
        studentData={incomeProps}
      />
    </Grid>
  </>
)

export default FamilyComposition
