class Banniere {
    constructor(
        public nombanniere: string,
        public chiffre: number,
        public id?: number
    ) { }

    static fromJson(data: any): Banniere {
        const banniere = new Banniere(
            data['nombanniere'],
            data['chiffre']
        )
        banniere.id = data['id']
        return banniere;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }
}

export default Banniere;