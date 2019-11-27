import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { MockedProvider } from "@apollo/react-testing";
import { render } from "@testing-library/react";
import { REGISTER_USER, LOG_IN_USER } from "apolloUtils/requests";
import { resolvers as defaultResolvers } from "apolloUtils/resolvers";

export const defaultMocks = [
  {
    request: {
      mutation: REGISTER_USER,
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
          isLoggedIn: true,
          user: { firstName: "Buck", lastName: "Buck", isDonor: true },
          token: "randomtoken"
        }
      }
    }
  },
  {
    request: {
      mutation: LOG_IN_USER,
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
          isLoggedIn: true,
          user: { firstName: "Buck", lastName: "Buck", isDonor: true },
          token: "randomtoken"
        }
      }
    }
  }
];

export const configureProviderWrapper = ({
  mocks = [],
  theme = {},
  resolvers = defaultResolvers,
  ...rest
} = {}) => ({ children }) => (
  <MockedProvider
    mocks={mocks}
    resolvers={resolvers}
    addTypename={false}
    {...rest}
  >
    <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>
  </MockedProvider>
);

const customRender = (ui, wrapper = configureProviderWrapper(), options) =>
  render(ui, { wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
