const tokenKey = "token";

export const saveUserToken = token =>
  window.localStorage.setItem(tokenKey, token);
export const getUserToken = () => {
    const token = window.localStorage.getItem(tokenKey)
    return token === 'undefined'? undefined : token
};
export const deleteUserToken = () => window.localStorage.removeItem(tokenKey);
