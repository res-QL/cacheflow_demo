const {
  ApolloServer,
  graphqlExpress
} = require("apollo-server-express");
const express = require("express");
// const bodyParser = require("body-parser");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const path = require("path");
const fs = require("fs");
let users = require('./users')

const FishAPI = require("./datasources/fish");

const PORT = 3000;

const app = express();


app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

// app.get("/metrics/global", async (req, res) => {
//   const data = await fs.promises.readFile(
//     path.join(__dirname, "../localMetricsStorage.json")
//   );
//   console.log(data.toString());
//   res.status(200).json(JSON.parse(data.toString()));
// });

app.get('/getMetrics', (req, res) => {
  const globalData = fs.readFileSync('globalMetrics.json', 'utf-8');
  const globalDataJson = JSON.parse(globalData)
  const localData = fs.readFileSync('localMetricsStorage.json','utf-8');
  const localDataJson = JSON.parse(localData);
  res.status(200).send({globalData:globalDataJson,localData:localDataJson})
});


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    me: users[1]
  },
  dataSources: () => ({
    fishAPI: new FishAPI(),
  }),
});

server.applyMiddleware({
  app,
});

// bodyParser is needed just for POST.
// app.use("/graphql", bodyParser.json());

app.listen(PORT, () => {
  console.log(`server is running on localhost 3000${server.graphqlPath}`);
});