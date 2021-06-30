const { ApolloServer, graphqlExpress } = require("apollo-server-express");
const express = require("express");
const bodyParser = require("body-parser");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require('mongoose');

const FishAPI = require("./datasources/fish");

const PORT = 3000;

const startServer = async () => {

  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      fishAPI: new FishAPI(),
    }),
  });
  
  server.applyMiddleware({ app })
  
  await mongoose.connect('mongodb://localhost:27017/test3', {useNewUrlParser: true, useUnifiedTopology: true});

  // bodyParser is needed just for POST.
  app.use('/graphql', bodyParser.json());
  
  app.listen(PORT, () => {
    console.log(`server is running on localhost 3000${server.graphqlPath}`);
  });  

}

startServer();