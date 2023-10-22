import UseCase from '../interfaces/UseCase'

interface SendMailDepotPlainteDto {
    nom: string,
    prenom: string,
    tel: string,
    email: string,
    plainte: string
}

export default class SendMailDepotPlainte
    implements UseCase<SendMailDepotPlainteDto, void>
{
    async execute(sendMailDepotPlainteDto: SendMailDepotPlainteDto) {
        const sendMailDepotPlainte = { nom: sendMailDepotPlainteDto.nom, prenom: sendMailDepotPlainteDto.prenom, tel: sendMailDepotPlainteDto.tel, email: sendMailDepotPlainteDto.email, plainte: sendMailDepotPlainteDto.plainte }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}mail/sendMailDepotPlainte`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify({
                ...sendMailDepotPlainte
            }),
        })

        const data = await response.json()

        return data;
    }
}
