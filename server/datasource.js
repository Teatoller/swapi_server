const { RESTDataSource } = require("apollo-datasource-rest");

class SwapiAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getPeople({ page }) {
    const response = await this.get(`people/?page=${page}`);
    return this.peopleReducer(response, page);
  }

  getAllResults() {
    return this.get("results");
  }

  peopleReducer(people, page) {
    return {
      page: page,
      next: people.next,
      previous: people.previous,
      allResults: people.results,
    };
  }
}
module.exports = SwapiAPI;
