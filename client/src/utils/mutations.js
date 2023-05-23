import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_DOG = gql`
mutation AddDog( $name: String!, $breed: String!, $age: String!, $size: String!, $description: String!, $gender: String!, $picture: String) {
  addDog( name: $name, breed: $breed, age: $age, size: $size, description: $description, gender: $gender, picture: $picture) {
      token
      dog {
        _id
        name
        breed
        age
        size
        description
        gender
        picture
      }
    }
  }
`;
