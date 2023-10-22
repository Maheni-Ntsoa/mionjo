class Document {
    constructor(
        public idgenerale: number,
        public nomdocument: string,
        public typedocument: string,
        public datecreation?: Date,
        public id?: number
    ) { }

    static fromJson(data: any): Document {
        const document = new Document(
            data['idgenerale'],
            data['nomdocument'],
            data['typedocument']
        )
        document.id = data['id']
        document.datecreation = data['datecreation']
        return document;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }
}

export default Document;