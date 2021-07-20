# cacheflowQL

## What is cacheflowQL?

CacheflowQL is an npm package with complex caching algorithms that provide developers deep insights into their GraphQL queries and metrics about their cached data, allowing for in-depth effective runtime and query analysis.

## Who is cacheflowQL for?

CacheflowQL is for any developer looking for a lightweight way to cache data on GraphQL servers and receive in-depth metrics concerning the perfomance of their application in order to optimize run-time by utilizing server-side and Redis caching solutions.

## Installing cacheflowQL

Download our NPM Package [Here](https://www.npmjs.com/package/cacheflowql)

1. Install your npm dependencies: run `npm install cacheflowql` in your terminal

## Require cacheflowQL in your server file

```js
const { initCache, cache } = require('cacheflowql');
```

## Set up initcache

Local:

1. checkExpire: Determines the interval that cacheflow checks for expired data
2. globalThreshold: A threshold value that users can set to prevent caching until input value is met

Redis:

1. To connect to a redis store provide the host ip, port, and password

```js
initCache({
  local: {
    checkExpire: 10,
    //How often to check if data should be deleted, in seconds

    globalThreshold: 10,
    //How often data needs to be requested to be cached, in seconds
  },
  redis: {
    host: '127.0.0.1',
    port: '6379',
    password: <'redis store password'>
  },
});
```

## Choose which of your resolvers you want to cache

Wrap resolver within the callback function and return data from inside callback function

```js

resolver(parent, args, ctx, info) {
      return cache(
        { location: 'local', maxAge: 60, smartCache: true },
        info,
        function callback() { return data };
      );
    },
```

## Set up cacheConfig object

```js
configObj = {
  location: 'local',
  //either 'local' or 'redis'
  maxAge: 60,
  //How long data will remain in local cache, in seconds
  smartCache: true,
  //boolean, determine if smart cache should be enabled
};
```

### location

- Set cache location; either local or redis. Local and/or redis must be initiated using initCache function if either is being used.

### maxAge

- How long data will remain in local cache. After maxAge in seconds have elapsed, data is marked as expired and will be deleted.

### smartCache

- If you want to incorporate the smartCache capabilities of cacheflowQL you need to include a parameter in your cacheConfig object called smartCache and set it equal to true. Smartcache will prevent caching until thresholds are met. Thresholds are established by comparing metrics from specific resolvers to average metrics for all of the user's cached data.

### Mutations

- If you want the cache function to update your cache when data is mutated mutation resolvers must be wrapped in cache function as well. In the cache config object include a parameter 'mutate' whose value is equal to the name of the query resolver whose data will be changed.

```js
resolver(parent, args, context, info) {
      return cache(
        { location: 'redis', maxAge: 10, mutate: 'name of resolver to mutate' },
        info,
        function callback() {
          return data;
        }
      );
    },
```

## Other inputs for cache function

The other two parameters in the cache function are info and a callback.

1. The info parameter is the info parameter from the resolver initialization itself
2. The callback parameter will be whatever was in your resolver before using cacheflowQL

Simply return the call to cache with your three input parameters and you are set to cache!

```js
return cache(cacheConfigObject, info, callback);
```

## Terminal Commands

To run the terminal commands run "node node_modules/cacheflowql/metricsTerminal.js" in your local terminal. The terminal will then ask whether you want to view local or global metrics.
If you want to see data about all data cached using the cache function input 'Global Metrics.' If you want to see data about a specific resolver simply enter the name of the resolver, eg. user as seen below.
