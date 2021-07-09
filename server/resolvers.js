const fetch = require('node-fetch');
let users = require('./users')

const {
  cache,
  initCache
} = require("cacheflowql");

initCache({
  local: {
    checkExpire: 30,
    globalThreshold: 0
  },
  redis: {
    host: '127.0.0.1',
    port: '6379'
  }
});

function fishReducer(fish) {
  return {
    Name: fish["Species Name"],
    Rate: fish["Fishing Rate"],
    Region: fish["NOAA Fisheries Region"],
    State: fish["Quote"],
    Photo: fish["Species Illustration Photo"].src,
  };
}

module.exports = {
  // sends to local
  Query: {
    getFishFromDatabase: async (_, __, {
      dataSources
    }, info) => {
      try{
        const fishData =  await fetch("https://www.fishwatch.gov/api/species", {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        })
        const json = await fishData.json();
      return Array.isArray(json)
    ? json.map((fish) => fishReducer(fish))
    : [];
      }
      catch(err){
        console.log(err);
        return err;
      }
    },
    getFishToLocal: (_, __, {
      dataSources
    }, info) => {
      return cache({
        location: "local",
        maxAge: 10
      }, info, async () => {
        // const fish = await dataSources.fishAPI.getAllFish();
        try{
          const fishData = await fetch("https://www.fishwatch.gov/api/species", {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          })
          const json = await fishData.json()
        return Array.isArray(json)
      ? json.map((fish) => fishReducer(fish))
      : [];
        //  console.log(json)
        }
        catch(err){
          console.log(err);
          return err;
        }
      });
    },
    getFishToRedis: (_, __, {
      dataSources
    }, info) => {
      return cache({
        location: "redis",
        maxAge: 10
      }, info, async () => {
        try{
          const fishData =  await fetch("https://www.fishwatch.gov/api/species", {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          })
          const json = await fishData.json()
        return Array.isArray(json)
      ? json.map((fish) => fishReducer(fish))
      : [];
        }
        catch(err){
          console.log(err);
          return err;
        }
      });
    },
    getUsername: (parent, { id }) => {
      return users[id];
    },
    getUsers: () => {
      return Object.values(users)
    },
    getMe: (parent, args, { me }) => {
      return me;
    }
  },
  User: {
    Username: user => {
      return `${user.firstname} ${user.lastname}`
    }
  },
  Fish: {
    user: (parent, args, { me }) => {
      return me;
    }
  }
};

export default users;