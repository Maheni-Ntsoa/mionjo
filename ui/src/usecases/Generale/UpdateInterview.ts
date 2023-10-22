import Generale from "../../models/Generale";
import UseCase from "../interfaces/UseCase";

interface UpdateInterviewDto {
  idrubrique: number;
  idcategorie: number;
  etat: number;
  id?: number;
  titre?: string;
  contenu?: string;
  titreen?: string;
  contenuen?: string;
  datecreation?: Date;
}

export default class UpdateInterview
  implements UseCase<UpdateInterviewDto, void>
{
  async execute(updateInterviewDto: UpdateInterviewDto) {
    const generale = new Generale(
      updateInterviewDto.idrubrique,
      updateInterviewDto.idcategorie,
      0
    );
    generale.titre = updateInterviewDto.titre;
    generale.contenu = updateInterviewDto.contenu;
    generale.titreen = updateInterviewDto.titreen;
    generale.contenuen = updateInterviewDto.contenuen;
    generale.datecreation = updateInterviewDto.datecreation;
    generale.id = updateInterviewDto.id;

    await fetch(`${process.env.REACT_APP_BACKEND_URL}generale/interview`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        ...generale,
      }),
    });
  }
}
