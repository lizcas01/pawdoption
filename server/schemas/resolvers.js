const { AuthenticationError } = require('apollo-server-express');
const { User, AdoptionForm, Dog } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    dogs: async () => {
      return Dog.find();
    },
    dog: async (parent, { dogId }) => {
      return Dog.findOne({ dogId });
    },
      
  },
  Mutation: {
    addUser: async (parent,args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    newAdoptionForm: async (parent, args)=>{
      const adoptionForm = await AdoptionForm.create(args);
      return adoptionForm

    },
    newDog: async (parent, args) => {
      const dog = await Dogs.create(args);
      return dog;
    }
  },
};
// const obj = {
//   name:"hello",
//   value: "hello again"
// }

// const { name, value} = obj
// { name, value}
module.exports = resolvers;
