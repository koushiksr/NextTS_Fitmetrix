import { getAssessmentModel } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// featch all assesments by student id
export async function getAssesmentsByStudentIdService(studentId: string) {
  const assesments = await getAssessmentModel();
  return assesments.find({ studentId: new ObjectId(studentId) }).toArray();
}

// featch all assesments by school id
export async function getAssesmentsBySchoolIdService(schoolId: string) {
  const assesments = await getAssessmentModel();
  return assesments.find({ schoolId: new ObjectId(schoolId) }).toArray();
}

// featch all assesments by assessor id
export async function getAssesmentsByAssessorIdService(assessorId: string) {
  const assesments = await getAssessmentModel();
  return assesments.find({ assessorId: new ObjectId(assessorId) }).toArray();
}

// featch all assesments by adult id
export async function getAssesmentsByAdultIdService(adultId: string) {
  const assesments = await getAssessmentModel();
  return assesments.find({ adultId: new ObjectId(adultId) }).toArray();
}
