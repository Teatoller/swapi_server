module.exports = {
  //   # The "Query" type is special: it lists all of the available queries that
  //   # clients can execute, along with the return type for each.
  Query: {
    results: async (_source, { id }, { dataSources }) => {
      return dataSources.swapiAPI.getPeople(id);
    },
  },
};
