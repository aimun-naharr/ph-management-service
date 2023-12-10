/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { createAsync } from '../../libs';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

const getSingleStudent = createAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  },
);

const getAllStudents = createAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    });
  },
);

const deleteStudent = createAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  },
);

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
