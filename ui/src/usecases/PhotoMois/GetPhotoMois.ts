import PhotoMois from "../../models/PhotoMois";
import UseCase from "../interfaces/UseCase";

export default class GetPhotoMois
  implements UseCase<number, Promise<PhotoMois[] | null>>
{
  async execute(): Promise<PhotoMois[] | null> {
    const url = new URL(`${process.env.REACT_APP_BACKEND_URL}photoMois`);
    const response = await fetch(url, {
      headers: {
        // Authorization: `Bearer ${this.token}`,
      },
    });

    const data = await response.json();

    if (data.success === false) {
      return null;
    }

    return PhotoMois.fromArray(data.data);
  }
}
