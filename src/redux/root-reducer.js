// represents the overall reducer

// one big JSON object

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'; // https://www.npmjs.com/package/redux-persist
import storage from 'redux-persist/lib/storage'; // gets the localStorage object from browser
// alternatively, can use sessionStorage

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer, // handled by firebase authentication
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
