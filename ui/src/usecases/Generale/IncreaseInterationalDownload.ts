import Generale from "../../models/Generale";
import UseCase from "../interfaces/UseCase";

interface IncreaseInterationalDownloadDto {
  idrubrique: number;
  id?: number;
}

export default class IncreaseInterationalDownload
  implements UseCase<IncreaseInterationalDownloadDto, void>
{
  async execute(params: IncreaseInterationalDownloadDto) {
    const generale = new Generale(params.idrubrique, 4, 0);

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}generale/international/${params.id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          ...generale,
        }),
      }
    );

    const data = await response.json();

    return data;
  }
}
