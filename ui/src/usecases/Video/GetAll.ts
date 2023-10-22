import Video from '../../models/Video'
import UseCase from '../interfaces/UseCase'

export default class GetAll
    implements UseCase<number, Promise<Video[]>>
{
    async execute(): Promise<Video[]> {
        const url = new URL(
            `${process.env.REACT_APP_BACKEND_URL}video`
        )
        const response = await fetch(url, {
            headers: {
                // Authorization: `Bearer ${this.token}`,
            },
        })

        const data = await response.json()

        return Video.fromArray(data.data)
    }
}
