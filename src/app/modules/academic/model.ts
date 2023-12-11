import mongoose from 'mongoose';
import {
  AcademicSemesterCodeEnum,
  AcademicSemesterNameEnum,
  Months,
} from '../../libs/constants';
import { TAcademic } from './interface';

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

//checks if the semester exists or not
academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExits = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExits) {
    throw new Error('Semester is already exits');
  }
  next();
});

export const AcademicSemesterModel = mongoose.model<TAcademic>(
  'Academic',
  academicSemesterSchema,
);
