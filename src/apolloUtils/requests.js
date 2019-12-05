import { gql } from "graphql.macro";

const AUTH_USER_FRAGMENT = gql`
  fragment AuthUserFragment on User {
    id
    firstName
    lastName
    isDonor
  }
`;
const AUTH_FRAGMENT = gql`
  fragment AuthFragment on UserAuthPayload {
    user {
      ...AuthUserFragment
    }
    token
  }
  ${AUTH_USER_FRAGMENT}
`;

export const REGISTER_USER = gql`
  mutation userRegister($data: UserCreateInput!) {
    userRegister(data: $data) {
      ...AuthFragment
    }
  }
  ${AUTH_FRAGMENT}
`;

REGISTER_USER.toString = () => "userRegister";

export const LOG_IN_USER = gql`
  mutation userLogin($data: UserLoginInput!) {
    userLogin(data: $data) {
      ...AuthFragment
    }
  }
  ${AUTH_FRAGMENT}
`;

LOG_IN_USER.toString = () => "userLogin";

export const GET_CURRENT_USER = gql`
  query getCurrentUser {
    isLoggedIn @client(always: true)
    getCurrentUser {
      ...AuthUserFragment
    }
  }
  ${AUTH_USER_FRAGMENT}
`;

GET_CURRENT_USER.toString = () => "getCurrentUser";

export const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client(always: true)
  }
`;

IS_LOGGED_IN.toString = () => "isLoggedIn";
