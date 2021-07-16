const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getFishFromDatabase: [Fish]!
    getFishToLocal: [Fish]!
    getFishToRedis: [Fish]!
  }

  type Fish {
    id: ID!
    Name: String!
    Rate: String
    Region: String!
    Photo: String
    State: String
  }
`;

module.exports = typeDefs;
