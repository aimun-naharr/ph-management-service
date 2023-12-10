import httpStatus from 'http-status';
import { createAsync } from '../../libs';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './service';

const createStudent = createAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  // const zodParsedData = studentValidationSchema.parse(studentData);

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
