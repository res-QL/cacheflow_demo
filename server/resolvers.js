const fetch = require('node-fetch');

const { cache, initCache } = require('cacheflowql');

initCache({
  local: {
    checkExpire: 30,
    globalThreshold: 0,
  },
});

function fishReducer(fish) {
  return {
    Name: fish['Species Name'],
    Rate: fish['Fishing Rate'],
    Region: fish['NOAA Fisheries Region'],
    State: fish['Quote'],
    Photo: fish['Species Illustration Photo'].src,
  };
}

//we need to add a way to get it to redis as well
module.exports = {
  // sends to local
  Query: {
    getFishFromDatabase: async (_, __, { dataSources }, info) => {
      try {
        const fishData = await fetch('https://www.fishwatch.gov/api/species', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const json = await fishData.json();
        return Array.isArray(json) ? json.map(fish => fishReducer(fish)) : [];
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    getFishToLocal: (_, __, { dataSources }, info) => {
      return cache(
        {
          location: 'local',
          maxAge: 10,
        },
        info,
        async () => {
          // const fish = await dataSources.fishAPI.getAllFish();
          try {
            const fishData = await fetch(
              'https://www.fishwatch.gov/api/species',
              {
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
              }
            );
            const json = await fishData.json();
            return Array.isArray(json)
              ? json.map(fish => fishReducer(fish))
              : [];
            //  console.log(json)
          } catch (err) {
            console.log(err);
            return err;
          }
        }
      );
    },
    getFishToRedis: (_, __, { dataSources }, info) => {
      return cache(
        {
          location: 'redis',
          maxAge: 10,
        },
        info,
        async () => {
          try {
            const fishData = await fetch(
              'https://www.fishwatch.gov/api/species',
              {
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
              }
            );
            const json = await fishData.json();
            return Array.isArray(json)
              ? json.map(fish => fishReducer(fish))
              : [];
          } catch (err) {
            console.log(err);
            return err;
          }
        }
      );
    },
  },
};
