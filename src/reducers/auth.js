import { authenticateUser } from "actions/auth";
import { createReducer } from "redux-starter-kit";

export const initialState = { user: null, isLoggedIn: null };
export default createReducer(initialState, {
  [authenticateUser]: (state, { payload }) => {
    return payload
      ? { ...payload, isLoggedIn: true }
      : { user: null, isLoggedIn: false };
  }
});
