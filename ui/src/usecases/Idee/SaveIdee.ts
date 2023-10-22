import IdeeRecu from '../../models/IdeeRecu';
import UseCase from '../interfaces/UseCase';

interface SaveIdeeDto {
    descriptif: string,
    contenu: string,
}

export default class SaveIdee
    implements UseCase<SaveIdeeDto, void>
{
    async execute(saveIdeeDto: SaveIdeeDto) {
        const idee = new IdeeRecu(
            saveIdeeDto.contenu,
            saveIdeeDto.descriptif
        )
        await fetch(`${process.env.REACT_APP_BACKEND_URL}idee`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify({
                ...idee
            }),
        })
    }
}
