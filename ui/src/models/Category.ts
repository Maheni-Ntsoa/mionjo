class Category {
    constructor(
        public nomcategorie: string,
        public datecreation: Date,
        public id?: number
    ) { }

    static fromJson(data: any): Category {
        const category = new Category(
            data['nomcategorie'],
            data['datecreation']
        )
        category.id = data['id']
        return category;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }

}

export default Category;