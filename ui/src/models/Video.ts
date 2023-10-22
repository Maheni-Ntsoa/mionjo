class Video {
    constructor(
        public idgenerale: number,
        public nomvideo: string,
        public datecreation: Date,
        public id?: number
    ) { }

    static fromJson(data: any): Video {
        const video = new Video(
            data['idgenerale'],
            data['nomvideo'],
            data['datecreation']
        )
        video.id = data['id']
        return video;
    }

    static fromArray(data: any[]) {
        return data.map(this.fromJson)
    }
}

export default Video;