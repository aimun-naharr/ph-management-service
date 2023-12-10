import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidation } from '../student/student.validation';
import { UserControllers } from './controller';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidation.studentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
