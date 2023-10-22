class Rubrique {
    constructor(
        public nomrubrique: string,
        public datecreation?: Date,
        public resume?: string,
        public id?: number
    ) { }

    static fromJson(data: any): Rubrique {
        const rubrique = new Rubrique(
            data['nomrubrique'],
        )
        rubrique.id = data['id']
        rubrique.datecreation = data['datecreation']
        rubrique.resume = data['resume']
        return rubrique;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }
}

export default Rubrique;