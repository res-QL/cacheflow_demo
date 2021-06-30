const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getFish: [Fish]!
  }

  type Mutation {
    createCat(name: String!): Cat!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Fish {
    id: ID!
    Name: String!
    Rate: String
    Region: String!
  }

`;

module.exports = typeDefs;

/* type Mutation {
  login(email: String): User
} */