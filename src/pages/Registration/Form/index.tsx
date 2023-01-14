import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useForm, SubmitHandler, SubmitErrorHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegistrationType } from '../../../util/types';
import { getRegistration, getRoles, refreshToken, register } from 'util/api';
import MOLEMACHINE from 'assets/registration/whack_a_mole_machine.svg';
import Button from 'components/form/Button';
import { registrationSchema, RegistrationSchema, errorMap, defaultValues } from '../validation';
import Welcome from './screens/Welcome';
import PersonalInfoP1 from './screens/PersonalInfo';
import PersonalInfoP2 from './screens/PersonalInfoP2';
import PersonalInfoP3 from './screens/PersonalInfoP3';
import Education from './screens/Education';
import EducationP2 from './screens/EducationP2';
import Experience from './screens/Experience';
import ExperienceP2 from './screens/ExperienceP2';
import Event from './screens/Event';
import EventP2 from './screens/EventP2';
import EventP3 from './screens/EventP3';
import Finish from './screens/Finish';

import styles from './styles.module.scss';
import FormNavigation from './FormNavigation';



type FormProps = {
  formIndex: number,
  setFormIndex: React.Dispatch<React.SetStateAction<number>>,
};

const fields: (keyof RegistrationSchema)[][] = [
  [],
  ['name', 'email', 'location', 'timezone', 'gender'],
  ['race'],
  ['degreePursued', 'graduationYear', 'school', 'major'],
  ['programmingYears', 'programmingAbility', 'resumeFilename'],
  ['interests', 'outreachSurvey'],
  [],
];

// const pages = [Welcome, PersonalInfo, PersonalInfoP2, PersonalInfoP3, Education, EducationP2, Experience, ExperienceP2, Event, EventP2, EventP3, Finish]; //With Welcome Page
const pages = [PersonalInfoP1, PersonalInfoP2, PersonalInfoP3, Education, EducationP2, Experience, ExperienceP2, Event, EventP2, EventP3, Finish];
const submitPageIndex = 9;
const postSubmitPageIndex = submitPageIndex + 1;

const convertToAPI = (data: RegistrationSchema): RegistrationType => {
  const { name, gender: possibleGender, race: possibleRace, ...registration } = data;
  const [firstName, ...remainingWords] = name.split(' ');
  const lastName = remainingWords.join(' ') || ' ';

  // For gender and race, we default to 'Prefer Not to Answer' if user doesn't select anything so that
  // when they come back to edit registration, they'll see the prefer not to answer option selected
  const gender = possibleGender || 'Prefer Not to Answer';
  const race = possibleRace.length === 0 ? ['Prefer Not to Answer'] : possibleRace;

  return { ...registration, firstName, lastName, gender, race };
};

const convertFromAPI = (registration: RegistrationType): RegistrationSchema => {
  const { firstName, lastName, ...remaining } = registration;
  const name = firstName ? (`${firstName} ${lastName}`).trim() : '';
  return { ...remaining, name };
};

const Form = ({ formIndex, setFormIndex }: FormProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const methods = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema, { errorMap }),
    defaultValues,
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    getRoles().then((roles) => {
      if (roles.includes('Applicant')) {
        setIsEditing(true);
        return getRegistration('attendee');
      }
      return null;
    }).then((registrationWithId) => {
      if (registrationWithId) {
        const { id, ...registration } = registrationWithId;
        methods.reset(convertFromAPI(registration));
      }
    }).finally(() => {
      setIsLoading(false);
    });
  }, []); // deliberately not including `methods`

  const onSubmit: SubmitHandler<RegistrationSchema> = (data) => {
    console.log(data);
    console.log("data");

    setIsLoading(true);
    return register(isEditing, 'attendee', convertToAPI(data)).then(() => {
      setFormIndex(postSubmitPageIndex);
      refreshToken(); // token changes after registration, so need to refetch
    }).catch(() => {
      alert('There was an error while submitting. If this error persists, please email contact@hackillinois.org');
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const onError: SubmitErrorHandler<RegistrationSchema> = (errorData) => {
    console.log(errorData);
    for (let i = 0; i < fields.length; i += 1) {
      if (fields[i].some((field) => errorData[field])) {
        console.log(methods.getValues());
        setFormIndex(i);
        return;
      }
    }
  };

  const nextPage = () => setFormIndex((current) => current + 1);
  const previousPage = () => setFormIndex((current) => current - 1);

  return (
    <div className={styles.container} style={{ backgroundImage: `url("${MOLEMACHINE}")` }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
          {pages.map((Page, i) => (
            // the array should be constant, so using index as key is fine
            // eslint-disable-next-line react/no-array-index-key
            <div className={clsx(styles.screenContainer, formIndex === i && styles.visible)} key={i}>
              <Page />

              {formIndex !== postSubmitPageIndex && ( // last page does not have any buttons
                <div className={styles.buttons}>
                  {/* {(formIndex !== 0) && <Button arrow="right" onClick={nextPage}>Previous</Button>} */}
                  <Button arrow="left" hidden={formIndex === 0} onClick={previousPage}>Back</Button>
                  <div className={styles.spacer} />
                  {isLoading && <Button loading>Loading...</Button>}
                  {(!isLoading && formIndex !== submitPageIndex) && <Button arrow="right" onClick={nextPage}>Next</Button>}
                  {(!isLoading && formIndex === submitPageIndex) && <Button type="submit">Submit</Button>}
                </div>
              )}
            </div>
          ))}
        </form>
      </FormProvider>
      <FormNavigation setFormIndex={setFormIndex} formIndex={formIndex}></FormNavigation>
      
    </div>
  );
};

export default Form;
