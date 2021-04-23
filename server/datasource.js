const { RESTDataSource } = require("apollo-datasource-rest");

class SwapiAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  // async getPeople(id) {
  //   return this.get(`people/${id}`);
  // }

  // async getPeople(limit = 10) {
  //   const data = await this.get("people", {
  //     per_page: limit,
  //     order_by: "name",
  //   });
  //   return data.results;
  // }


  async getPeople({page}) {
    const response = await this.get(`people/?page=${page}`);
    return this.peopleReducer(response, page);
  }

  // async getPeople(page) {
  //   return this.get(`people/?page=${page}`);
  // }

  // async getPeople() {
  //   const data = await this.get("people", {
  //   });
  //   return data;
  // }

  peopleReducer(people, page) {
    return {
      count:82,
      id: people.id || 0,
      page: page,
      next: people.next,
      previous: people.previous,
      allResults: {
        name: people.results[0].name,
        height: people.results[0].height,
        mass: people.results[0].mass,
        gender: people.results[0].gender,
        homeworld: people.results[0].homeworld,
      },
    };
  }
}
module.exports = SwapiAPI;
