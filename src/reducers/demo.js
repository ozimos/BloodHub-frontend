import { DEMO } from "../actions/types";

const initialState = { demo: false };
export default ( state = initialState, action ) => {
  const { type } = action;

  switch ( type ) {
    case DEMO:
      return { ...state, demo: true };
    default:
      return state;
  }
};
