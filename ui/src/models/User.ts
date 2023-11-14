class User {
    constructor(
        public idrole: number,
        public email: string,
        public etat: number,
        public id?: number,
        public datecreation?: Date,
        public mdp?: string,
    ) { }

    static fromJson(data: any): User {
        const user = new User(
            data['idrole'],
            data['email'],
            data['etat'],
        )
        user.id = data['id']
        user.mdp = data['mdp']
        user.datecreation = data['datecreation']
        return user;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }
}

export default User;