const { Item, User } = require("../models");

const resolvers = {
  Query: {
    item: async () => {
      return Item.find({});
    },
    user: async() => {
      return User.find({})
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return { user }
    }
  }
};

module.exports = resolvers;
