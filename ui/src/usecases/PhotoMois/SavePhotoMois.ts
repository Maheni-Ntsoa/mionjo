import UseCase from "../interfaces/UseCase";

interface SavePhotoMoisDto {
  files: any;
  resume: string;
}

export default class SavePhotoMois implements UseCase<SavePhotoMoisDto, void> {
  async execute(savePhotoMoisDto: SavePhotoMoisDto) {
    const formData = new FormData();
    for (let i = 0; i < savePhotoMoisDto.files?.length; i++) {
      formData.append("nomphoto", savePhotoMoisDto.files[i].name);
      formData.append("resume", savePhotoMoisDto.resume);
      formData.append("fichiers", savePhotoMoisDto.files[i]);
    }

    await fetch(`${process.env.REACT_APP_BACKEND_URL}photoMois/createMany`, {
      method: "post",
      body: formData,
    });
  }
}
