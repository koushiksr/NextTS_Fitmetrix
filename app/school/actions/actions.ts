'use server';
import { getSchoolModel, getStudentModel } from '@/lib/mongodb';

// get a school  students count by school id
export async function getSchoolStudentsCount(schoolID: string) {
  const school = await getSchoolModel();
  const students = await school.find({ schoolID: schoolID }).toArray();
  return students.length;
}

// get a school boys count and girls count by school id
export async function getSchoolBoysCount(schoolID: string) {
  const school = await getSchoolModel();
  const students = await school.find({ schoolID: schoolID, gender: 'male' }).toArray();
  return students.length;
}

// get a school girls count by school id
export async function getSchoolGirlsCount(schoolID: string) {
  const school = await getSchoolModel();
  const students = await school.find({ schoolID: schoolID, gender: 'female' }).toArray();
  return students.length;
}

// get a school students by school id
export async function getStudentBySchoolId(schoolID: string) {
  const student = await getStudentModel();
  const students = await student.find({ schoolID: schoolID }).toArray();
  students.map((student: any) => {
    student._id = student._id.toString();
  });
  return students;
}
