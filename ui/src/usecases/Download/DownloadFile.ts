import UseCase from "../interfaces/UseCase";

export default class DownloadFile implements UseCase<string, Promise<void>> {
  async execute(filename: string): Promise<void> {
    const url = `${process.env.REACT_APP_BACKEND_URL}document/download/${filename}`;
    try {
      const response = await fetch(url, {
        headers: {
          // Vous pouvez ajouter des en-têtes si nécessaire
        },
      });

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Erreur lors du téléchargement du fichier :", error);
    }
  }
}
