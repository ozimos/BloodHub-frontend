import authReducer, { initialState } from "./auth";
import { AUTHENTICATE_USER } from "actions/types";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it("should log out the user if the payload is not available", () => {
    expect(
      authReducer(null, {
        type: AUTHENTICATE_USER
      })
    ).toEqual({ user: null, isLoggedIn: false });
  });

  it("should log in the user if the payload is available", () => {
    expect(
      authReducer(null, {
        type: AUTHENTICATE_USER,
        payload: { user: "some user" }
      })
    ).toEqual({
      user: "some user",
      isLoggedIn: true
    });
  });
});
