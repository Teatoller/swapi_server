const { RESTDataSource } = require("apollo-datasource-rest");

class PersonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  // "https://swapi.dev/api/people/?search=Anakin%20Skywalker"
  async getPerson({ name }) {
    const response = await this.get(`people/?search=${name}`);
    return this.personReducer(response, name);
  }

  getResults() {
    return this.get("results");
  }

  personReducer(person, name) {
    return {
      name: name,
      Results: person.results,
    };
  }
}
module.exports = PersonAPI;
