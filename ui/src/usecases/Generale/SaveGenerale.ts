import Generale from "../../models/Generale";
import UseCase from "../interfaces/UseCase";

interface SaveGeneraleDto {
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
  etatannonce?: number;
  nbdownnational?: number;
  nbdowninter?: number;
  titulairemarche?: string;
  montantmarche?: string;
}

export default class SaveGenerale implements UseCase<SaveGeneraleDto, void> {
  async execute(saveGeneraleDto: SaveGeneraleDto) {
    const generale = new Generale(
      saveGeneraleDto.idrubrique,
      saveGeneraleDto.idcategorie,
      saveGeneraleDto.etat
    );
    generale.titre = saveGeneraleDto.titre;
    generale.contenu = saveGeneraleDto.contenu;
    generale.titreen = saveGeneraleDto.titreen;
    generale.contenuen = saveGeneraleDto.contenuen;
    generale.titremg = saveGeneraleDto.titremg;
    generale.contenumg = saveGeneraleDto.contenumg;
    generale.datecreation = saveGeneraleDto.datecreation;
    generale.datelimit = saveGeneraleDto.datelimit;
    generale.etatannonce = saveGeneraleDto.etatannonce;
    generale.nbdownnational = saveGeneraleDto.nbdownnational;
    generale.nbdowninter = saveGeneraleDto.nbdowninter;
    generale.titulairemarche = saveGeneraleDto.titulairemarche;
    generale.montantmarche = saveGeneraleDto.montantmarche;

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}generale`,
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
