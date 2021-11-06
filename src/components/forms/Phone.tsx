import * as React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './phone.css'

const Phone = () => {
  const [phone, setPhone] = React.useState('')
  return (
    <PhoneInput
      containerClass="container_phone"
      inputClass="container_input"
      placeholder="Telefone"
      country={'br'}
      regions={'south-america'}
      masks={{ br: '(..) .....-....' }}
      value={phone}
      onChange={(phone) => setPhone(phone)}
      disableSearchIcon={true}
      disableDropdown={true}
      disableCountryCode={true}
      inputProps={{ name: 'studentPhone' }}
    />
  )
}

export default Phone
