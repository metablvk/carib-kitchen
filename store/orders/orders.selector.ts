import { RootState } from '../store';
export const selectCurrentOrders = (state: RootState) =>
  state.orders.currentOrders;
