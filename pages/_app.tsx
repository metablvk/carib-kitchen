import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { wrapper, store } from '../store/store';
import '../styles/globals.css';

import { onAuthStateChangedListener, getAllOrders } from '../utils/firebase';
import { setCurrentUser } from '../store/user/user.action';
import { setCurrentOrders } from '../store/orders/orders.action';
import { selectCurrentUser } from '../store/user/user.selector';

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);
  useEffect(() => {
    const getAllUserOrders = async () => {
      if (currentUser) {
        const orders = await getAllOrders(currentUser.uid);
        dispatch(setCurrentOrders(orders));
      }
    };
    getAllUserOrders();
  }, [currentUser]);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);
