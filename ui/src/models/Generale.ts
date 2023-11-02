class Generale {
  constructor(
    public idrubrique: number,
    public idcategorie: number,
    public etat: number,
    public id?: number,
    public titre?: string,
    public contenu?: string,
    public titreen?: string,
    public contenuen?: string,
    public titremg?: string,
    public contenumg?: string,
    public datecreation?: Date,
    public datelimit?: Date,
    public etatannonce?: number,
    public nbdownnational?: number,
    public nbdowninter?: number,
    public titulairemarche?: string,
    public montantmarche?: string
  ) {}

  static fromJson(data: any): Generale {
    const generale = new Generale(
      data["idrubrique"],
      data["idcategorie"],
      data["etat"]
    );
    generale.id = data["id"];
    generale.titre = data["titre"];
    generale.contenu = data["contenu"];
    generale.titreen = data["titreen"];
    generale.contenuen = data["contenuen"];
    generale.titreen = data["titremg"];
    generale.contenuen = data["contenumg"];
    generale.datecreation = data["datecreation"];
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

export default Generale;
