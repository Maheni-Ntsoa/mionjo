import UseCase from '../interfaces/UseCase'

interface SendMailNousContacterDto {
    nom: string,
    prenom: string,
    email: string,
    objet: string,
    message: string
}

export default class SendMailNousContacter
    implements UseCase<SendMailNousContacterDto, void>
{
    async execute(sendMailNousContacterDto: SendMailNousContacterDto) {
        const sendMailNousContacter = { nom: sendMailNousContacterDto.nom, prenom: sendMailNousContacterDto.prenom, email: sendMailNousContacterDto.email, objet: sendMailNousContacterDto.objet, message: sendMailNousContacterDto.message }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}mail/sendMailNousContacter`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify({
                ...sendMailNousContacter
            }),
        })

        const data = await response.json()

        return data;
    }
}
