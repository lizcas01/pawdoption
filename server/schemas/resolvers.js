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
      const dog = await Dog.find();
      return dog;
    },
    dog: async (parent, { dogId }) => {
      return Dog.findOne({ _id: dogId });
    },
    adoptionForms: async () => {
      return AdoptionForm.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
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
    newAdoptionForm: async (parent, args) => {
      const adoptionForm = await AdoptionForm.create(args);
      return adoptionForm;
    },
    addDog: async (parent, args) => {
      const dog = await Dog.create(args);
      return dog;
    },
  },
};

module.exports = resolvers;
