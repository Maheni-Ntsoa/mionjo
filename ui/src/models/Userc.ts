class Userc {
    constructor(
        public idrole: number,
        public nomrole: string,
        public email: string,
        public mdp: string,
        public datecreation: Date,
        public etat: number,
        public id?: number
    ) { }

    static fromJson(data: any): Userc {
        const userc = new Userc(
            data['idrole'],
            data['nomrole'],
            data['email'],
            data['mdp'],
            data['datecreation'],
            data['etat'],
        )
        userc.id = data['id']
        return userc;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }
}

export default Userc;