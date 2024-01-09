import React from 'react';
import clsx from 'clsx';

import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import Constant from '@/components/form/Constant';
import states from '@/modules/states.json';
import countries from '@/modules/countries.json';
import styles from './styles.module.scss';

const locationOptions = states
  .concat(countries)
  .filter((place) => place !== 'United States') // removing US because we want people in the US to pick a state
  .concat('Other')
  .map((place) => ({ value: place, label: place }));

const genderOptions = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Non-Binary', value: 'Non-Binary' },
  { label: 'Prefer Not to Answer', value: 'Prefer Not to Answer' },
];

const PersonalInfo = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.personalInfo)}>
    <h1 className={styles.title}>Personal Information</h1>
    <p className={styles.text}>What is your name?</p>
    <Input className={styles.input} name="name" placeholder="Type your response here" />
    <Select
      className={styles.select}
      name="gender"
      options={genderOptions}
      placeholder="Gender"
      menuPlacement="auto"
      // creatable
    />
    <br></br>
    <i className={styles.note}><b>Note:</b> In light of recent events, we are collecting this information in order to determine what our current attendee demographics are and how we can work on increasing diversity. However, we understand if you prefer not to answer.</i>
    <p className={styles.text}>What is your email address?</p>
    <Input className={styles.input} name="email" placeholder="Type your response here" />
    {/* <Select
      className={styles.select}
      name="location"
      options={locationOptions}
      placeholder="Where are you located this semester? *"
      menuPlacement="top"
    /> */}
    <Constant name="timezone" value={`GMT${new Date().toString().split('GMT')[1]}`} />
    
  </div>
);

export default PersonalInfo;
