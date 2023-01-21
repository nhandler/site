import React from 'react';

import Background from '../../components/register/background';
import styles from './styles.module.scss';
import Form from '../../components/rsvp/form';

const RSVP = (): JSX.Element => (
  <div className={styles.rsvp}>
    <Background />
    <Form />
  </div>
);

export default RSVP;
