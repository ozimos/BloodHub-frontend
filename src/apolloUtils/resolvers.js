import { gql } from "apollo-boost";
import { getUserToken } from "utils/auth";

export const typeDefs = gql`
  extend type User {
    isLoggedIn: Boolean!
  }
`;

export const resolvers = {
  User: {
    isLoggedIn() {
      return !!getUserToken();
    }
  }
};
