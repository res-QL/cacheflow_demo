const { gql } = require("apollo-server");
let users = require('./users')

const typeDefs = gql`
  type Query {
    getUsername(id: ID!): User
    getUsers: [User!]
    getMe: User!

    getFishFromDatabase: [Fish]!
    getFishToLocal: [Fish]!
    getFishToRedis: [Fish]!
  }
  type Mutation{
    addFavoriteFish(user:ID!,name:String!): String!
    deleteFavoriteFish(user:ID!,name:String!): String!
  }

  type Fish {
    Name: String!
    Rate: String
    Region: String
    Photo: String
    State: String
    User: User
  }

  type User {
    id: ID!
    Username: String
    FavoriteFish: [Fish]
  }
`;

module.exports = typeDefs;
