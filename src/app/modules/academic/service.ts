import { isValidObjectId } from 'mongoose';
import { academicSemesterNameCodeMapper } from '../../libs/constants';
import { TAcademic } from './interface';
import { AcademicSemesterModel } from './model';

const createAcademicSemesterIntoDb = async (payload: TAcademic) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code');
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

const getAllAcademicSemestersFromDb = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

const getSingleSemesterFromDb = async (id: string) => {
  if (!isValidObjectId(id)) {
    throw new Error('Please provide a valid id');
  }
  const result = await AcademicSemesterModel.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademic>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDb,
  getAllAcademicSemestersFromDb,
  getSingleSemesterFromDb,
  updateAcademicSemesterIntoDB,
};
