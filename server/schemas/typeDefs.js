const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
  password: String
}

type Auth {
  token: ID!
  user: User
}
type AdoptionForm {
  first_name: String!
  last_name: String!
  phone_number: Int
  description: String!
}

type Query {
  users: [User]
  user(username: String!): User
}
 
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    newAdoptionForm(first_name: String!, last_name: String!, phone_number: Int, description: String!): AdoptionForm
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
