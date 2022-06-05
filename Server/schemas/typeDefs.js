const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Item {
    _id: ID
    product: String!
    description: String
    imgLink: String
    price: String
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    city: String
    state: String!
    phone: String
    likedItem: [Item]
    cart: [Item]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    item: [Item]
    user: [User]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      city: String
      state: String!
      phone: String
    ): User

    addItem(
      product: String!
      description: String!
      imgLink: String
      price: String
    ): Item

    login(email: String!, password: String!): Auth
    removeItem(itemId: ID!): Item
  }
`;
module.exports = typeDefs;
