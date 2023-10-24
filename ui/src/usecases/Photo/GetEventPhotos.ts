import UseCase from "../interfaces/UseCase";

export default class GetEventPhotos
  implements UseCase<void, Promise<string[] | null>>
{
  async execute(): Promise<string[] | null> {
    const url = new URL(`${process.env.REACT_APP_BACKEND_URL}photo/event`);
    const response = await fetch(url, {
      headers: {
        // Authorization: `Bearer ${this.token}`,
      },
    });

    const data = await response.json();

    if (data.success === false) {
      return null;
    }

    return data.data;
  }
}
