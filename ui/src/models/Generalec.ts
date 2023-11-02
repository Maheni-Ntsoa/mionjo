class Generalec {
  constructor(
    public idrubrique: number,
    public idcategorie: number,
    public datecreation: Date,
    public etat: number,
    public nomrubrique: string,
    public datecreationrubrique: Date,
    public nomcategorie: string,
    public datecreationcategorie: Date,
    public id?: number,
    public titre?: string,
    public contenu?: string,
    public titreen?: string,
    public contenuen?: string,
    public titremg?: string,
    public contenumg?: string,
    public datelimit?: Date,
    public etatannonce?: number,
    public nbdownnational?: number,
    public nbdowninter?: number,
    public titulairemarche?: string,
    public montantmarche?: string
  ) {}

  static fromJson(data: any): Generalec {
    const generale = new Generalec(
      data["idrubrique"],
      data["idcategorie"],
      data["datecreation"],
      data["etat"],
      data["nomrubrique"],
      data["datecreationrubrique"],
      data["nomcategorie"],
      data["datecreationcategorie"]
    );
    generale.id = data["id"];
    generale.titre = data["titre"];
    generale.contenu = data["contenu"];
    generale.titreen = data["titreen"];
    generale.contenuen = data["contenuen"];
    generale.titreen = data["titremg"];
    generale.contenuen = data["contenumg"];
    generale.datelimit = data["datelimit"];
    generale.etatannonce = data["etatannonce"];
    generale.nbdownnational = data["nbdownnational"];
    generale.nbdowninter = data["nbdowninter"];
    generale.titulairemarche = data["titulairemarche"];
    generale.montantmarche = data["montantmarche"];
    return generale;
  }

  static fromArray(data: any[]) {
    return data.map(this.fromJson);
  }
}

export default Generalec;
