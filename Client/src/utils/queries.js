import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
query Item {
    item {
      name
      description
      imgLink
      price
    }
  }
`;
export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      savedItems {
        name
        description
        imgLink
        price
      }
    }
  }
`;

