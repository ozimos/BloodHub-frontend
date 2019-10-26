import { combineReducers } from 'redux';
import demoReducer from './demo';

export default combineReducers( {
  demo: demoReducer,
} );
