import Generale from "../../models/Generale";
import UseCase from "../interfaces/UseCase";

interface UpdateGeneraleDto {
  idrubrique: number;
  idcategorie: number;
  etat: number;
  id?: number;
  titre?: string;
  contenu?: string;
  titreen?: string;
  contenuen?: string;
  datecreation?: Date;
  datelimit?: Date;
  etatannonce?: number;
  nbdownnational?: number;
  nbdowninter?: number;
  titulairemarche?: string;
  montantmarche?: string;
}

export default class UpdateGenerale
  implements UseCase<UpdateGeneraleDto, void>
{
  async execute(updateGeneraleDto: UpdateGeneraleDto) {
    const generale = new Generale(
      updateGeneraleDto.idrubrique,
      updateGeneraleDto.idcategorie,
      0
    );
    generale.titre = updateGeneraleDto.titre;
    generale.contenu = updateGeneraleDto.contenu;
    generale.titreen = updateGeneraleDto.titreen;
    generale.contenuen = updateGeneraleDto.contenuen;
    generale.datecreation = updateGeneraleDto.datecreation;
    generale.datelimit = updateGeneraleDto.datelimit;
    generale.id = updateGeneraleDto.id;
    generale.etatannonce = updateGeneraleDto.etatannonce;
    generale.nbdownnational = updateGeneraleDto.nbdownnational;
    generale.nbdowninter = updateGeneraleDto.nbdowninter;
    generale.titulairemarche = updateGeneraleDto.titulairemarche;
    generale.montantmarche = updateGeneraleDto.montantmarche;

    await fetch(`${process.env.REACT_APP_BACKEND_URL}generale`, {
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
