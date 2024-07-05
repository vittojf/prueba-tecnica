export class userServices {
  async getDataUser() {
    return fetch("/data/userData.json")
      .then((res) => res.json())
      .then((d) => d);
  }
}
