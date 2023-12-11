import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TAcademicSemesterNameCodeMapper,
  TMonth,
} from '../modules/academic/interface';

export const Months: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const AcademicSemesterNameEnum: TAcademicSemesterName[] = [
  'Autumn',
  'Summer',
  'Fall',
];

export const AcademicSemesterCodeEnum: TAcademicSemesterCode[] = [
  '001',
  '002',
  '003',
];
export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: '001',
  Summer: '002',
  Fall: '003',
};
