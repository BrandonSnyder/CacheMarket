const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    name: String!
  }
   type Query{
       item: [Item]
   }
  `;
module.exports = typeDefs;