class PhotoMois {
    constructor(
        public nomphoto: string,
        public datecreation: Date,
        public id?: number
    ) { }

    static fromJson(data: any): PhotoMois {
        const photo = new PhotoMois(
            data['nomphoto'],
            data['datecreation']
        )
        photo.id = data['id']
        return photo;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }
}

export default PhotoMois;