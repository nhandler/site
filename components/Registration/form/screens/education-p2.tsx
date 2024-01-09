import React from 'react';

import Select, { OptionType } from '@/components/form/Select';
import FileUpload from '@/components/form/FileUpload';
import clsx from 'clsx';

import majors from '@/modules/majors.json';
import schools from '@/modules/schools.json';
import styles from './styles.module.scss';

const degreeOptions: OptionType[] = [
  { value: 'ASSOCIATES', label: 'Associates Degree' },
  { value: 'BACHELORS', label: 'Bachelor’s Degree' },
  { value: 'MASTERS', label: 'Master’s Degree' },
  { value: 'PHD', label: 'PhD' },
  { value: 'GRADUATED', label: 'Graduated' },
  { value: 'OTHER', label: 'Other' },
];

const graduationYearOptions: OptionType[] = [];
for (let i = 2026; i >= 1970; i -= 1) {
  graduationYearOptions.push({ value: i, label: String(i) });
}
graduationYearOptions.push({ value: 0, label: 'N/A' });

const schoolOptions: OptionType[] = schools.concat('N/A').map((school) => ({ value: school, label: school }));

const firstMajors = ['Computer Science', 'Computer Engineering', 'Electrical Engineering'];
const remainingMajors = majors.filter((major) => !firstMajors.includes(major));
const majorOptions: OptionType[] = firstMajors
  .concat(remainingMajors)
  .concat('N/A')
  .map((major) => ({ value: major, label: major }));

const EducationP2 = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.education)}>
    <h1 className={styles.title}>Education</h1>
    <Select name="graduationYear" options={graduationYearOptions} placeholder="What is your graduation year?" />
    <br/>
    <br/>
    <p className={styles.textOp}>Please submit a copy of your resume, it will be shared with our sponsors</p>
    <FileUpload
      className={styles['resume-upload']}
      name="resumeFilename"
      type="resume"
      accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      text="File types accepted: PDF and DOCX "
    />
  </div>
);

export default EducationP2;
