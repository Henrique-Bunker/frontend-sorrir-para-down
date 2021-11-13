import { Chip, Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MultilineText from '../MultilineText'

type Props = {
  handleObs: (value: string) => void
  handleAct: (value: string) => void
}

const StudentOthers = ({ handleObs, handleAct }: Props) => (
  <>
    <Divider variant="middle" sx={{ alignItems: 'center' }}>
      <Chip label="Outros" />
    </Divider>
    <Grid container spacing={3} sx={{ mb: 6 }}>
      <Grid item xs={6} spacing={3} sx={{ mt: 4 }}>
        {/* LINK -  Others Activities */}
        <Grid item xs={12}>
          <MultilineText
            id="othersActivities"
            label="Outros"
            rows={5}
            handler={handleAct}
          />
        </Grid>
      </Grid>
      <Grid item xs={6} spacing={3} sx={{ mt: 4 }}>
        {/* LINK -  Obs */}
        <Grid item xs={12}>
          <MultilineText
            id="observations"
            label="Obs"
            rows={2}
            handler={handleObs}
          />
        </Grid>
        {/* LINK -  CEI*/}
        <Grid item xs={12} sx={{ mt: 1 }}>
          <TextField
            required
            id="inputCei"
            name="inputCei"
            label="CEI"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </Grid>
  </>
)

export default StudentOthers
