const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getUsername(id: ID!): User
    getUsers: [User!]

    getFishFromDatabase: [Fish]!
    getFishToLocal: [Fish]!
    getFishToRedis: [Fish]!
    getMe: User!
  }

  type Fish {
    id: ID!
    Name: String!
    Rate: String
    Region: String!
    Photo: String
    State: String
    User: User
  }

  type User {
    id: ID!
    Username: String!
    FavoriteFish: Fish
  }
`;

module.exports = typeDefs;
