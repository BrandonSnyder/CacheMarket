import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $state: String!
    $city: String
    $phone: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      state: $state
      city: $city
      phone: $phone
    ) {
      _id
    }
  }
`;
export const ADD_ITEM = gql`
  mutation AddItem(
    $name: String!
    $price: Float
    $imgLink: String!
    $description: String!
  ) {
    addItem(
      name: $name
      price: $price
      imgLink: $imgLink
      description: $description
    ) {
      _id
    }
  }
`;
