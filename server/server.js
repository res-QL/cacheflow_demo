const { ApolloServer, graphqlExpress } = require("apollo-server-express");
const express = require("express");
const bodyParser = require("body-parser");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const path = require('path');
// const { sequelize } = require('./models');
// const models = require('./models');

const FishAPI = require("./datasources/fish");

const PORT = 3000;

//const startServer = async () => {

const app = express();

// app.use('/build', express.static(path.join(__dirname, '../build')));

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// })

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    fishAPI: new FishAPI(),
  }),
  /*    context: {
       models
     } */
});

server.applyMiddleware({
  app
})

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json());

app.listen(PORT, () => {
  console.log(`server is running on localhost 3000${server.graphqlPath}`);
})

/* sequelize.sync().then(async () => {
  app.listen(PORT, () => {
    console.log(`server is running on localhost 3000${server.graphqlPath}`);
  });    
}) */


/* // startServer() */