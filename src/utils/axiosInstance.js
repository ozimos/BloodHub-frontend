import axios from 'axios';
import authUtils from './auth';

const instance = axios.create( {
  baseURL: process.env.REACT_APP_API_URL || 'https://fast-food-fast-20188.herokuapp.com/api/v1',
} );

instance.interceptors.request.use( ( config ) => {
  const configInstance = { ...config };
  configInstance.headers.Authorization = authUtils.getUserToken();
  return configInstance;
} );

export default instance;
