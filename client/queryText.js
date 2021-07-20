const dryAPItext = `getFishFromDatabase: async (_, __, {
  dataSources
}, info) => {
  try {
    const fishData = await fetch('https://www.fishwatch.gov/api/species', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    fishTestData = json.map((fish) => fishReducer(fish))
    return Array.isArray(json) ? json.map(fish => fishReducer(fish)) : [];
  } catch (err) {
    console.log(err);
    return err;
  }
}`;

const fishToLocalCacheText = `getFishToLocal: (_, __, {
  dataSources
}, info) => {
  return cache({
    location: "local",
    maxAge: 10
  }, info, async () => {
    try {
      const fishData = await fetch("https://www.fishwatch.gov/api/species", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
      fishTestData = json.map((fish) => fishReducer(fish))
      return Array.isArray(json) ?
        json.map((fish) => fishReducer(fish)) : [];
    } catch (err) {
      console.log(err);
      return err;
    }
  });
}`;

const fishToRedisText = `getFishToRedis: (_, __, {
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
          fishTestData = json.map((fish) => fishReducer(fish))
          return Array.isArray(json) ?
            json.map((fish) => fishReducer(fish)) : [];
        } catch (err) {
          console.log(err);
          return err;
        }
      });
    }`;

export { dryAPItext, fishToLocalCacheText, fishToRedisText };
