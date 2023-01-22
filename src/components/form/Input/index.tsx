import React from 'react';
import { useFormContext } from 'react-hook-form';

import ErrorMessage from '../ErrorMessage';
import StyledInput from './StyledInput';
import HelpIcon from './HelpIcon';
import styles from './styles.module.scss';

type PropTypes = {
  name: string,
  multiline?: boolean;
  helpLink?: string;
  linkColor?: string;
  [key: string]: unknown;
};

const Input = ({ name, multiline, helpLink, linkColor = 'white', ...props }: PropTypes): JSX.Element => {
  const { register } = useFormContext();

  return (
    <>
      <div className={styles.inputContainer}>
        <StyledInput type="text" multiline={multiline} {...props} 
        {...register(name, { required: true })}
        />
        {helpLink && (
          <a className={styles.helpLink} href={""} target="_blank" rel="noreferrer" title="Please add your Discord Username (Ex. yourusername#0123)">
            <HelpIcon color={linkColor} />
          </a>
        )}
      </div>
      <ErrorMessage name={name} />
    </>
  );
};

export default Input;
