import Document from "../../models/Document";
import UseCase from "../interfaces/UseCase";

export default class GetDocumentByIdGenerale
  implements UseCase<number, Promise<Document[] | null>>
{
  async execute(idgenerale: number): Promise<Document[] | null> {
    const url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}document/findByIdGenerale/${idgenerale}`
    );
    const response = await fetch(url, {
      headers: {
        // Authorization: `Bearer ${this.token}`,
      },
    });

    const data = await response.json();

    if (data.name === "SequelizeConnectionError") {
      return null;
    }

    return Document.fromArray(data.data);
  }
}
