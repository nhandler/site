import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

type PropTypes = {
  name: string,
  hideErrors?: boolean,
};

const ErrorMessage = ({ name, hideErrors = false }: PropTypes): JSX.Element | null => {
  const {formState:{ errors }} = useForm();

  // if (!hideErrors && errors[name]) {
  //   return <div className={styles.errorMessage}>{errors}</div>;
  // }
  //https://react-hook-form.com/api/useformstate/errormessage
  return null;
};

export default ErrorMessage;
