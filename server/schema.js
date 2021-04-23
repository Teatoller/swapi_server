const { gql } = require("apollo-server");

const typeDefs = gql`
  # This "results" type defines the queryable fields for every star wars api in our data source.
  type People {
    count:Int!
    id: ID!
    page: String!
    next: String!
    previous: String
    allResults: AllResults!
  }
  type AllResults {
    name: String!
    height: Int!
    mass: Int!
    gender: String!
    homeworld: String!
  }
  # queries
  type Query {
    people(page: String!): People
  }
`;

module.exports = typeDefs;

// type results {
//   name: String!
//   height: Int!
//   mass: Int!
//   gender: String!
//   homeworld: String!
// }

// # queries
// type Query {
//   results: [results]
// }
