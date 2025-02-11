import { classesArray, Classess, dominantSideArray } from '@/constants';
import { z } from 'zod';

const currentDate = new Date();
const minDate = new Date(currentDate.getFullYear() - 100, 0, 1);
const maxDate = new Date(currentDate.getFullYear() - 10, 0, 1);

export const assessmentSchema = z.object({
  // personal details
  studentId: z.string().min(1, 'ID is required'),
  schoolId: z.string().min(3, 'School ID is required'),
  assessmentTeam: z.string().min(1, 'Assessment team is required'),
  assessmentDate: z.date().min(minDate, 'Assessment date must be after 1990-01-01'),
  assessmentId: z.string().min(1, 'Assessment ID is required'),

  // physical details
  heightCms: z.number().min(1, 'Height is required').max(300, 'Height must be less than 300 cm'),
  heightRating: z.number().int().min(1, 'Height rating is required'),
  heightComment: z.string().optional(),

  weightKg: z.string().min(1, 'Weight is required'),
  weightRating: z.number().int().min(1, 'Weight rating is required'),
  weightComment: z.string().optional(),

  heightWeightComment: z.string().optional(),

  bmi: z.string().min(1, 'BMI is required'),
  bmiRating: z.number().int().min(1, 'BMI rating is required'),
  bmiComment: z.string().optional(),

  bodyFatPercentage: z.string().min(1, 'Body Fat Percentage is required'),
  bodyFatRating: z.number().int().min(1, 'Body Fat rating is required'),
  bodyFatComment: z.string().optional(),

  bmiBodyfatComment: z.string().optional(),

  armLengthCms: z.string().min(1, 'Arm length is required'),
  armLengthRating: z.number().int().min(1, 'Arm length rating is required'),
  armLengthComment: z.string().optional(),

  legLengthCms: z.string().min(1, 'Leg length is required'),
  legLengthRating: z.number().int().min(1, 'Leg length rating is required'),
  legLengthComment: z.string().optional(),

  sitAndReachCms: z.string().min(1, 'Sit and Reach is required'),
  sitAndReachRating: z.string().min(1, 'Sit and Reach rating is required'),
  sitAndReachComment: z.string().optional(),

  singleLegBalance: z.string().min(1, 'Single Leg Balance is required'),
  singleLegBalanceRating: z.string().min(1, 'Single Leg Balance rating is required'),
  singleLegBalanceComment: z.string().optional(),

  pushUps: z.string().min(1, 'Push-ups count is required'),
  pushUpsRating: z.string().min(1, 'Push-ups rating is required'),
  pushUpsComment: z.string().optional(),

  gripStrengthKgs: z.string().min(1, 'Grip Strength is required'),
  gripStrengthRating: z.string().min(1, 'Grip Strength rating is required'),
  gripStrengthComment: z.string().optional(),

  squatTest30Secs: z.string().min(1, 'Squat Test result is required'),
  squatTestRating: z.string().min(1, 'Squat Test rating is required'),
  squatTestComment: z.string().optional(),

  plankSecs: z.string().min(1, 'Plank result is required'),
  plankRating: z.string().min(1, 'Plank rating is required'),
  plankComment: z.string().optional(),

  standingLongJumpCms: z.string().min(1, 'Standing Long Jump result is required'),
  standingLongJumpRating: z.string().min(1, 'Standing Long Jump rating is required'),
  standingLongJumpComment: z.string().optional(),

  standingVerticalJumpInches: z.string().min(1, 'Standing Vertical Jump result is required'),
  standingVerticalJumpRating: z.string().min(1, 'Standing Vertical Jump rating is required'),
  standingVerticalJumpComment: z.string().optional(),

  fiveZeroFiveSecs: z.string().min(1, '505 Test result is required'),
  fiveZeroFiveRating: z.string().min(1, '505 Test rating is required'),
  fiveZeroFiveComment: z.string().optional(),

  speed30MtrsSecs: z.string().min(1, '30m Speed Test result is required'),
  speed30MtrsRating: z.string().min(1, '30m Speed Test rating is required'),
  speed30MtrsComment: z.string().optional(),

  sixHundredMtrsMins: z.string().min(1, '600m result is required'),
  sixHundredMtrsRating: z.string().min(1, '600m rating is required'),
  sixHundredMtrsComment: z.string().optional(),

  bearPositionHold: z.string().min(1, 'Bear Position Hold result is required'),
  bearPositionHoldComment: z.string().optional(),
  bearPositionHoldRating: z.string().min(1, 'Bear Position Hold rating is required'),

  overheadSquats: z.string().min(1, 'Overhead Squats result is required'),
  overheadSquatsRating: z.string().min(1, 'Overhead Squats rating is required'),
  overheadSquatsComment: z.string().optional(),

  lungesTest: z.string().min(1, 'Lunges Test result is required'),
  lungesRating: z.string().min(1, 'Lunges Test rating is required'),
  lungesComment: z.string().optional(),

  remark1: z.string().optional(),
  remark2: z.string().optional(),
  remark3: z.string().optional(),

  ongoing: z.boolean().default(false),

  // personal details not important for form since we can get in backend
  name: z.string().min(1, 'Name is required'),
  gender: z.string().min(1, 'Gender is required'),
  dob: z.date().min(minDate, 'Date of birth must be after 1990-01-01').max(maxDate, 'Date of birth must be before 2025-01-01'),
  age: z.number().int().positive('Age must be a positive integer').min(1, 'Age is required').max(100, 'Age must be less than 100'),
  class: z
    .number()
    .min((classesArray[0] as Classess) || 1, 'Class is required')
    .max((classesArray[classesArray.length - 1] as Classess) || 12, 'Class is required')
    .refine((val) => classesArray.includes(val as Classess), 'Invalid class'),

  dominantSide: z.enum(dominantSideArray as [string, ...string[]], {
    message: 'Invalid dominant side',
  }),

  parentName: z.string().min(1, 'Parent name is required'),
  parentMobileNo: z.string().min(10, 'Parent mobile number is required').max(10, 'Parent mobile number should be 10 digits'),
  alternateNo: z.string().min(10, 'alternate  number is required').max(10, 'alternate number should be 10 digits'),

  email: z.string().email('Invalid email').min(1, 'Email is required'),
  residenceArea: z.string().min(3, 'Residence area is required'),
  residenceCity: z.string().min(3, 'Residence city is required'),

  // School Details
  schoolName: z.string().min(3, 'School name is required'),
  schoolContactName: z.string().min(3, 'School contact name is required'),
  schoolContactNumber: z.string().min(10, 'School contact number is required').max(10, 'School contact number should be 10 digits'),
  schoolContactEmailId: z.string().email('Invalid email').min(1, 'School contact email is required'),
});

export type AssessmentType = z.infer<typeof assessmentSchema>;
