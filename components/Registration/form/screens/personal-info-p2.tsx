import React from "react";
import clsx from "clsx";
// import Scrollbars from 'react-custom-scrollbars-2';

import Checkboxes from "@/components/form/Checkboxes";
import styles from "./styles.module.scss";

const raceOptions = [
    {
        label: "American Indian or Alaska Native",
        value: "American Indian or Alaska Native",
        isRadio: true
    },
    { label: "Asian", value: "Asian", isRadio: true },
    {
        label: "Black or African American",
        value: "Black or African American",
        isRadio: true
    },
    {
        label: "Native Hawaiian or Other Pacific Islander",
        value: "Native Hawaiian or Other Pacific Islander",
        isRadio: true
    },
    { label: "Hispanic or Latino", value: "Hispanic or Latino", isRadio: true },
    { label: "White", value: "White", isRadio: true },
    {
        label: "Biracial/Multiracial",
        value: "Biracial/Multiracial",
        isRadio: true
    },
    {
        label: "Prefer Not to Answer",
        value: "Prefer Not to Answer",
        isRadio: true
    }
];

const PersonalInfoP2 = (): JSX.Element => (
    // <Scrollbars className={clsx(styles.screen, styles.personalInfo)} renderView={(props) => <div className={styles.scrollbox} {...props} />} renderTrackHorizontal={(props) => <div className={styles.horizontalScrollbar} {...props} />}>
    <div>
        <h1 className={styles.title}>Personal Information</h1>
        <p className={styles.text}>Race/Ethnicity</p>
        <p className={styles.note}>
            <i>
                <b>Note:</b> In light of recent events, we are collecting this
                information in order to determine what our current attendee
                demographics are and how we can work on increasing diversity.
                However, we understand if you prefer not to answer.{" "}
            </i>
        </p>
        <Checkboxes
            className={styles.checkboxes}
            name="race"
            options={raceOptions}
        />
    </div>

    // </Scrollbars>
);

export default PersonalInfoP2;
