class Role {
    constructor(
        public nomrole: string,
        public datecreation: Date,
        public id?: number
    ) { }

    static fromJson(data: any): Role {
        const role = new Role(
            data['nomrole'],
            data['datecreation']
        )
        role.id = data['id']
        return role;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }
}

export default Role;