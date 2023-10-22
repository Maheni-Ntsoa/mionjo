import Generalec from "../../models/Generalec";
import UseCase from "../interfaces/UseCase";

export default class SearchGetGeneralec
  implements UseCase<string, Promise<Generalec[] | null>>
{
  async execute(exp: string): Promise<Generalec[] | null> {
    const url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}generalec/search/${exp}`
    );
    const response = await fetch(url, {
      headers: {
        // Authorization: `Bearer ${this.token}`,
      },
    });

    const data = await response.json();

    if (data.name === "SequelizeConnectionError") {
      return null;
    }

    return Generalec.fromArray(data);
  }
}
