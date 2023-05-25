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
    phone_number: String
    email: String
    dogId: ID
  }

  type Dog {
    _id: ID
    name: String!
    breed: String!
    age: String!
    size: String!
    gender: String!
    description: String!
    picture: String!
  }

  type Dogs {
    _id: ID!
    breed: String!
    age: Int!
    size: String!
    name: String!
    description: String!
    gender: String!
    picture: String!    
  }

  type Query {
    users: [User]
    user(username: String!): User
    dogs: [Dog]
    dog(_id: ID!): Dog
    adoptionForms: [AdoptionForm]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    newAdoptionForm(
      first_name: String!
      last_name: String!
      phone_number: String
      email: String
      dogId: ID!
    ): AdoptionForm
    login(email: String!, password: String!): Auth
    addDog(
      name: String!
      breed: String!
      age: String!
      size: String!
      gender: String!
      description: String!
      picture: String!
    ): Dog
  }
`;

module.exports = typeDefs;
