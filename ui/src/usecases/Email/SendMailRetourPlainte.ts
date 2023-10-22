import UseCase from '../interfaces/UseCase';

interface SendMailRetourPlainteDto {
    to: string,
}

export default class SendMailRetourPlainte
    implements UseCase<SendMailRetourPlainteDto, void>
{
    async execute(sendMailRetourPlainteDto: SendMailRetourPlainteDto) {
        const sendMailRetourPlainte = { to: sendMailRetourPlainteDto.to }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}mail/sendMailRetourPlainte`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify({
                ...sendMailRetourPlainte
            }),
        })

        const data = await response.json()

        return data;
    }
}
