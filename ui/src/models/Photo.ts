class Photo {
    constructor(
        public idgenerale: number,
        public nomphoto: string,
        public datecreation: Date,
        public id?: number
    ) { }

    static fromJson(data: any): Photo {
        const photo = new Photo(
            data['idgenerale'],
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

export default Photo;