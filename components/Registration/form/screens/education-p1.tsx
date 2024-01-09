import React from "react";

import Select, { OptionType } from "@/components/form/Select";
import Input from "@/components/form/Input";
import clsx from "clsx";

import majors from "@/modules/majors.json";
import schools from "@/modules/schools.json";
import styles from "./styles.module.scss";
import states from "@/modules/states.json";
import countries from "@/modules/countries.json";

const degreeOptions: OptionType[] = [
    { value: "ASSOCIATES", label: "Associates Degree" },
    { value: "BACHELORS", label: "Bachelor’s Degree" },
    { value: "MASTERS", label: "Master’s Degree" },
    { value: "PHD", label: "PhD" },
    { value: "GRADUATED", label: "Graduated" },
    { value: "OTHER", label: "Other" }
];

const graduationYearOptions: OptionType[] = [];
for (let i = 2026; i >= 1970; i -= 1) {
    graduationYearOptions.push({ value: i, label: String(i) });
}
graduationYearOptions.push({ value: 0, label: "N/A" });

const schoolOptions: OptionType[] = schools
    .concat("N/A")
    .map(school => ({ value: school, label: school }));

const firstMajors = [
    "Computer Science",
    "Computer Engineering",
    "Electrical Engineering"
];
const remainingMajors = majors.filter(major => !firstMajors.includes(major));
const majorOptions: OptionType[] = firstMajors
    .concat(remainingMajors)
    .concat("N/A")
    .map(major => ({ value: major, label: major }));

const locationOptions = states
    .concat(countries)
    .filter(place => place !== "United States") // removing US because we want people in the US to pick a state
    .concat("Other")
    .map(place => ({ value: place, label: place }));

const Education = (): JSX.Element => (
    <div className={clsx(styles.screen, styles.education)}>
        <h1 className={styles.title}>Education</h1>
        {/* <p className={styles.text}>What state/country are you currently residing in?</p> */}
        {/* <Input className={styles.input} name="location" placeholder="Type your response here" /> */}
        <Select
            name="location"
            options={locationOptions}
            placeholder="What state/country are you currently residing in?"
            menuPlacement="bottom"
        />
        <Select
            name="degreePursued"
            options={degreeOptions}
            placeholder="What degree are you currently pursuing?"
            menuPlacement="auto"
        />
        <Select
            name="major"
            options={majorOptions}
            placeholder="What is your major?"
            menuPlacement="auto"
            creatable
        />
        {/* <Select name="graduationYear" options={graduationYearOptions} placeholder="Graduation Year (Enter N/A if not applicable)" /> */}
        <Select
            name="school"
            options={schoolOptions}
            placeholder="What university do you attend?"
            menuPlacement="top"
            creatable
        />
    </div>
);

export default Education;
