import { ORDERS_ACTION_TYPES } from './orders.types';
import { createAction } from './../../utils/reducers/reducer.utils';

export const setCurrentOrders = (orders: any) =>
  createAction(ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS, orders);
