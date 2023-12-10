import httpStatus from 'http-status';
import { createAsync } from '../../libs';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './service';

const createAcademicSemester = createAsync(async (req, res) => {
  const newAcademicSemester =
    await AcademicSemesterServices.createAcademicSemesterIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created succesfully',
    data: newAcademicSemester,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
};
