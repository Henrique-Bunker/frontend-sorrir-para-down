import * as React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './phone.css'

type Props = {
  handler: (phone: string) => void
}

const Phone = ({ handler }: Props) => {
  const [phone, setPhone] = React.useState('')

  const handlePhone = (memberPhone: string) => {
    setPhone(memberPhone)
    handler(memberPhone)
  }

  return (
    <PhoneInput
      containerClass="container_phone"
      inputClass="container_input"
      placeholder="Telefone"
      country={'br'}
      regions={'south-america'}
      masks={{ br: '(..) .....-....' }}
      value={phone}
      onChange={(phone) => handlePhone(phone)}
      disableSearchIcon={true}
      disableDropdown={true}
      disableCountryCode={true}
      inputProps={{ name: 'studentPhone' }}
      inputStyle={{ height: '100%' }}
    />
  )
}

export default Phone
