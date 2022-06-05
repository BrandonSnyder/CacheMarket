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
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
mutation RemoveItem($itemId: ID!) {
  removeItem(itemId: $itemId) {
    _id
  }
}
`;
export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

