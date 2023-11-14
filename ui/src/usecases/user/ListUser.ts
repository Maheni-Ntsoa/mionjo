import Userc from "../../models/Userc";
import UseCase from "../interfaces/UseCase";

export default class ListUser
  implements UseCase<string, Promise<Userc[] | null>>
{
  async execute(): Promise<Userc[] | null> {
    const url = new URL(`${process.env.REACT_APP_BACKEND_URL}userc`);
    const response = await fetch(url, {
      headers: {
        // Authorization: `Bearer ${this.token}`,
      },
    });

    const data = await response.json();

    if (data.name === "SequelizeConnectionError") {
      return null;
    }

    return Userc.fromArray(data.data);
  }
}
