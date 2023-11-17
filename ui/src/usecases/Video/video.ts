import UseCase from "../interfaces/UseCase";

interface CreateManyDto {
  files: any;
  generale?: any;
}

export default class CreateManyVideo implements UseCase<CreateManyDto, void> {
  async execute(createManyDto: CreateManyDto) {
    const formData = new FormData();
    for (let i = 0; i < createManyDto.files?.length; i++) {
      if (createManyDto.generale) {
        formData.append("idgenerale", createManyDto.generale.id.toString());
      } else {
        formData.append("idgenerale", "1");
      }
      formData.append("nomvideo", createManyDto.files[i].name);
      formData.append("fichiers", createManyDto.files[i]);
    }

    await fetch(`${process.env.REACT_APP_BACKEND_URL}video/createMany`, {
      method: "post",
      body: formData,
    });
  }
}
