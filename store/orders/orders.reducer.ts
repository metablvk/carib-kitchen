import { ORDERS_ACTION_TYPES } from './orders.types';
import { AnyAction } from 'redux';

const INITIAL_STATE = {
  currentOrders: null,
};

export const ordersReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ORDERS_ACTION_TYPES.SET_CURRENT_ORDERS:
      return { ...state, currentOrders: payload };
    default:
      return state;
  }
};
