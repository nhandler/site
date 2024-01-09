import React from "react";
import clsx from "clsx";

import Checkboxes from "@/components/form/Checkboxes";
import Select from "@/components/form/Select";
// import Scrollbars from 'react-custom-scrollbars-2';
import styles from "./styles.module.scss";

const learnOptions = [
    { label: "Instagram", value: "Instagram" },
    { label: "Twitter", value: "Twitter" },
    { label: "Facebook", value: "Facebook" },
    { label: "LinkedIn", value: "LinkedIn" },
    { label: "Slack", value: "Slack" },
    { label: "Reddit", value: "Reddit" },
    { label: "Word of Mouth", value: "Word of Mouth" },
    { label: "CS Department Email", value: "CS Department Email" },
    {
        label: "Posters/Flyers on UIUC Campus",
        value: "Posters/Flyers on UIUC Campus"
    },
    { label: "Other", value: "Other", isOther: true }
];

const EventP2 = (): JSX.Element => (
    // <Scrollbars className={clsx(styles.screen, styles.eventQuestions)} renderView={(props) => <div className={styles.scrollbox} {...props} />} renderTrackHorizontal={(props) => <div className={styles.horizontalScrollbar} {...props} />}>
    <div>
        <h1 className={styles.title}>HackIllinois Questions</h1>
        <p className={styles.text}>How did you hear of HackIllinois?</p>
        <Checkboxes
            className={styles.checkboxes}
            name="outreachSurvey"
            options={learnOptions}
        />
        <br />
    </div>
    // </Scrollbars>
);

export default EventP2;
