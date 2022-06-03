import { gql } from "@apollo/client";
export const ADD_USER = gql`
  mutation addUser(
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
    $product: String!
    $description: String!
    $price: String!
    $imgLink: String
  ) {
    addItem(
      product: $product
      description: $description
      price: $price
      imgLink: $imgLink
    ) {
      _id
    }
  }
`;
