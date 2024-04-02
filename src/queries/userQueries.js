import { gql } from "@apollo/client";

const GET_USER = gql`
  query GetUser($id: ID) {
    getUser(ID: $id) {
      id
      username
      email
    }
  }
`;

export { GET_USER };
