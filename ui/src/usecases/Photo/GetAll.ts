import PhotoMois from '../../models/PhotoMois'
import UseCase from '../interfaces/UseCase'

export default class GetAll
    implements UseCase<number, Promise<PhotoMois[]>>
{
    async execute(): Promise<PhotoMois[]> {
        const url = new URL(
            `${process.env.REACT_APP_BACKEND_URL}PhotoMois/`
        )
        const response = await fetch(url, {
            headers: {
                // Authorization: `Bearer ${this.token}`,
            },
        })

        const data = await response.json()

        return PhotoMois.fromArray(data.data)
    }
}
