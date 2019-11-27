import gql from "graphql-tag";

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
  mutation userLogin($data: UserCreateInput!) {
    userLogin(data: $data) {
      ...AuthFragment
    }
  }
  ${AUTH_FRAGMENT}
`;

LOG_IN_USER.toString = () => "userLogin";

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    getCurrentUser {
      ...AuthUserFragment
      isLoggedIn @client(always: true)
    }
  }
  ${AUTH_USER_FRAGMENT}
`;

IS_LOGGED_IN.toString = () => "getCurrentUser";
