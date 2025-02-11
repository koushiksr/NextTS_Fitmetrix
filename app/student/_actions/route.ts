import { getStudentModel } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// featch all students
export async function getStudents() {
  const students = await getStudentModel();
  return students.find({}).toArray();
}

// featch a student by id
export async function getStudentById(id: string) {
  const student = await getStudentModel();
  return student.find({ _id: new ObjectId(id) }).toArray();
}

// featch a student by school id
export async function getStudentBySchoolId(schoolID: string) {
  const student = await getStudentModel();
  return student.find({ schoolID: schoolID }).toArray();
}
