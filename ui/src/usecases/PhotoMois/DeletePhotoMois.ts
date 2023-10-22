import UseCase from "../interfaces/UseCase";

export default class DeletePhotoMois implements UseCase<number, void> {
  async execute(idPhoto: number) {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}photoMois/${idPhoto}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
