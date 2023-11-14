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
    try {
      const url = new URL(`${process.env.REACT_APP_BACKEND_URL}user/login`);
      const response = await fetch(url.toString(), {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(loginUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // rethrow the error to let the calling code handle it
    }
  }
}
