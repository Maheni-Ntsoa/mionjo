class User {
    constructor(
        public idrole: number,
        public email: string,
        public mdp: string,
        public etat: number,
        public id?: number,
        public datecreation?: Date,
    ) { }

    static fromJson(data: any): User {
        const user = new User(
            data['idrole'],
            data['email'],
            data['mdp'],
            data['etat'],
        )
        user.id = data['id']
        user.datecreation = data['datecreation']
        return user;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }
}

export default User;