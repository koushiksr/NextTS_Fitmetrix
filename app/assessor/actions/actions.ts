'use server';

import { getAssessmentModel, getStudentModel } from '@/lib/mongodb';
import { revalidatePath } from 'next/cache';
// import { NextRequest } from 'next/server';
// import { skip } from 'node:test';
import { z } from 'zod';

// get a list of all assesments by assessor id
export async function getAssessmentsByAssessorId(assessorId: string) {
  const Assessments = await getAssessmentModel();
  let assessments = (await Assessments.find({ assessorID: assessorId }).toArray()) || [];

  return assessments;
}

// get a list of all assesments by school id
// Get a list of all assessments by school ID
export async function getAssessmentsBySchoolId(schoolId: string, page: number, limit: number) {
  const Assessments = await getAssessmentModel();

  let assessments = await Assessments.find({ SchoolID: schoolId }, { projection: { _id: 1, Name: 1, ID: 1, SchoolID: 1, Gender: 1, email: 1, ParentMobileNo: 1, AssessmentDate: 1 } })
    .sort({ createdAt: -1 })
    // .skip(page * limit)
    // .limit(limit)
    .toArray();

  assessments.forEach((assessment: any) => {
    assessment._id = assessment._id.toString();
  });

  return assessments;
}

// get a list of all assesments by student id
export async function getAssessmentsByStudentId(studentId: string) {
  const Assessments = await getAssessmentModel();
  let assessments = (await Assessments.find({ studentID: studentId }).toArray()) || [];

  return assessments;
}

// get a list of all assesments by adult id
export async function getAssessmentsByAdultId(adultId: string) {
  const Assessments = await getAssessmentModel();
  let assessments = (await Assessments.find({ adultID: adultId }).toArray()) || [];

  return assessments;
}

//getStudentByAssessorId
export async function getStudentByAssessorId(assessorId: string) {
  // const Students = await getStudentModel();
  // // let students = (await Students.find({ assessorID: assessorId }).toArray()) || [];
  // const students = await Students.find({ SchoolID: assessorId }).toArray();

  // students.forEach((student) => {
  //   // @ts-ignore
  //   student._id = student._id.toString() as string;
  // });
  // return students;
  return await getStudentBySchoolId(assessorId);
}

// tempraryly we are using this function for dummy data
export async function getStudentBySchoolId(schoolID: string) {
  const student = await getStudentModel();
  const students = await student.find({ schoolID: schoolID }).toArray();
  students.map((student: any) => {
    student._id = student._id.toString();
  });
  return students;
}

export async function createPost(data: any) {
  try {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const age = parseInt(data.age);

    // use zod for validation
    const schema = z.object({
      name: z.string().min(1),
      email: z.string().email(),
      age: z.number().min(1),
    });

    console.log('validated');

    const validatedFields = schema.safeParse({ name, email, age });

    if (!validatedFields.success) {
      return { error: 'Invalid fields. Failed to Create Assessment.' };
    }

    const { name: name1, email: email1, age: age1 } = validatedFields as any;

    // store in mongodb
    const assessment = await getAssessmentModel();
    await assessment.insertOne({ name: name1, email: email1, age: age1 });
    console.log('Assessment created');

    // Revalidate cache
    revalidatePath('/assessor/assessments');
    return { success: 'Assessment created successfully' };
  } catch (error) {
    console.error('Error creating assessment:', error);
    return { error: 'Failed to create assessment.' };
  }
}

// get a list of all student ids by school id  project only ids not all then filter
export async function getStudentIdsBySchoolId(schoolId: string) {
  const Students = await getStudentModel();
  let students = (await Students.find({ schoolID: schoolId }).project({ candidateID: true }).toArray()) || [];
  return students;
}

//get list of all schoolids by assessor id
export async function getSchoolIdsByAssessorId(assessorId: string) {
  const Students = await getStudentModel();
  let students = (await Students.find({ assessorID: assessorId }).project({ schoolID: true }).toArray()) || [];
  return students;
}
