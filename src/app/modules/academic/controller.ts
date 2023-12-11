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

const getAllAcademicSemesters = createAsync(async (req, res) => {
  const allSemsters =
    await AcademicSemesterServices.getAllAcademicSemestersFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters fetched succesfully',
    data: allSemsters,
  });
});

const getSingleSemester = createAsync(async function (req, res) {
  const semester = await AcademicSemesterServices.getSingleSemesterFromDb(
    req.params.id,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters found succesfully',
    data: semester,
  });
});

const updateSemester = createAsync(async (req, res) => {
  const updatedSemester =
    await AcademicSemesterServices.updateAcademicSemesterIntoDB(
      req.params.id,
      req.body,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters updated succesfully',
    data: updatedSemester,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleSemester,
  updateSemester,
};
