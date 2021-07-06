const { cache, initCache } = require("cacheflowql");

initCache({
  local: {
    checkExpire: 30,
  },
});

//we need to add a way to get it to redis as well
module.exports = {
  // sends to local
  Query: {
    getFishFromDatabase: (_, __, { dataSources }, info) => {
      const fish = dataSources.fishAPI.getAllFish();
      return fish;
    },
    getFishToLocal: (_, __, { dataSources }, info) => {
      return cache({ location: "local", maxAge: 10 }, info, async () => {
        const fish = await dataSources.fishAPI.getAllFish();
        return fish;
      });
    },
    getFishToRedis: (_, __, { dataSources }, info) => {
      return cache({ location: "Redis", maxAge: 10 }, info, async () => {
        const fish = await dataSources.fishAPI.getAllFish();
        return fish;
      });
    },
  },
};
