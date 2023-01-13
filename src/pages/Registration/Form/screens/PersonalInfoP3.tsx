import React from 'react';
import clsx from 'clsx';
import Scrollbars from 'react-custom-scrollbars-2';

import Checkboxes from 'components/form/Checkboxes';
import styles from './styles.module.scss';

const PersonalInfoP3 = (): JSX.Element => (
  <Scrollbars className={clsx(styles.screen, styles.personalInfo)} renderView={(props) => <div className={styles.scrollbox} {...props} />} renderTrackHorizontal={(props) => <div className={styles.horizontalScrollbar} {...props} />}>
    <h1 className={styles.title}>Personal Information</h1>
    <p className={styles.text}>Are you aware you have to be 18 by the start of our event (February 24th, 2023)?</p>
  </Scrollbars>
);

export default PersonalInfoP3;
