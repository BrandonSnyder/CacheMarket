const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    name: String!
    description:String
    imgLink:String
    price:Float
  }
   type Query{
       item: [Item]
   }
  `;
module.exports = typeDefs;