import * as z from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(1).regex(/^[^ ]+ +[^ ]+.*$/, 'Please enter your first and last name.'),
  gender: z.string().min(1),
  email: z.string().min(1).email(),
  race: z.string().array().min(1),
  ageMin: z.string().array().min(1),
  selfTransport: z.enum(['YES', 'NO']),
  chicagoPurdueTransport: z.enum(['CHICAGO', 'PURDUE', 'N/A']),
  // timezone: z.string().min(1),
  location: z.string().min(1),
  degreePursued: z.enum(['ASSOCIATES', 'BACHELORS', 'MASTERS', 'PHD', 'GRADUATED', 'OTHER']),
  school: z.string().min(1),
  major: z.string().min(1),
  graduationYear: z.number().int(),
  resumeFilename: z.string(),
  whyHack: z.string().min(1),
  programmingYears: z.number().array().min(1),//z.number().int().min(1).max(10),
  programmingAbility:z.number().array().min(1),//z.number().int().min(1).max(10),
  // hasInternship: z.enum(['YES', 'NO']).optional(),
  interests: z.string().array(),
  outreachSurvey: z.string().array(),
  dietary: z.string().array().min(1)

  // terms: z.boolean().refine((val: boolean) => val),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;

export const errorMap: z.ZodErrorMap = (error, ctx) => {
  if (error.message) return { message: error.message };

  if (error.code === z.ZodIssueCode.too_small && error.type === 'string') {
    return { message: 'Required' };
  }

  if (error.code === z.ZodIssueCode.invalid_enum_value) {
    return { message: 'Required' };
  }

  return { message: ctx.defaultError };
};

export const defaultValues = {
  race: [],
  interests: [],
  outreachSurvey: [],
  ageMin: [],
  programmingYears: [],
  programmingAbility: [],
  dietary: []
};
