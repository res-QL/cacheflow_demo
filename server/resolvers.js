import { Cat } from './model/cat'

module.exports = {
  Query: {
    getFish: (_, __, { dataSources }, info) =>
      dataSources.fishAPI.getAllFish()
  },
  Mutation: {
    createCat: async (_, {name}, ctx, info) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty
    }
  }
};