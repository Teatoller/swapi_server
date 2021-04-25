module.exports = {
  //   # The "Query" type is special: it lists all of the available queries that
  //   # clients can execute, along with the return type for each.
  Query: {
    people: (_, { page }, { dataSources }) =>
      dataSources.swapiAPI.getPeople({ page }),
  },
};
