import User from "../../models/User";
import UseCase from "../interfaces/UseCase";

interface UpdateUserDto {
  id: number;
  idrole: number;
  email: string;
  // mdp: string;
}

export default class UpdateUser implements UseCase<UpdateUserDto, void> {
  async execute(UpdateUserDto: UpdateUserDto) {
    const user = new User(
      UpdateUserDto.idrole,
      UpdateUserDto.email,
      // UpdateUserDto.mdp,
      0
    );

    user.id = UpdateUserDto.id;
    await fetch(`${process.env.REACT_APP_BACKEND_URL}user/update`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        ...user,
      }),
    });
  }
}
