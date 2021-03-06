import axios from "axios";
import { getUserToken } from "./auth";

const instance = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "https://secret-island-30539.herokuapp.com/"
});

instance.interceptors.request.use(config => {
  const configInstance = { ...config };
  configInstance.headers.Authorization = getUserToken();
  return configInstance;
});

export default instance;
