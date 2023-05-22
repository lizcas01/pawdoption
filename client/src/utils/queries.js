import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_DOGS = gql`
  query dogs {
    dogs {
      _id
      breed
      age
      size
      picture
      name
      description
      gender
    }
  }
  `;