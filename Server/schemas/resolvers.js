const { Item } = require("../models");

const resolvers = {
  Query: {
    item: async () => {
      return Item.find({});
    },
  },
};

module.exports = resolvers;
