const { RESTDataSource } = require("apollo-datasource-rest");

class SwapiAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getPeople(id) {
    return this.get(`people/${id}`);
  }

  async getPeople(limit = 10) {
    const data = await this.get("people", {
      per_page: limit,
      order_by: "name",
    });
    return data.results;
  }
}
module.exports = SwapiAPI;
