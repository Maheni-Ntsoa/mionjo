import Generalec from "../../models/Generalec";
import UseCase from "../interfaces/UseCase";

export default class GetGeneralecByIdCate
  implements UseCase<number, Promise<Generalec[] | null>>
{
  async execute(idCate: number): Promise<Generalec[] | null> {
    const url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}generalec/allannonces/${idCate}`
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
