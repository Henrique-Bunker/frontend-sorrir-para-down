export type StudentProp = {
  id: number
  name: string
  subname: string
  responsible: string
  phone: string
  email: string
  receiveINSS: boolean
  isAPAE: boolean
  birthDate: Date
  associationData: Date
  school: string
  schoolSerie: string
  // Adress
  street: string
  district: string
  zipcode: string
  city: string
  state: string
  residence: string
  rentValue: number
  // Mother Section
  motherName: string
  motherSubName: string
  motherDN: Date
  motherWorkplace: string
  motherIncome: number
  motherAgeChildBorn: number
  motherSchooling: string
  // Mother Section
  fatherName: string
  fatherSubName: string
  fatherDN: Date
  fatherWorkplace: string
  fatherIncome: number
  fatherSchooling: string
  // Family | Others
  familyComposition: FamilyMemberProp[]
  familyIncome: number
  CEI: string
  othersActivities?: string
  obs?: string
}

export type FamilyMemberProp = {
  id: string
  name: string
  age: number
  income: number
}
