const { ApolloServer, graphqlExpress } = require("apollo-server-express");
const express = require("express");
// const bodyParser = require("body-parser");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const path = require("path");
const fs = require("fs");

const FishAPI = require("./datasources/fish");

const PORT = 3000;

const app = express();

app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/metrics/global", async (req, res) => {
  const data = await fs.promises.readFile(
    path.join(__dirname, "../localMetricsStorage.json")
  );
  console.log(data.toString());
  res.status(200).json(JSON.parse(data.toString()));
});

// app.get(
//   "/metrics/local",
//   fs.readFile(path.join(__dirname, "./localMetricsStorage.json"))
// );

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
