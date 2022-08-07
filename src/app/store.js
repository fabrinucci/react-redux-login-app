import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { userReducer } from '../reducers/user';
import { cartReducer } from '../reducers/cart';

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
})