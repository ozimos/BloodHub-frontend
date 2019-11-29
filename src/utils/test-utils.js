import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { MockedProvider } from "@apollo/react-testing";
import { render } from "@testing-library/react";
import {
  REGISTER_USER,
  LOG_IN_USER,
  GET_CURRENT_USER
} from "apolloUtils/requests";
import { resolvers as defaultResolvers } from "apolloUtils/resolvers";

export const defaultMocks = [
  {
    request: {
      query: REGISTER_USER,
      variables: {
        data: {
          firstName: "Buck",
          lastName: "Buck",
          email: "hail@hydra.com",
          password: "c@ptainAm3r1c@",
          phone: "66699969",
          donor: {
            create: { bloodGroup: "A_negative" }
          }
        }
      }
    },
    result: {
      data: {
        [REGISTER_USER]: {
          user: {
            __typename: "User",
            id: "someid",
            firstName: "Buck",
            lastName: "Buck",
            isDonor: true
          },
          token: "randomtoken"
        }
      }
    }
  },
  {
    request: {
      query: LOG_IN_USER,
      variables: {
        data: {
          email: "hail@hydra.com",
          password: "c@ptainAm3r1c@"
        }
      }
    },
    result: {
      data: {
        [LOG_IN_USER]: {
          user: {
            __typename: "User",
            id: "someid",
            firstName: "Buck",
            lastName: "Buck",
            isDonor: true
          },
          token: "randomtoken"
        }
      }
    }
  },
  {
    request: {
      query: GET_CURRENT_USER,
      variables: {}
    },
    result: {
      data: {
        isLoggedIn: true,
        [GET_CURRENT_USER]: {
          __typename: "User",
          id: "someid",
          firstName: "Buck",
          lastName: "Buck",
          isDonor: true
        }
      }
    }
  }
];

export const configureProviderWrapper = ({
  mocks = defaultMocks,
  theme = {},
  resolvers = defaultResolvers,
  ...rest
} = {}) => ({ children }) => (
  <MockedProvider mocks={mocks} resolvers={resolvers} {...rest}>
    <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>
  </MockedProvider>
);

const customRender = (ui, wrapper = configureProviderWrapper(), options) =>
  render(ui, { wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
