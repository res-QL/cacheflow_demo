// import models from './datasources/userAPI';

const { cache, initCache } = require('cacheflowql')

initCache({ local: {
  checkExpire: 30
} })

module.exports = {
  Query: {

    
    getFish: (_, __, { dataSources }, info) =>
      {return cache({ location: 'local', maxAge: 10 }, info, async () => {
        const fish = await dataSources.fishAPI.getAllFish();
        console.log(fish);
        return fish
      })}

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