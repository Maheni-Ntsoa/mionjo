import Photo from "../../models/Photo";
import UseCase from "../interfaces/UseCase";

export default class GetPhotoByEvent
  implements UseCase<string, Promise<Photo[] | null>>
{
  async execute(evenement: string): Promise<Photo[] | null> {
    const url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}photo/photoByEvent`
    );
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ evenement: evenement }),
    });

    const data = await response.json();

    if (data.success === false) {
      return null;
    }

    return Photo.fromArray(data.data);
  }
}
