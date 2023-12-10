import { TAcademic } from './interface';
import { AcademicSemesterModel } from './model';

const createAcademicSemesterIntoDb = async (payload: TAcademic) => {
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDb,
};
