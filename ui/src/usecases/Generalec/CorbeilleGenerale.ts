import Generalec from "../../models/Generalec";
import UseCase from "../interfaces/UseCase";

interface CorbeilleGeneraleDTO {
  idcategorie: number;
  idrubrique: number;
}

export default class CorbeilleGenerale
  implements UseCase<CorbeilleGeneraleDTO, Promise<Generalec[] | null>>
{
  async execute(params: CorbeilleGeneraleDTO): Promise<Generalec[] | null> {
    const url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}generalec/corbeille/${params.idcategorie}/${params.idrubrique}`
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
