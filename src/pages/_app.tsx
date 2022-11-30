import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import ReactGA from 'react-ga';
import reportWebVitals from '../reportWebVitals';

// import './index.css';

dynamic(() => import('array-flat-polyfill'), { ssr: false });
dynamic(() => import('unfocus'), { ssr: false });

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    ReactGA.initialize('TODO', {
      testMode: process.env.NODE_ENV !== 'production',
    });
  }, []);

  useEffect(() => {
    console.log('App');
  }, []);

  useEffect(() => {
    reportWebVitals();
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
