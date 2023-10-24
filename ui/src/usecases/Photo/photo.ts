import UseCase from "../interfaces/UseCase";

interface CreateManyDto {
  files: any;
  generale?: any;
  evenement?: string;
}

export default class CreateManyPhoto implements UseCase<CreateManyDto, void> {
  async execute(createManyDto: CreateManyDto) {
    const formData = new FormData();
    for (let i = 0; i < createManyDto.files?.length; i++) {
      formData.append("idgenerale", createManyDto.generale.id.toString());
      formData.append("nomphoto", createManyDto.files[i].name);
      formData.append("fichiers", createManyDto.files[i]);
      formData.append("evenement", createManyDto.evenement!);
    }
    await fetch(`${process.env.REACT_APP_BACKEND_URL}photo/createMany`, {
      method: "post",
      body: formData,
    });
  }
}
