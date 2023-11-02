import Generale from "../../models/Generale";
import UseCase from "../interfaces/UseCase";

interface SaveInterviewDto {
  idrubrique: number;
  idcategorie: number;
  etat: number;
  id?: number;
  titre?: string;
  contenu?: string;
  titreen?: string;
  contenuen?: string;
  titremg?: string;
  contenumg?: string;
  datecreation?: Date;
  datelimit?: Date;
}

export default class SaveInterview implements UseCase<SaveInterviewDto, void> {
  async execute(saveInterviewDto: SaveInterviewDto) {
    const generale = new Generale(
      saveInterviewDto.idrubrique,
      saveInterviewDto.idcategorie,
      saveInterviewDto.etat
    );
    generale.titre = saveInterviewDto.titre;
    generale.contenu = saveInterviewDto.contenu;
    generale.titreen = saveInterviewDto.titreen;
    generale.contenuen = saveInterviewDto.contenuen;
    generale.titremg = saveInterviewDto.titremg;
    generale.contenumg = saveInterviewDto.contenumg;
    generale.datecreation = saveInterviewDto.datecreation;
    generale.datelimit = saveInterviewDto.datelimit;

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}generale/interview`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          ...generale,
        }),
      }
    );

    const data = await response.json();

    return data;
  }
}
