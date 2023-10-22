class IdeeRecu {
    constructor(
        public contenu: string,
        public descriptif: string,
        public datecreation?: Date,
        public id?: number,
    ) { }

    static fromJson(data: any): IdeeRecu {
        const ideeRecu = new IdeeRecu(
            data['contenu'],
            data['descriptif']
        )
        ideeRecu.id = data['id']
        ideeRecu.datecreation = data['datecreation']
        return ideeRecu;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }

}

export default IdeeRecu;