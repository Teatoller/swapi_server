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

  peopleReducer(people, page) {
    return {
      count: 82,
      page: page,
      next: people.next,
      previous: people.previous,
      allResults: people.results,
    };
  }
}
module.exports = SwapiAPI;
