import { createAction } from "redux-starter-kit";
import axios from "utils/axiosInstance";
import authUtils from "utils/auth";

export const authenticateUser = createAction("AUTHENTICATE_USER", data => ({
  payload: data
}));
export const loginUser = createAction("LOGIN", data => ({ payload: data }));
export const getHospitals = createAction("GET_HOSPITALS", data => ({
  payload: data
}));
export const signupUser = createAction("SIGNUP", data => ({ payload: data }));

export const getCurrentLoggedInUser = () => async dispatch => {
  try {
    const {
      data: { currentUser: user }
    } = await axios.get("/user");
    window.localStorage.setItem("loggedUser", user.username);
    dispatch(authenticateUser({ user }));
  } catch (error) {
    dispatch(authenticateUser());
  }
};

export const login = formData => async dispatch => {
  try {
    const { data } = await axios.post("/users/login", formData);
    authUtils.saveUserToken(data.token);
    dispatch(authenticateUser(data));
    await getCurrentLoggedInUser()(dispatch);
    return null;
  } catch ({
    response: {
      data: { message }
    }
  }) {
    dispatch(authenticateUser());
    return message;
  }
};

export const signup = formData => async dispatch => {
  try {
    const { data } = await axios.post("/users/signup", formData);
    authUtils.saveUserToken(data.token);
    dispatch(authenticateUser(data));
    await dispatch(getCurrentLoggedInUser());
    return null;
  } catch (err) {
    dispatch(authenticateUser());
    return {
      response: err.message
    };
  }
};

export const requestBlood = formData => async dispatch => {
  try {
    const { data } = await axios.post("/requester", formData);
    authUtils.saveUserToken(data.token);
    dispatch(authenticateUser(data));
    await getCurrentLoggedInUser()(dispatch);
    return null;
  } catch ({
    response: {
      data: { message }
    }
  }) {
    dispatch(authenticateUser());
    return message;
  }
};
export const completeBloodRequest = formData => async dispatch => {
  try {
    const { data } = await axios.post("/requester", formData);
    authUtils.saveUserToken(data.token);
    dispatch(authenticateUser(data));
    await getCurrentLoggedInUser()(dispatch);
    return null;
  } catch ({
    response: {
      data: { message }
    }
  }) {
    dispatch(authenticateUser());
    return message;
  }
};
