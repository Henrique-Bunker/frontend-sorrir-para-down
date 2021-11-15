import axios from 'axios'
import { UserProps } from '../../types/User'

type IUserProps = {
  email: string
  password: string
}

export default class UserRequests {
  private userToken: string

  constructor() {
    this.userToken = sessionStorage.getItem('API_TOKEN') as string
  }

  async getUsers(): Promise<UserProps[]> {
    return axios
      .get(`http://localhost:5000/users`, {
        headers: {
          Authorization: 'Bearer ' + this.userToken
        }
      })
      .then((result) => result.data)
  }

  async addUser(userData: IUserProps): Promise<UserProps> {
    return axios.post(
      `http://localhost:5000/users`,
      {
        email: userData.email,
        password: userData.password
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.userToken
        }
      }
    )
  }

  async editUser(userID: number, userData: IUserProps) {
    return axios.put(
      `http://localhost:5000/users/${userID}`,
      {
        email: userData.email,
        password: userData.password
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.userToken
        }
      }
    )
  }

  async deleteUser(userID: number) {
    let result = false
    await axios
      .delete(`http://localhost:5000/users/${userID}`, {
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
      `http://localhost:5000/users?email=${mail}`,
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
