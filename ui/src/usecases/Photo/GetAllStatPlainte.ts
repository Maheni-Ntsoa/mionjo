import Photo from "../../models/Photo";
import UseCase from "../interfaces/UseCase";

export default class GetAllStatPlainte
  implements UseCase<void, Promise<Photo[] | null>>
{
  async execute(): Promise<Photo[] | null> {
    const url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}photo/findAllStatPlainte`
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
