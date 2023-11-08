import UseCase from "../interfaces/UseCase";

interface SendPlainteDto {
  region: string;
  district: string;
  commune: string;
  fokontany: string;
  nom_plaignant: string;
  contact_plaignant: string;
  categorie: string;
  nature: string;
  description: string;
}

export default class SendPlainte implements UseCase<SendPlainteDto, void> {
  async execute(sendPlainteDto: SendPlainteDto) {
    const response = await fetch(
      `https://siise.mionjo.mg/sise-plaintes/create`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...sendPlainteDto,
        }),
      }
    );
    const data = await response.json();
    return data;
  }
}
