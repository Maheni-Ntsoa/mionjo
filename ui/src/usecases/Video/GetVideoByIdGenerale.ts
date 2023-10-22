import Video from "../../models/Video";
import UseCase from "../interfaces/UseCase";

export default class GetVideoByIdGenerale
  implements UseCase<number, Promise<Video[] | null>>
{
  async execute(idgenerale: number): Promise<Video[] | null> {
    const url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}video/findByIdGenerale/${idgenerale}`
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

    return Video.fromArray(data.data);
  }
}
