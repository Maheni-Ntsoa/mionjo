class PhotoMois {
  constructor(
    public nomphoto: string,
    public datecreation: Date,
    public id?: number,
    public resume?: string
  ) {}

  static fromJson(data: any): PhotoMois {
    const photo = new PhotoMois(data["nomphoto"], data["datecreation"]);
    photo.id = data["id"];
    photo.resume = data["resume"];
    return photo;
  }

  static fromArray(data: any[]) {
    return data.map(this.fromJson);
  }
}

export default PhotoMois;
