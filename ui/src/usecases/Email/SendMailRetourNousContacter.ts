import UseCase from '../interfaces/UseCase';

interface SendMailRetourNousContacterDto {
    to: string,
}

export default class SendMailRetourNousContacter
    implements UseCase<SendMailRetourNousContacterDto, void>
{
    async execute(sendMailRetourNousContacterDto: SendMailRetourNousContacterDto) {
        const sendMailRetourNousContacter = { to: sendMailRetourNousContacterDto.to }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}mail/sendMailRetourNousContacter`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify({
                ...sendMailRetourNousContacter
            }),
        })

        const data = await response.json()

        return data;
    }
}
