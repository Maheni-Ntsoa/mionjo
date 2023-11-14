import Userc from "../../models/Userc";
import UseCase from "../interfaces/UseCase";

interface LoginUserProps {
  email: string;
  mdp: string;
}
export default class LoginUser
  implements UseCase<LoginUserProps, Promise<Userc>>
{
  async execute(loginUser: LoginUserProps): Promise<Userc> {
    const url = new URL(`${process.env.REACT_APP_BACKEND_URL}user/login`);
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        ...loginUser,
      }),
    });

    const data = response.json();

    console.log(response.body);

    return await response.json();
  }
}
