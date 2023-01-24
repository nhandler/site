import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import FIREWORK_1 from 'assets/home/event_info/firework_1.svg';
import FIREWORK_2  from 'assets/home/event_info/firework_2.svg';
import FIREWORK_3 from 'assets/home/event_info/firework_3.svg';
import GROUP from 'assets/home/event_info/group.svg';

const Section = () => {
    return (
        <section className={styles.eventInfo}>
            <img className={styles.group} src={GROUP} />
            <div className={styles.textWrapper}>
                <h2 className={styles.h1}>The Event</h2>
                <p>HackIllinois is University of Illinois at Urbana-Champaign’s premiere collegiate hackathon. In recent years, we have run our first fully virtual hackathon as well as our very new Open Source Fellowship.</p>
                <p>This year, only groups who work on an open source contribution and add a license will be eligible to win prizes. Contribute to a useful open source tool that you use, an open source project of your own, or join a team led by an open source mentor!</p>
                <h2>Join Us</h2>
                <p>Follow us on Twitter <a href="https://twitter.com/hackillinois?lang=en" target="_blank">(@HackIllinois)</a> and Instagram  <a href="https://www.instagram.com/hackillinois/?hl=en" target="_blank">(@HackIllinois)</a> to be notified of our event updates! There will be regular content and posts.</p>
                <h3>Discord</h3>
                <p>Our discord server will be the main hub for our event. You’ll use this to find and communicate with teammates and other attendees, access our workshops and company events, and get help from mentors—all through one centralized platform.</p>
                <h3>Twitter</h3>
                <p>This is where we’ll be posting main updates with regards to our schedule, additions to our event, and other things we come up with! We’ll also be using it during the event to make updates with any schedule changes and send out reminders for workshops and other mini-events starting out!</p>
                <h3>Instagram</h3>
                <p>This is where we’ll be posting more of the fun, behind-the-scenes aspects of our event! You’ll get an opportunity to see the work that goes into making the event a possibility through insights from teams and profiles of staff members.</p>
            </div>
            <img className={clsx(styles.firework, styles.firework1)} src={FIREWORK_1} />
            <img className={clsx(styles.firework, styles.firework2)} src={FIREWORK_2} />
            <img className={clsx(styles.firework, styles.firework3)} src={FIREWORK_3} />
        </section>
    );
};

export default Section;