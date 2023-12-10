import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './controller';
import { academicSemesterValidation } from './validation';

const router = express.Router();

router.post(
  '/create-new',
  validateRequest(
    academicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);

export const AcademicRoutes = router;
