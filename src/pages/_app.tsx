import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import ReactGA from 'react-ga';
import reportWebVitals from '../reportWebVitals';

import './index.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    ReactGA.initialize('TODO', {
      testMode: process.env.NODE_ENV !== 'production',
    });
  }, []);

  useEffect(() => {
    reportWebVitals();
  }, []);

  useEffect(() => {
    // Only for debugging:
    // sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0YWZmQGhhY2tpbGxpbm9pcy5vcmciLCJleHAiOjE2NzY0MDIyMDQsImlkIjoiZ2l0aHViODIwNjQ4MjYiLCJyb2xlcyI6WyJVc2VyIiwiU3RhZmYiLCJBcHBsaWNhbnQiLCJBdHRlbmRlZSJdfQ.Hn0xafIARvRyvdiOuckpQWPCfVxrEL6qhVRVecg_p4I');
    sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhNzM1M0Bob3RtYWlsLmNvbSIsImV4cCI6MTY3NjMzODI4MiwiaWQiOiJnaXRodWI1NjA3NjAxMSIsInJvbGVzIjpbIlVzZXIiLCJBcHBsaWNhbnQiXX0.VuVaf2m5sMKwV0sYOI9C1CMvNNbhkkUHZ2ImQgBAvQo');
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
