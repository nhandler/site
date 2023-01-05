import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import ReactGA from 'react-ga';
import reportWebVitals from '../reportWebVitals';

dynamic(() => import('array-flat-polyfill'), { ssr: false });
dynamic(() => import('unfocus'), { ssr: false });

import './index.css';

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

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
