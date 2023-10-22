import User from '../../models/User'
import UseCase from '../interfaces/UseCase'

interface SaveUserDto {
  idrole: number
  email: string
  mdp: string
  etat: number
}

export default class SaveUser
  implements UseCase<SaveUserDto, void>
{
  async execute(saveUserDto: SaveUserDto) {
    const user = new User(
      saveUserDto.idrole,
      saveUserDto.email,
      saveUserDto.mdp,
      saveUserDto.etat,
    )

    await fetch(`${process.env.BACKEND_URL}user`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        ...user
      }),
    })
  }
}
