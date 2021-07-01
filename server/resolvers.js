import models from './datasources/userAPI';

module.exports = {
  Query: {
    getFish: (_, __, { dataSources }, info) =>
      dataSources.fishAPI.getAllFish()
  },
  /*   users: async (parent, args, { models }) => {
      return await models.User.findAll();
  },
    user: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id);
  },
    me: async (parent, args, { models, me }) => {
      return await models.User.findByPk(me.id);
  },


  Mutation: {
    createUser: async (_, { name }, ctx, info) => {
      return await models.User.create({
        userId: user.id,
        FullName: user.fullname
      })
    }
  } */
};