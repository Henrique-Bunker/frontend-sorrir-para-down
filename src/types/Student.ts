export type StudentProp = {
  id: number
  name: string
  subname: string
  responsible: string
  phone?: string
  email?: string
  city?: string
  receiveINSS?: boolean
  birthDate: Date
}

export type FamilyMemberProp = {
  id: string
  name: string
  age: number
  income: number
}
