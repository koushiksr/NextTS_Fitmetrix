'use server';
// write apis for students for next api with request and response
import { NextRequest, NextResponse } from 'next/server';
import { getStudentByAdultIdService, getStudentByAssessorIdService, getStudentBySchoolIdService, getStudentsService } from './student.service';

export async function getStudentBySchoolId(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const schoolId = searchParams.get('schoolId');
  try {
    if (!schoolId) {
      return NextResponse.json({ error: 'School ID is required' }, { status: 400 });
    }
    const students = await getStudentBySchoolIdService(schoolId);
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

// get student by adult id
export async function getStudentByAdultId(req: NextRequest & { params: { adultId: string } }) {
  try {
    const adultId = req.params.adultId;
    if (!adultId) {
      return NextResponse.json({ error: 'Adult ID is required' }, { status: 400 });
    }
    const students = await getStudentByAdultIdService(adultId);
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

// get student by assessor id
export async function getStudentByAssessorId(req: NextRequest & { params: { assessorId: string } }) {
  try {
    const assessorId = req.params.assessorId;
    if (!assessorId) {
      return NextResponse.json({ error: 'Assessor ID is required' }, { status: 400 });
    }
    const students = await getStudentByAssessorIdService(assessorId);
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

// get all students
export async function getAllStudents(req: NextRequest) {
  try {
    const students = await getStudentsService();
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
