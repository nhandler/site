import React from 'react';

import MOONLIGHT from 'assets/registration/carnival_background.svg';
import styles from './styles.module.scss';

const Background: React.FC = () => (
  <div className={styles.background}>
    <div className={styles.moonlight} style={{ backgroundImage: `url("${MOONLIGHT}")` }} />
  </div>
);

export default Background;
