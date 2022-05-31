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
