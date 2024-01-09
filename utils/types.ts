export type WithId<Type> = Type & { id: string; };

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type FileType = 'resume' | 'photo' | 'blobstore';

export type RegistrationType = {
  firstName: string;
  lastName: string;
  // timezone: string;
  gender: string;
  email: string;
  race: string[];
  // ageMin: string[];
  selfTransport: 
  | 'YES'
  | 'NO';
  purdueTransport:
  | 'YES'
  | 'NO'
  | 'N/A';
  location: string;
  degreePursued:
  | 'ASSOCIATES'
  | 'BACHELORS'
  | 'MASTERS'
  | 'PHD'
  | 'GRADUATED'
  | 'OTHER';
  school: string;
  major: string;
  graduationYear: number;
  resumeFilename?: string | undefined;
  whyHack: string;
  programmingYears: number;//number;
  programmingAbility: number;//number;
  // hasInternship?: 'YES' | 'NO';
  interests: string[];
  outreachSurvey: string[];
  dietary: string[];
};

export type RegistrationRole = 'attendee' | 'mentor';

export type RefreshTokenResType = {
    token: string;
  };