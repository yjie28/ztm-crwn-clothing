// represents the overall reducer

// one big JSON object

import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';

export default combineReducers({
  user: userReducer,
});
