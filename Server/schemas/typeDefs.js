const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Item {
    _id: ID
    name: String!
    description: String
    imgLink: String
    price: Float
  }
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    city: String
    state: String!
    phone:String
    item: [Item]

  }
  type Query {
    item: [Item]
    user: [User]
  }

  type Mutation {
    addUser(
      firstName: String!,
       lastName: String!,
        email: String!,
         password: String!,
         city: String,
         state:String!,
         phone: String
          ): User
  }
`;
module.exports = typeDefs;
