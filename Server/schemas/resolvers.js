const { Item, User } = require("../models");
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    item: async () => {
      return Item.find({});
    },
    user: async() => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'items',
          populate: 'likedItems'
        });
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    },
    
  
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user }
    },
    addItem: async (parent, args) => {
      const item = await Item.create(args);
      return item
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    removeItem: async (parent, { itemId }) => {
      return Item.findOneAndDelete({ _id: itemId});
    },
  }
};


module.exports = resolvers;
