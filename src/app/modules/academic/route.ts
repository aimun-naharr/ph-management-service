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

router.get('/get-all', AcademicSemesterController.getAllAcademicSemesters);
router.get('/get/:id', AcademicSemesterController.getSingleSemester);
router.patch(
  '/update/:id',
  validateRequest(
    academicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateSemester,
);

export const AcademicRoutes = router;
