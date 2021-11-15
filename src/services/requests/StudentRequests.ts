import axios from 'axios'
import { StudentProp } from '../../types/Student'

export default class StudentRequests {
  private userToken: string

  constructor() {
    this.userToken = sessionStorage.getItem('API_TOKEN') as string
  }

  async getStudents(): Promise<StudentProp[]> {
    return axios
      .get(`http://localhost:5000/members`, {
        headers: {
          Authorization: 'Bearer ' + this.userToken
        }
      })
      .then((result) => result.data)
  }

  async addUser(studentData: StudentProp): Promise<StudentProp> {
    return axios.post(`http://localhost:5000/members`, studentData, {
      headers: {
        Authorization: 'Bearer ' + this.userToken
      }
    })
  }

  async editStudent(studentID: number, studentData: StudentProp) {
    return axios.put(
      `http://localhost:5000/members/${studentID}`,
      studentData,
      {
        headers: {
          Authorization: 'Bearer ' + this.userToken
        }
      }
    )
  }

  async deleteStudent(studentID: number) {
    let result = false
    await axios
      .delete(`http://localhost:5000/members/${studentID}`, {
        headers: {
          Authorization: 'Bearer ' + this.userToken
        }
      })
      .then(() => {
        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }

  async checkUserMail(mail: string) {
    const result = await axios.get(
      `http://localhost:5000/members?email=${mail}`,
      {
        headers: {
          Authorization: 'Bearer ' + this.userToken
        }
      }
    )

    if (result.data.length > 0) {
      return false
    } else {
      return true
    }
  }
}
