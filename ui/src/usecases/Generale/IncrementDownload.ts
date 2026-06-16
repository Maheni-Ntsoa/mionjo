import UseCase from "../interfaces/UseCase";

interface IncrementDownloadDto {
  id: number;
}

export interface IncrementDownloadResult {
  success: boolean;
  nbdownnational: number;
  nbdowninter: number;
}

export default class IncrementDownload
  implements UseCase<IncrementDownloadDto, Promise<IncrementDownloadResult | null>>
{
  async execute(
    params: IncrementDownloadDto
  ): Promise<IncrementDownloadResult | null> {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}generale/download/${params.id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    return response.json();
  }
}
