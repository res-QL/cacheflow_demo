const {
  ApolloServer,
  graphqlExpress
} = require('apollo-server-express');
const express = require('express');
const bodyParser = require("body-parser");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const path = require("path");
const fs = require("fs");
let users = require('./users')

const FishAPI = require('./datasources/fish');

const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/assets/cacheflowLogo.svg', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './assets/cacheflowLogo.svg'));
});

app.get('/getMetrics', (req, res) => {
  const globalData = fs.readFileSync('./cacheflowSrc/globalMetrics.json', 'utf-8');
  const globalDataJson = JSON.parse(globalData);
  const localData = fs.readFileSync('./cacheflowSrc/localMetricsStorage.json', 'utf-8');
  const localDataJson = JSON.parse(localData);
  res
    .status(200)
    .send({
      globalData: globalDataJson,
      localData: localDataJson
    });
});

app.post('/terminal', terminalMiddleware, (req, res) => {
  res.status(200).json(res.locals.metrics);
});

function terminalMiddleware(req, res, next) {
  console.log(req.body);

  if (req.body.message === 'Global Metrics') {
    console.log('Requesting global metrics');
    const globalData = fs.readFileSync('./cacheflowSrc/globalMetrics.json', 'utf-8');

    res.locals.metrics = {
      resolver: 'Global',
      data: JSON.parse(globalData),
    };
  } else {
    const localData = fs.readFileSync('./cacheflowSrc/localMetricsStorage.json', 'utf-8');
    const localDataJson = JSON.parse(localData);

    res.locals.metrics = {
      resolver: req.body.message,
      data: localDataJson[req.body.message],
    };
  }
  return next();
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    me: users[1],
    users
  },
  dataSources: () => ({
    fishAPI: new FishAPI(),
  }),
});

server.applyMiddleware({
  app,
});

app.listen(PORT, () => {
  console.log(`server is running on localhost 3000${server.graphqlPath}`);
});