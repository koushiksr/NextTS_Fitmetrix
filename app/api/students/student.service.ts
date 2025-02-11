// write service for students
import { getStudentModel } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function getStudentsService() {
  const students = await getStudentModel();
  return students.find({}).toArray();
}

// get student by id
export async function getStudentByIdService(id: string) {
  const students = await getStudentModel();
  return students.find({ _id: new ObjectId(id) }).toArray();
}

// get student by school id
export async function getStudentBySchoolIdService(schoolId: string) {
  const students = await getStudentModel();
  return students.find({ schoolId: new ObjectId(schoolId) }).toArray();
}

// get student by adult id
export async function getStudentByAdultIdService(adultId: string) {
  const students = await getStudentModel();
  return students.find({ adultId: new ObjectId(adultId) }).toArray();
}

// get student by assessor id
export async function getStudentByAssessorIdService(assessorId: string) {
  const students = await getStudentModel();
  return students.find({ assessorId: new ObjectId(assessorId) }).toArray();
}
