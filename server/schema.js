const { gql } = require("apollo-server");

const typeDefs = gql`
  # This "results" type defines the queryable fields for every star wars api in our data source.
  type People {
    page: String!
    next: String!
    previous: String
    allResults: [AllResults]!
  }
  type AllResults {
    name: String!
    height: Int
    mass: String
    gender: String!
    homeworld: String!
  }
  type Person {
    Results: [Results]
  }
  type Results {
    name: String
    height: Int
    mass: String
    gender: String
    homeworld: String
  }
  # queries
  type Query {
    people(page: String!): People
    person(name: String): Person
  }
`;

module.exports = typeDefs;
