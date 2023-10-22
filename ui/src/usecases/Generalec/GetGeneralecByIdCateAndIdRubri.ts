import Generalec from "../../models/Generalec";
import UseCase from "../interfaces/UseCase";

interface GetGeneralecByIdCateAndIdRubriDTO {
  idcategorie: number;
  idrubrique: number;
}

export default class GetGeneralecByIdCateAndIdRubri
  implements
    UseCase<GetGeneralecByIdCateAndIdRubriDTO, Promise<Generalec[] | null>>
{
  async execute(
    params: GetGeneralecByIdCateAndIdRubriDTO
  ): Promise<Generalec[] | null> {
    const url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}generalec/${params.idcategorie}/${params.idrubrique}`
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
