import React from "react";
import { render, configureProviderWrapper, mockStore } from "test-utils";
import { MemoryRouter, Route } from "react-router-dom";
import AuthForm from "./AuthForm";

const alternateRoutes = {
  test: { path: "/test-route", content: "Test Route" },
  donor: { path: "/dashboard", content: "Dashboard Route" },
  nonDonor: { path: "/blood-request-details", content: "Blood Request Route" }
};
const defaultContent = "default content";
const store = mockStore({
  auth: { isLoggedIn: true, user: { isDonor: true } }
});
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
    <AuthForm redirectPath={redirectPath}>
      <div>{defaultContent}</div>
    </AuthForm>
  </RouterWrapper>
);

describe("it renders based on user auth status", () => {
  it("displays wrapped content when user is not logged in", () => {
    const { getByText, queryByText } = render(
      <TestComponent redirectPath={alternateRoutes.test.path} />
    );
    getByText(defaultContent);
    expect(queryByText(alternateRoutes.test.content)).toBeNull();
  });

  it("redirects to selected path when user is logged in", () => {
    const { getByText } = render(
      <TestComponent redirectPath={alternateRoutes.test.path} />,
      configureProviderWrapper(store)
    );
    getByText(alternateRoutes.test.content);
  });

  it("redirects to dashboard for logged in donors when redirect prop is not provided", () => {
    const { getByText } = render(
      <TestComponent />,
      configureProviderWrapper(store)
    );
    getByText(alternateRoutes.donor.content);
  });

  it("redirects to request page for logged in non donors when redirect prop is not provided", () => {
    const nonDonorStore = mockStore({
        auth: { isLoggedIn: true, user: { isDonor: false } }
      });
    const { getByText } = render(
      <TestComponent />,
      configureProviderWrapper(nonDonorStore)
    );
    getByText(alternateRoutes.nonDonor.content);
  });
});
