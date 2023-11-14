import UseCase from "../interfaces/UseCase";

export default class DeleteUser implements UseCase<number, void> {
  async execute(id: number) {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}user/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
