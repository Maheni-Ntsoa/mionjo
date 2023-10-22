import UseCase from "../interfaces/UseCase";

interface CreateManyDto {
  files: any;
  generale: any;
  typeDocument?: string;
}

export default class CreateManyDoc implements UseCase<CreateManyDto, void> {
  async execute(createManyDto: CreateManyDto) {
    const formData = new FormData();
    for (let i = 0; i < createManyDto.files?.length; i++) {
      formData.append("idgenerale", createManyDto.generale.id.toString());
      formData.append("nomdocument", createManyDto.files[i].name);
      formData.append("typedocument", createManyDto.typeDocument!);
      formData.append("fichiers", createManyDto.files[i]);
    }

    await fetch(`${process.env.REACT_APP_BACKEND_URL}document/createMany`, {
      method: "post",
      body: formData,
    });
  }
}
