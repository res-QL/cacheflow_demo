const fetch = require('node-fetch');
let users = require('./users');
let fs = require('fs');
let fishTestData

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
  Query: {
    getFishFromDatabase: async (_, __, {
      dataSources
    }, info) => {
      try {
        const fishData = await fetch("https://www.fishwatch.gov/api/species", {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        })
        const json = await fishData.json();
        fishTestData = json.map((fish) => fishReducer(fish))
        return Array.isArray(json) ?
          json.map((fish) => fishReducer(fish)) :
          [];
      } catch (err) {
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
        try {
          const fishData = await fetch("https://www.fishwatch.gov/api/species", {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          })
          const json = await fishData.json()
          fishTestData = json.map((fish) => fishReducer(fish))
          return Array.isArray(json) ?
            json.map((fish) => fishReducer(fish)) :
            [];
        } catch (err) {
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
        try {
          const fishData = await fetch("https://www.fishwatch.gov/api/species", {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          })
          const json = await fishData.json()
          fishTestData = json.map((fish) => fishReducer(fish))
          return Array.isArray(json) ?
            json.map((fish) => fishReducer(fish)) :
            [];
        } catch (err) {
          console.log(err);
          return err;
        }
      });
    },
    getUsername: (parent, {id}) => {
      return users[id];
    },
    getUsers: () => {
      return users;
    },
    getMe: (parent, args, {me}) => {
      return me;
    }
  },
  Mutation:{
    addFavoriteFish:(parent,args,ctx,info)=>{
      const user = ctx.users.forEach((user)=>{
        if(user.id === args.user) {
          user.FavoriteFish.push(args.name)
        }
      }) 
      //if(!user) throw new Error('user not found')
      return args.name;
    },
    deleteFavoriteFish:(parent, args, ctx, info)=>{
      const user = ctx.users.forEach((user)=>{
        if(user.id === args.user) {
          for (let i = 0; i < user.FavoriteFish.length; i++) {
            if (args.name === user.FavoriteFish[i]) user.FavoriteFish.splice(i,1)
          }
        }
      }) 
      //if(!user) throw new Error('Error in delete FavoriteFish')
      return args.name;
    }
  },
    User: {
      FavoriteFish: (parent, args, ctx, info) => {
        const fishData = Object.values(fishTestData).filter(fish =>
          parent.FavoriteFish.includes(fish.Name))
        return fishData
      }
    },
  Fish: {
    User: (parent, args, {me}) => {
      return me;
    }
  }
};
