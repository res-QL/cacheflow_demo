# cacheflowQL

## What is cacheflowQL?

CacheflowQL is an npm package with complex caching algorithms that provide developers deep insights into their GraphQL queries and metrics about cached data, allowing for in-depth effective runtime and query analysis.

## Who is cacheflowQL for?

CacheflowQL is for any developer looking to receive an in-depth analysis concerning the perfomance of their application in order to optimize run-time by utilizing server-side and Redis caching solutions.

## Installing cacheflowQL

Download our NPM Package [Here](https://expressjs.com/en/)

1. Install your npm dependencies: run `npm install cacheflowql` in your terminal

## Require cacheflowQL in your server file

```js
const { initCache, cache } = require('cacheflowql');
```

## Set up initcache

Local:

1. checkExpire: Determines the interval that cacheflow checks for expired data
2. globalThreshold: A threshold value that users can set to

Redis:

1. To connect to an redis store: provide the host ip, port, and password

```js
initCache({
  local: {
    checkExpire: 10, //In seconds
    globalThreshold: 10, //Times per second
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
  location: 'local', //either 'local' or 'redis'
  maxAge: 60, //determine how long data is valid, in seconds
  smartCache: true, //boolean, determine if smart cache should be enabled for resolver
};
```

### location

- Set cache location; either locally or on redis. Local and/or redis must be initiated using initCache function if either is being used.

### maxAge

- Det duration for data validity. After specified time (in seconds) is passed, data is marked as expired and will be deleted.

### smartCache

- If you want to incorporate the smartCache capabilities of cacheflowQL you need to include a parameter in your cacheConfig object called smartCache and set it equal to true

### Mutations

- If you want the cache function to work with mutations you need to wrap mutation resolvers in cache function as well. In the cache config object include a parameter 'mutate' whose value is equal to the name of the query resolver you want to have update.

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

1. info parameter from above
2. Callback that is whatever was originally in your resolver

## Terminal Commands

To run the terminal commands run node and find relative path to path to your
