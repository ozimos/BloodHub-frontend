import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render } from "@testing-library/react";

const middlewares = [thunk]
export const mockStore = configureMockStore(middlewares)
const defaultStore = mockStore({ auth: { isLoggedIn: false } })
  
  
export const configureProviderWrapper = (store=defaultStore, theme={}) => ({ children }) =>  (
    <Provider store={store}>
      <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>
    </Provider>
  );

const customRender = (ui, wrapper=configureProviderWrapper(),  options) =>
  render(ui, { wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
