const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getFish: [Fish]!
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): User
  }

  type Fish {
    id: ID!
    Name: speciesName
    Rate: fishingRate
    Region: fisheriesRegion
  }
`;

module.exports = typeDefs;
