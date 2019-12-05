import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { render, configureProviderWrapper, wait } from "utils/test-utils";
import AuthForm from "./AuthForm";
import { REGISTER_USER, GET_CURRENT_USER } from "apolloUtils/requests";

const unauthenticatedUserMock = {
  request: {
    query: GET_CURRENT_USER,
    variables: {}
  },
  result: {
    data: {
      isLoggedIn: false,
      [GET_CURRENT_USER]: null
    }
  }
};
const authenticatedNonDonorMock = {
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
        isDonor: false
      }
    }
  }
};
const ProviderWrapper = configureProviderWrapper();

const alternateRoutes = {
  test: { path: "/test-route", content: "Test Route" },
  donor: { path: "/dashboard", content: "Dashboard Route" },
  nonDonor: { path: "/blood-request-details", content: "Blood Request Route" }
};
const defaultContent = "default content";
const RouterWrapper = ({ children }) => (
  <MemoryRouter>
    {children}
    {Object.values(alternateRoutes).map(({ path, content }) => (
      <Route key={path} path={path}>
        <div>{content}</div>
      </Route>
    ))}
  </MemoryRouter>
);

const TestComponent = ({ redirectPath }) => (
  <RouterWrapper>
    <AuthForm redirectPath={redirectPath} authMutation={REGISTER_USER}>
      <div>{defaultContent}</div>
    </AuthForm>
  </RouterWrapper>
);

describe("it renders based on user auth status", () => {
  it("displays wrapped content when user is not logged in", async () => {
    const { getByText, queryByText } = render(
      <TestComponent redirectPath={alternateRoutes.test.path} />,
      configureProviderWrapper({ mocks: [unauthenticatedUserMock] })
    );
    await wait();
    getByText(defaultContent);
    expect(queryByText(alternateRoutes.test.content)).toBeNull();
  });

  it("redirects to selected path when user is logged in", async () => {
    localStorage.getItem.mockReturnValue("token");
    const { getByText } = render(
      <TestComponent redirectPath={alternateRoutes.test.path} />,
      ProviderWrapper
    );
    await wait();
    getByText(alternateRoutes.test.content);
  });

  it("redirects to dashboard for logged in donors when redirect prop is not provided", async () => {
    localStorage.getItem.mockReturnValue("token");
    const { getByText } = render(<TestComponent />, ProviderWrapper);
    await wait();
    getByText(alternateRoutes.donor.content);
  });

  it("redirects to request page for logged in non donors when redirect prop is not provided", async () => {
    localStorage.getItem.mockReturnValue("token");
    const { getByText } = render(
      <TestComponent />,
      configureProviderWrapper({ mocks: [authenticatedNonDonorMock] })
    );
    await wait();
    getByText(alternateRoutes.nonDonor.content);
  });
});
