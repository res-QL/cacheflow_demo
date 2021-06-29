const { ApolloServer } = require("apollo-server");
const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const FishAPI = require("./datasources/fish");

const app = express();

const PORT = 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    fishAPI: new FishAPI(),
  }),
});

// bodyParser is needed just for POST.
app.use("/graphql", graphqlExpress({ schema: myGraphQLSchema }));
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log("server is running on localhost 3000");
});
