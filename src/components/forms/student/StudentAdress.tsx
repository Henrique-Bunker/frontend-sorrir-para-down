import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Chip, Divider } from '@mui/material'

const StudentAdress = () => (
  <>
    <Divider variant="middle" sx={{ alignItems: 'center' }}>
      <Chip label="Endereço" />
    </Divider>
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {/* LINK -  Street*/}
      <Grid item xs={8}>
        <TextField
          required
          id="address"
          name="address"
          label="Rua"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      {/* LINK - District */}
      <Grid item xs={4}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Bairro"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      {/* LINK - City  */}
      <Grid item xs={4}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Cidade"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      {/* LINK - State  */}
      <Grid item xs={4}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Estado"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      {/* LINK - Zipcode  */}
      <Grid item xs={4}>
        <TextField
          required
          id="zipcode"
          name="zipcode"
          label="CEP"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      {/* LINK - House  */}
      <Grid item xs={6}>
        <TextField
          required
          id="zipcode"
          name="zipcode"
          label="Casa"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      {/* LINK - Rent  */}
      <Grid item xs={6}>
        <TextField
          required
          id="zipcode"
          name="zipcode"
          label="Valor Aluguel"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
    </Grid>
  </>
)

export default StudentAdress
