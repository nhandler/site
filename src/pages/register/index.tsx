import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Background from '../../components/register/background';
import Navigation from '../../components/register/navigation';
import Form from '../../components/register/form';

import { authenticate, isAuthenticated } from 'util/api';

import styles from './styles.module.scss';

const Registration: React.FC = () => {
  const [formIndex, setFormIndex] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      authenticate(`${process.env.NEXT_PUBLIC_REACT_APP_URL}${router.pathname}`);
    }
  }, []);

  return (
    <div className={styles.registration}>
      <Background />
      <Navigation setFormIndex={setFormIndex} formIndex={formIndex} />
      <Form setFormIndex={setFormIndex} formIndex={formIndex} />
    </div>
  );
};

export default Registration;
