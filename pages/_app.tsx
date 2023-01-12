import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider, useDispatch } from 'react-redux';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { wrapper, store } from '../store/store';
import '../styles/globals.css';

import { onAuthStateChangedListener } from '../utils/firebase';
import { setCurrentUser } from '../store/user/user.action';

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);
