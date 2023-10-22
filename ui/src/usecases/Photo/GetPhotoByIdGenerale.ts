import Photo from "../../models/Photo";
import UseCase from "../interfaces/UseCase";

export default class GetPhotoByIdGenerale
  implements UseCase<number, Promise<Photo[] | null>>
{
  async execute(idgenerale: number): Promise<Photo[] | null> {
    const url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}photo/findByIdGenerale/${idgenerale}`
    );
    const response = await fetch(url, {
      headers: {
        // Authorization: `Bearer ${this.token}`,
      },
    });

    const data = await response.json();

    if (data.success === false) {
      return null;
    }

    return Photo.fromArray(data.data);
  }
}
