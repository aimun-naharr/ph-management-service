import z from 'zod';
import {
  AcademicSemesterCodeEnum,
  AcademicSemesterNameEnum,
  Months,
} from '../../libs/constants';

const MonthEnum = z.enum([...Months] as [string, ...string[]]);
const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterNameEnum] as [string, ...string[]]),
    code: z.enum([...AcademicSemesterCodeEnum] as [string, ...string[]]),
    year: z.string(),
    startMonth: MonthEnum,
    endMonth: MonthEnum,
  }),
});

export const academicSemesterValidation = {
  createAcademicSemesterValidationSchema,
};
