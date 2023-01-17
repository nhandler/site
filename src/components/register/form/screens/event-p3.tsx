import React from 'react';
import clsx from 'clsx';

import Checkboxes from 'components/form/Checkboxes';
import Input from 'components/form/Input';
import Scrollbars from 'react-custom-scrollbars-2';
import styles from './styles.module.scss';


const foodOptions = [
  { label: 'None', value: 'None' },
  { label: 'Gluten-Free', value: 'Gluten-Free' },
  { label: 'Vegan', value: 'Vegan' },
  { label: 'Lactose-Intolerant', value: 'Lactose-Intolerant' },
  { label: 'Vegetarian', value: 'Vegetarian' },
  { label: 'Other', value: 'Other', isOther: true },
];

const EventP3 = (): JSX.Element => (
  <Scrollbars className={clsx(styles.screen, styles.eventQuestions)} renderView={(props) => <div className={styles.scrollbox} {...props} />} renderTrackHorizontal={(props) => <div className={styles.horizontalScrollbar} {...props} />}>
    <h1 className={styles.title}>HackIllinois Questions</h1>
    <p className={styles.text}>What food restrictions or allergies do you have?</p>
    <Checkboxes
      className={styles.checkboxes}
      name="dietary"
      options={foodOptions}
    />
    <br />
  </Scrollbars>
);

export default EventP3;
