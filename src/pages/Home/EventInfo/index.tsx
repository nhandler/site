import React, { useState, useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import styles from './styles.module.scss';



const EventInfo: React.FC = () => {

  return (
  
    <div className={styles.eventInfo}>
      <div>
    <h1 className={styles.h1} > The Event</h1>
      <p>HackIllinois is University of Illinois at Urbana-Champaign’s premiere collegiate hackathon. In recent years, we have run our first fully virtual hackathon as well as our very new Open Source Fellowship.</p>

<p>This year, only groups who work on an open source contribution and add a license will be eligible to win prizes. Contribute to a useful open source tool that you use, an open source project of your own, or join a team led by an open source mentor!</p>
  </div>


  <div>
<h1 className={styles.h1}>Join Us</h1>
<p>Follow us on Twitter <a href = "https://twitter.com/hackillinois?lang=en" target="_blank">(@HackIllinois)</a> and Instagram  <a href = "https://www.instagram.com/hackillinois/?hl=en" target="_blank">(@HackIllinois)</a> to be notified of our event updates! There will be regular content and posts.</p>


<h2 className={styles.h2}> Discord</h2>
<p >Our discord server will be the main hub for our event. You’ll use this to find and communicate with teammates and other attendees, access our workshops and company events, and get help from mentors—all through one centralized platform.</p>


<h2 className={styles.h2}> Twitter</h2>
<p>This is where we’ll be posting main updates with regards to our schedule, additions to our event, and other things we come up with! We’ll also be using it during the event to make updates with any schedule changes and send out reminders for workshops and other mini-events starting out!</p>


<h2 className={styles.h2}>Instagram</h2>
<p>This is where we’ll be posting more of the fun, behind-the-scenes aspects of our event! You’ll get an opportunity to see the work that goes into making the event a possibility through insights from teams and profiles of staff members.</p>
</div>
</div>

  );
};


export default EventInfo;
