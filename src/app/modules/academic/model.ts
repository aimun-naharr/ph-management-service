import mongoose from 'mongoose';
import { TAcademic, TAcademicSemesterName, TMonth } from './interface';
import {
  AcademicSemesterCodeEnum,
  AcademicSemesterNameEnum,
  Months,
} from '../../libs/constants';

const academicSemesterSchema = new mongoose.Schema<TAcademic>(
  {
    name: {
      type: String,
      enum: AcademicSemesterNameEnum,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemesterCodeEnum,
      required: true,
    },
    year: { type: String, required: true },
    startMonth: {
      type: 'String',
      required: true,
      enum: Months,
    },
    endMonth: {
      type: 'String',
      required: true,
      enum: Months,
    },
  },
  { timestamps: true },
);

export const AcademicSemesterModel = mongoose.model<TAcademic>(
  'Academic',
  academicSemesterSchema,
);
