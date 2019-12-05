import { gql } from "apollo-boost";
import { getUserToken } from "utils/auth";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export const resolvers = {
  Query: {
    isLoggedIn() {
      return !!getUserToken();
    }
  }
};
