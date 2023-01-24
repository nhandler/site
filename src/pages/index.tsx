import React from 'react';

import Hero from '../components/Hero';
import EventInfo from '../components/EventInfo';
// import FAQs from './FAQs';
// import Sponsors from './Sponsors';
// import Speakers from './Speakers';
// import OurTeam from './OurTeam';
// import Footer from './Footer';

import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <EventInfo />
    {/* <Hero/> */}
    { /*<EventInfo /> */ }
    {/* <FAQs /> */}
    {/* <Speakers /> */}
    {/* <OurTeam /> */}
    {/* <Sponsors /> */}
    {/* <Footer /> */}
  </div>
);

export default Home;
