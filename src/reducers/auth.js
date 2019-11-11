import {
  AUTHENTICATE_USER,
} from 'actions/types';

export const initialState = { user: null, isLoggedIn: null };

export default ( state = initialState, action ) => {
  const { type, payload = null } = action;

  switch ( type ) {
    case AUTHENTICATE_USER:
      return payload ? { ...payload, isLoggedIn: true } : { user: null, isLoggedIn: false };
    default:
      return state;
  }
};
