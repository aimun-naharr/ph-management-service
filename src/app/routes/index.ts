import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/route';
import { AcademicRoutes } from '../modules/academic/route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
