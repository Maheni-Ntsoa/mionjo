import UseCase from "../interfaces/UseCase";

interface CreateManyStatPlainteDto {
  files: any;
  generale?: any;
  evenement?: string;
}

export default class CreateManyStatPlaintePhoto
  implements UseCase<CreateManyStatPlainteDto, void>
{
  async execute(createManyStatPlainteDto: CreateManyStatPlainteDto) {
    const formData = new FormData();
    for (let i = 0; i < createManyStatPlainteDto.files?.length; i++) {
      formData.append(
        "idgenerale",
        createManyStatPlainteDto.generale.id.toString()
      );
      formData.append("nomphoto", createManyStatPlainteDto.files[i].name);
      formData.append("fichiers", createManyStatPlainteDto.files[i]);
      formData.append("evenement", createManyStatPlainteDto.evenement!);
    }
    await fetch(
      `${process.env.REACT_APP_BACKEND_URL}photo/createManyStatPlainte`,
      {
        method: "post",
        body: formData,
      }
    );
  }
}
