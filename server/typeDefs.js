const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getFish: [Fish]!
    user(id: ID!): User
    users: [User!]
  }

  type User {
    id: ID!
    username: String!
    fullname: String!
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

/* type Mutation {
  login(email: String): User
} */