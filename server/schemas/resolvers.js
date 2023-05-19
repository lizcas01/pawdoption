const { AuthenticationError } = require('apollo-server-express');
const { User, AdoptionForm, Dogs } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    dogs: async () => {
      return Dogs.find();
    },
    dog: async (parent, { id }) => {
      return Dogs.findById(id);
    }
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
    addDog: async(parent, args) => {
      const dog = await Dogs.create(args);
      return dog;
    },
    updateDog: async (parent, { id, ...args }) => {
      const updatedDog = await Dogs.findByIdAndUpdate(id, args, { new: true });
      return updatedDog;
    },
    deleteDog: async (parent, { id }) => {
      await Dogs.findByIdAndDelete(id);
      return 'Dog deleted successfully';
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
