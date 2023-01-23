import React from 'react';

import FERRIS_WHEEL_LARGE from 'assets/home/hero/ferris_wheel_large.svg';
import FERRIS_WHEEL_SMALL from 'assets/home/hero/ferris_wheel_small.svg';
import BANNER from 'assets/home/hero/banner.svg';
import LINES from 'assets/home/hero/lines.svg';
import router, { useRouter } from 'next/router';
import Button from 'components/form/Button';
import styles from './styles.module.scss';
import buttonStyles from '../../../components/form/Button/styles.module.scss'

const Section: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.heroBackground}>
      <div className={styles.leftAlign}>
        <button className={buttonStyles.button} type="button" onClick={() => router.push('/register')}>Register</button>
      </div>
      <div className={styles.topHeader}>
        <h2>Welcome to</h2>
        <h1>HackIllinois</h1>
      </div>
      <img className={styles.ferrisWheelLarge} src={FERRIS_WHEEL_LARGE} />
      <img className={styles.ferrisWheelSmall} src={FERRIS_WHEEL_SMALL} />
    </div>
    <div className={styles.heroFooter}>
      <span className={styles.subtitle}>making memories</span>
      <img className={styles.banner} src={BANNER} />
      <img className={styles.lines} src={LINES} />
    </div>
  </section>
);

export default Section;
