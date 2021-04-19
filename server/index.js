const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

// Resolvers define the technique for fetching the types defined in the
// schema.
const resolvers = require("./resolver");

const SwapiAPI = require("./datasource");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      swapiAPI: new SwapiAPI(),
    };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
