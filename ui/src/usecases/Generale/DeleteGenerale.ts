import UseCase from '../interfaces/UseCase'

export default class UpdateGenerale
    implements UseCase<number, void>
{
    async execute(idGenerale: number) {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}generale/${idGenerale}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${this.token}`,
            },
        })
    }
}
