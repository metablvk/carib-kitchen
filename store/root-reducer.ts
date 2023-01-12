import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { userReducer } from './user/user.reducer';
import { ordersReducer } from './orders/orders.reducer';
export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
});
