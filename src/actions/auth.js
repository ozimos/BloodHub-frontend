import { AUTHENTICATE_USER } from "./types";
import axios from "../utils/axiosInstance";
import authUtils from "../utils/auth";

export const getCurrentLoggedInUser = () => async dispatch => {
  try {
    const {
      data: { currentUser: user }
    } = await axios.get("/user");
    window.localStorage.setItem("loggedUser", user.username);
    dispatch({ type: AUTHENTICATE_USER, payload: { user } });
  } catch (error) {
    dispatch({ type: AUTHENTICATE_USER });
  }
};

export const login = formData => async dispatch => {
  try {
    const { data } = await axios.post("/users/login", formData);
    authUtils.saveUserToken(data.token);
    dispatch({ type: AUTHENTICATE_USER, payload: data });
    await getCurrentLoggedInUser()(dispatch);
    return null;
  } catch ({
    response: {
      data: { message }
    }
  }) {
    dispatch({ type: AUTHENTICATE_USER });
    return message;
  }
};

export const signup = formData => async dispatch => {
  try {
    const { data } = await axios.post("/users/signup", formData);
    authUtils.saveUserToken(data.token);
    dispatch({ type: AUTHENTICATE_USER, payload: data });
    await getCurrentLoggedInUser()(dispatch);
    return null;
  } catch (err) {
    dispatch({ type: AUTHENTICATE_USER });
    return {
      response: err.message
    };
  }
};

export const requestBlood = formData => async dispatch => {
  try {
    const { data } = await axios.post("/requester", formData);
    authUtils.saveUserToken(data.token);
    dispatch({ type: AUTHENTICATE_USER, payload: data });
    await getCurrentLoggedInUser()(dispatch);
    return null;
  } catch ({
    response: {
      data: { message }
    }
  }) {
    dispatch({ type: AUTHENTICATE_USER });
    return message;
  }
};
export const completeBloodRequest = formData => async dispatch => {
  try {
    const { data } = await axios.post("/requester", formData);
    authUtils.saveUserToken(data.token);
    dispatch({ type: AUTHENTICATE_USER, payload: data });
    await getCurrentLoggedInUser()(dispatch);
    return null;
  } catch ({
    response: {
      data: { message }
    }
  }) {
    dispatch({ type: AUTHENTICATE_USER });
    return message;
  }
};
