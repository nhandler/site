/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';
import LIGHT from '../../../assets/registration/navigation/light.svg';
import LIGHT_ON from '../../../assets/registration/navigation/activatedLight.svg';
import PERSONAL_INFO_MOLE from '../../../assets/registration/navigation/personal_info_mole.svg';
import HIDE_PERSONAL_INFO_MOLE from '../../../assets/registration/navigation/personal_info_mole_hidden.svg';
import EDUCATION_MOLE from '../../../assets/registration/navigation/education_mole.svg';
import HIDE_EDUCATION_MOLE from '../../../assets/registration/navigation/education_mole_hidden.svg'
import PRIOR_EXPERIENCE_MOLE from '../../../assets/registration/navigation/prior_experience_mole.svg';
import HIDE_PRIOR_EXPERIENCE_MOLE from '../../../assets/registration/navigation/prior_experience_mole_hidden.svg';
import HACKILLINOIS_MOLE from '../../../assets/registration/navigation/hackillinois_mole.svg';
import HIDE_HACKILLINOIS_MOLE from '../../../assets/registration/navigation/hackillinois_mole_hidden.svg';
import HOLE from '../../../assets/registration/navigation/hole.svg'

type Props = {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>,
  formIndex: number,
};

const lights: [name: string, cx: number, cy: number, r: number, textx: number][] = [
  ['Welcome', 1639.5, 120, 18, 1602.5],
  ['Personal Info', 1817, 120, 18, 1760],
  ['Demographics', 1995, 120, 18, 1915],
  ['Education', 2276.5, 120, 18, 2236.5],
  ['Experience', 2496.5, 120, 18, 2454.5],
  ['Event Questions', 2496.5, 120, 18, 2454.5],
  ['Finish', 2705.5, 120, 18, 2679.5],
];

const startScreenIndex = 0;
const finishScreenIndex = 6;

const Fixtures = ({ setFormIndex, formIndex }: Props): JSX.Element => {
  // we don't want the moles for the Finish page to be clickable, and if we're on the Finish page nothing should be clickable
  const isDisabled = (i: number) => (i === finishScreenIndex) || (formIndex === finishScreenIndex) || (i === startScreenIndex) || (formIndex === startScreenIndex);
  var mole1 = HOLE;
  var mole2 = HOLE;
  var mole3 = HOLE;
  var mole4 = HOLE;


  switch (formIndex) {
    case 1:
      mole1 = PERSONAL_INFO_MOLE;
      break;
    case 2:
      mole1 = HIDE_PERSONAL_INFO_MOLE;
      mole2 = EDUCATION_MOLE;
      break;
    case 3:
      mole1 = HIDE_PERSONAL_INFO_MOLE;
      mole2 = HIDE_EDUCATION_MOLE;
      mole3 = PRIOR_EXPERIENCE_MOLE;
      break;
    case 4:
      mole1 = HIDE_PERSONAL_INFO_MOLE;
      mole2 = HIDE_EDUCATION_MOLE;
      mole3 = HIDE_PRIOR_EXPERIENCE_MOLE;
      mole4 = HACKILLINOIS_MOLE;
      break;
    default:
      mole1 = HIDE_PERSONAL_INFO_MOLE;
      mole2 = HIDE_EDUCATION_MOLE;
      mole3 = HIDE_PRIOR_EXPERIENCE_MOLE;
      mole4 = HIDE_HACKILLINOIS_MOLE;
      break;
  }

  return (
    <div className={styles.ovenLights}>
      {lights.map(([name], i) => (
        <div className={clsx(styles.lightGroup, isDisabled(i) && styles.disabled)} onClick={() => !isDisabled(i) && setFormIndex(i)}>
          {i === formIndex ? (
            <div>
              {i === 1 ? (
                <img className={styles.activeMole} src={mole1} alt="" />
              ) : i === 2 ? (
                <img className={styles.activeMole} src={mole2} alt="" />
              ) : i === 3 ? (
                <img className={styles.activeMole} src={mole3} alt="" />
              ) : i === 4 ? (
                <img className={styles.activeMole} src={mole4} alt="" />
              ) : (
                <img className={styles.activeMole} src={HOLE} alt="" />
              )}
            </div>
          ) : i < formIndex ? (
            <div>
              {i === 1 ? (
                <img className={styles.inactiveMole} src={mole1} alt="" />
              ) : i === 2 ? (
                <img className={styles.inactiveMole} src={mole2} alt="" />
              ) : i === 3 ? (
                <img className={styles.inactiveMole} src={mole3} alt="" />
              ) : i === 4 ? (
                <img className={styles.inactiveMole} src={mole4} alt="" />
              ) : (
                <img className={styles.inactiveMole} src={HOLE} alt="" />
              )}
            </div>
          ) : (
            <div>
              {i === 1 ? (
                <img className={styles.hole} src={mole1} alt="" />
              ) : i === 2 ? (
                <img className={styles.hole} src={mole2} alt="" />
              ) : i === 3 ? (
                <img className={styles.hole} src={mole3} alt="" />
              ) : i === 4 ? (
                <img className={styles.hole} src={mole4} alt="" />
              ) : (
                <img className={styles.hole} src={HOLE} alt="" />
              )}
            </div>
          )}
          {i === formIndex ? (
            <p className={styles.selectedText}>{name}</p>
          ) : (
            <p className={styles.normalText}>{name}</p>
          )}
          
        </div>
      ))}
    </div>
  );
};

export default Fixtures;
