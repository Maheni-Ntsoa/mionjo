import UseCase from "../interfaces/UseCase";

export default class DeletePhoto implements UseCase<number, void> {
  async execute(idPhoto: number) {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}photo/${idPhoto}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
