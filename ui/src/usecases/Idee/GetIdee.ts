import IdeeRecu from '../../models/IdeeRecu'
import UseCase from '../interfaces/UseCase'

export default class GetIdee
    implements UseCase<string, Promise<IdeeRecu[]>>
{
    async execute(): Promise<IdeeRecu[]> {
        const url = new URL(
            `${process.env.REACT_APP_BACKEND_URL}idee`
        )
        const response = await fetch(url, {
            headers: {
                // Authorization: `Bearer ${this.token}`,
            },
        })

        const data = await response.json()

        return IdeeRecu.fromArray(data.data)
    }
}
