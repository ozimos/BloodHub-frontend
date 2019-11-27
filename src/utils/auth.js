const tokenKey = "token";

export const saveUserToken = token =>
  window.localStorage.setItem(tokenKey, token);
export const getUserToken = () => window.localStorage.getItem(tokenKey);
export const deleteUserToken = () => window.localStorage.removeItem(tokenKey);
