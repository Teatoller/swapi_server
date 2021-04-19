const { gql } = require("apollo-server");

const typeDefs = gql`
  # This "results" type defines the queryable fields for every star wars api in our data source.
  type results {
    name: String!
    height: Int!
    mass: Int!
    gender: String!
    homeworld: String!
  }

  # queries
  type Query {
    results: [results]
  }
`;

module.exports = typeDefs;
